export type Project = {
	id: string
	title: string
	img: string
	languages: language[]
	githubLink: string
	demoLink: string | null
	playableDemo?: boolean
	demoWidth: number | null
	demoHeight: number | null
	aspectRatio?: number | null
	videoLink: string | null
	startDate: string
	endDate: string | null
	duration: string | null
	description: string
	conditions: string
	copyright: string
}

export type language = { text: string; className: string }

declare global {
	interface Window {
		gtag?: (...args: any) => void
	}
}
