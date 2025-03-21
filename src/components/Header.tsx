"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import "./css/Header.css"

const Header: React.FC<{ sticky?: boolean | undefined }> = ({ sticky }) => {
	const [opened, setOpened] = useState<boolean>(false)

	const switch_popup = () => {
		if (opened) {
			setOpened(false)
		} else {
			setOpened(true)
		}
	}

	let pathname = usePathname()

	return (
		<section id="header">
			<header className={sticky ? "sticky" : ""}>
				<nav id="nav_bar">
					<Link href={"/#hero"} id="logo">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 327.42 348.68"
							fill="currentColor"
							stroke="currentColor"
						>
							<g id="G">
								<path
									fill="#currentColor"
									d="M275.71,223.89c-8.09.14-22.91-.22-31-.11,3.04,2.73,4.78,3.39,4.63,13.87-.22,15.04-2.81,19.29-14.63,25.75-16.3,8.9-58.2,6.8-73.17-5.47-15.09-12.37-17.89-30.84-18.83-43.24-2.21,1.24-11.69,3.89-14.03,4.28.67,49.03,28.07,64.03,78.68,64.03,59.47,0,63.64-27.33,63.85-45.79.14-12.08,1.85-10.8,4.49-13.3Z"
								/>
								<path
									fill="currentColor"
									d="M285.65,218.13c10.1.72,11.24,13.75,11.24,13.75h6.84v-45.33h-7.18c0,9.68-4.67,13.06-12.98,12.83-2.68-.07-47.39,0-47.39,0-17.2-.79-15.61-9.41-15.83-13.7h-7.75v45.05h8.35c0-10.18,6.69-13.01,15.2-12.67"
								/>
								<path
									fill="currentColor"
									d="M248.35,171.88s12.93-17.92.15-35.09c-12.08-16.24-37.56-18.84-62.28-9.72s-41.16,34.18-45.43,66.57c-2.38,1.31-4.83,2.46-7.24,3.45-2.49,1.02-4.09,1.56-6.6,2.3,0-25.05,15.52-52.78,27.61-66.42,12.07-11.9,19.41-19.08,39.7-24.39,44.43-11.62,95.55,23.64,54.08,63.3Z"
								/>
							</g>
							<g id="P">
								<path
									fill="currentColor"
									d="M129.95,119.16v5.59c-7.11,0-10.53,4.96-12.14,10.4-6.24,2.24-13.43,5.49-22.12,10.12-.08-12.14-2.76-20.11-14.35-20.11v-6h48.61Z"
								/>
								<path
									fill="currentColor"
									d="M129.95,279.31v2.47h-48.61v-2.28c15.34-2.83,14.35-24.48,14.35-24.48v-86.6c8.69-4.63,15.88-7.88,22.12-10.12-1.15,3.84-1.38,7.93-1.38,10.67v86.24s-.69,21.15,13.52,24.1Z"
								/>
								<path
									fill="currentColor"
									d="M146.79,136c-3.36,4.26-7.34,10.26-10.19,14.71,0,0-2.64-.14-5.89.02-4.84.24-9.64,1.17-14.28,2.5-7.52,2.17-14.61,5.39-20.74,8.47-5.18,2.6-9.66,5.1-13.13,6.77-8.2,3.95-19.73,6.39-25.97-3.8-5.55-9.04,1.15-19.85,6.98-25.21,4.47-4.1,12.78-10.04,13.29-10.41-13.03,11.57-15.54,41.54,11.47,26.21,2.57-1.46,5.02-2.81,7.36-4.06,8.69-4.63,15.88-7.88,22.12-10.12,9.78-3.52,13.09-4.85,21.48-5.58,4.99-.44,7.5.51,7.5.51Z"
								/>
								<path
									fill="currentColor"
									d="M142.8,210.08c-1.94.82-3.85,1.54-5.71,2.15-3.76,1.24-5.98,1.74-8.32,2.13-1.94.32-3.97.56-7.04,1.09v-9.36c3.19-.92,5.35-1.52,7.09-2.03,2.51-.74,4.11-1.28,6.6-2.3,2.41-.99,4.86-2.14,7.24-3.45,11.18-6.18,27.23-18.57,12.33-34.57,3.62-5.77,8.89-13.99,12.18-19.11,5.02,4.5,8.79,9.09,11.54,20.86,4.54,19.28-16.92,36.61-35.91,44.59Z"
								/>
								<path
									fill="currentColor"
									d="M91.89,213.55v6.09c-14.19.86-24.22-.01-24.22-.01,0,0,11.03-2.64,24.22-6.08Z"
								/>
							</g>
						</svg>
					</Link>
					<div>
						<ul className="desktop nav_bar_list">
							<Link href={"/#hero"}>Accueil</Link>
							<Link
								href={
									pathname.includes("/projects")
										? "/projects"
										: "/#projects"
								}
							>
								Projets
							</Link>
							<Link href={"/#skills"}>Compétences</Link>
						</ul>
						<div
							id="menu_icon"
							className="mobile"
							onClick={switch_popup}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="100"
								height="100"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-menu"
							>
								<line x1="3" y1="12" x2="21" y2="12"></line>
								<line x1="3" y1="6" x2="21" y2="6"></line>
								<line x1="3" y1="18" x2="21" y2="18"></line>
							</svg>
						</div>
					</div>
				</nav>

				<div
					id="nav_bar_popup"
					className={"mobile" + (opened ? " opened" : "")}
				>
					<div
						id="menu_close_button"
						className="mobile"
						onClick={switch_popup}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="100"
							height="100"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-x"
						>
							<line x1="18" y1="6" x2="6" y2="18"></line>
							<line x1="6" y1="6" x2="18" y2="18"></line>
						</svg>
					</div>
					<ul className="nav_bar_list">
						<a>Accueil</a>
						<a>Projets</a>
						<a>Compétences</a>
					</ul>
				</div>
			</header>
		</section>
	)
}

export default Header
