export type Project = {
  id: string
  title: string
  img: string
  github: string
  demo: string | null
  is_playable_demo: boolean | null
  demo_height: number | null
  demo_width: number | null
  aspect_ratio: number | null
  video: string | null
  description: string
  conditions: string
  copyright: string
  started_at: string
  finished_at: string | null
  duration: string | null
  languages: language[] | null
  created_at: string
  updated_at: string
}

export type language = {
  id: string
  name: string
  slug: string
  created_at: string
  updated_at: string | null
}

declare global {
  interface Window {
    gtag?: (...args: any) => void
  }
}
