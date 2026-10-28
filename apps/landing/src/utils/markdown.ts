/**
 * Minimal markdown parser: headings, images, lists and line breaks.
 * It returns a tree of nodes instead of an HTML string, so the text is
 * rendered (and escaped) by Astro: raw HTML in the source can't inject markup.
 */

export type ImageNode = { type: 'image'; alt: string; src: string }

export type InlineNode = { type: 'text'; value: string } | ImageNode

export type Line = InlineNode[]

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export type Block =
  | { type: 'heading'; level: HeadingLevel; content: Line }
  | { type: 'paragraph'; lines: Line[] }
  | { type: 'list'; ordered: boolean; items: Line[] }
  | ImageNode

const SAFE_PROTOCOLS = ['http', 'https']

// Rejects `javascript:`, `data:`... Browsers ignore whitespace/control chars
// inside the scheme (`java\tscript:`), so they are stripped before the check.
export const isSafeUrl = (url: string) => {
  // eslint-disable-next-line no-control-regex
  const normalized = url.replace(/[\u0000- \u007f]/g, '')
  const scheme = /^([a-z][a-z0-9+.-]*):/i.exec(normalized)?.[1]
  return !scheme || SAFE_PROTOCOLS.includes(scheme.toLowerCase())
}

const IMAGE_REGEX = /!\[([^\]]*)\]\(\s*([^\s)]+)\s*\)/g
const HEADING_REGEX = /^(#{1,6})\s+(.*?)(?:\s+#+)?\s*$/
const UNORDERED_ITEM_REGEX = /^\s*[-*+]\s+(.*)$/
const ORDERED_ITEM_REGEX = /^\s*\d+[.)]\s+(.*)$/

const parseInline = (text: string): Line => {
  const nodes: Line = []
  const pushText = (value: string) => {
    if (value) nodes.push({ type: 'text', value })
  }

  let lastIndex = 0
  for (const match of text.matchAll(IMAGE_REGEX)) {
    const [raw, alt = '', src = ''] = match
    pushText(text.slice(lastIndex, match.index))
    if (isSafeUrl(src)) {
      nodes.push({ type: 'image', alt, src })
    } else {
      pushText(raw)
    }
    lastIndex = match.index + raw.length
  }
  pushText(text.slice(lastIndex))

  return nodes
}

export const parseMarkdown = (markdown: string): Block[] => {
  const blocks: Block[] = []
  // false after a blank line or a heading: the next line starts a new block
  let isLastBlockOpen = false

  for (const line of markdown.replace(/\r\n?/g, '\n').split('\n')) {
    if (!line.trim()) {
      isLastBlockOpen = false
      continue
    }
    const lastBlock = isLastBlockOpen ? blocks.at(-1) : undefined

    const heading = HEADING_REGEX.exec(line)
    if (heading) {
      const [, hashes = '#', text = ''] = heading
      blocks.push({
        type: 'heading',
        level: hashes.length as HeadingLevel,
        content: parseInline(text),
      })
      isLastBlockOpen = false
      continue
    }

    const unordered = UNORDERED_ITEM_REGEX.exec(line)
    const item = unordered ?? ORDERED_ITEM_REGEX.exec(line)
    if (item) {
      const ordered = !unordered
      const content = parseInline(item[1] ?? '')
      if (lastBlock?.type === 'list' && lastBlock.ordered === ordered) {
        lastBlock.items.push(content)
      } else {
        blocks.push({ type: 'list', ordered, items: [content] })
      }
      isLastBlockOpen = true
      continue
    }

    const content = parseInline(line.trim())

    // an image alone on its line is a block, not part of a paragraph
    const [firstNode] = content
    if (content.length === 1 && firstNode?.type === 'image') {
      blocks.push(firstNode)
      isLastBlockOpen = false
      continue
    }

    if (lastBlock?.type === 'paragraph') {
      lastBlock.lines.push(content)
    } else {
      blocks.push({ type: 'paragraph', lines: [content] })
    }
    isLastBlockOpen = true
  }

  return blocks
}
