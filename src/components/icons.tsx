export const ChevronLeft: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	)
}

export const ChevronRight: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="9 18 15 12 9 6"></polyline>
		</svg>
	)
}

export const X: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</svg>
	)
}

export const Menu: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="100"
			height="100"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="3" y1="12" x2="21" y2="12"></line>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<line x1="3" y1="18" x2="21" y2="18"></line>
		</svg>
	)
}

export const Mail: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-mail"
		>
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			<polyline points="22,6 12,13 2,6"></polyline>
		</svg>
	)
}

export const Github: React.FC = () => {
	return (
		<svg
			width="98"
			height="96"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 98 96"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
				fill="currentColor"
			/>
		</svg>
	)
}

export const Linkedin: React.FC = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
			<path
				style={{ fillRule: "evenodd" }}
				d="M512,475.14,195.04,195.04h68.93v35.14h.76c10.51-18.94,41.54-38.18,79.92-38.18,73.65,0,94.21,39.11,94.21,111.54v135.32h-73.15v-121.98c0-32.43-12.95-60.88-43.23-60.88-36.77,0-54.3,24.89-54.3,65.76v117.1h-73.15v-243.82h0ZM73.14,438.86h73.15v-243.82h-73.15v243.82ZM155.43,109.71c0,25.26-20.46,45.71-45.71,45.71s-45.72-20.46-45.72-45.71,20.46-45.72,45.72-45.72,45.71,20.46,45.71,45.72Z"
			/>
			<path
				style={{ fillRule: "evenodd", fill: "#fff" }}
				d="M474.92,0H38.59C17.72,0,0,16.5,0,36.84v438.3c0,20.36,11.63,36.86,32.49,36.86h436.33c20.9,0,43.18-16.5,43.18-36.86V36.84c0-20.34-16.19-36.84-37.08-36.84ZM195.04,195.04h68.93v35.14h.76c10.51-18.94,41.54-38.18,79.92-38.18,73.65,0,94.21,39.11,94.21,111.54v135.32h-73.15v-121.98c0-32.43-12.95-60.88-43.23-60.88-36.77,0-54.3,24.89-54.3,65.76v117.1h-73.15v-243.82h0ZM73.14,438.86h73.15v-243.82h-73.15v243.82ZM155.43,109.71c0,25.26-20.46,45.71-45.71,45.71s-45.72-20.46-45.72-45.71,20.46-45.72,45.72-45.72,45.71,20.46,45.71,45.72Z"
			/>
		</svg>
	)
}
