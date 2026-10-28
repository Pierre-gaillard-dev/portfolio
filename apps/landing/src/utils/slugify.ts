// Characters that NFD normalization doesn't decompose into ASCII
const LIGATURES: Record<string, string> = {
  œ: 'oe',
  æ: 'ae',
  ß: 'ss',
  ø: 'o',
  đ: 'd',
  ł: 'l',
}

/**
 * Converts a string into a URL-friendly slug.
 * @example slugify("L'été à Noël : œuvre n°1 !") // "l-ete-a-noel-oeuvre-n-1"
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[œæßøđł]/g, (char) => LIGATURES[char] ?? char)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
