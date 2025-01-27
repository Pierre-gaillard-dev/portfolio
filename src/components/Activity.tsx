import React from "react"
import { useEffect, useState } from "react"

import Overlay from "./Overlay"
import ProjectDetail from "./projectDetail"

import "./css/activity.css"

import { getProjectByFolderName } from "../projects.json"
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage.external"

const fileExtensionToIconLink: { [key: string]: string } = {
	jsx: "../icons/react.webp",
	tsx: "../icons/react.webp",
	js: "../icons/javascript.svg",
	ts: "../icons/typescript.svg",
	py: "../icons/python.svg",
	php: "../icons/php.svg",
	css: "../icons/css.svg",
	html: "../icons/html5.svg",
}

const Activity: React.FC = () => {
	const [activity, setActivity] = useState({
		projectName: "",
		fileName: "",
		timeStamp: "",
		projectId: "",
	})

	const [overlay, setOverlay] = useState<boolean>(false)

	useEffect(() => {
		const fetchActivity = async () => {
			const response = await fetch("/api/activity")
			const data = await response.json()
			const projectId = getProjectByFolderName(data.projectName)?.id
			setActivity({ ...data, projectId: projectId })
			console.log(data, projectId)
		}

		fetchActivity()
	}, [])
	return (
		<>
			{activity.projectName !== "" && (
				<>
					{overlay && (
						<Overlay close={() => setOverlay(false)}>
							<ProjectDetail
								id={activity.projectId}
								close={() => setOverlay(false)}
							/>
						</Overlay>
					)}
					<div
						className={
							activity.projectId
								? "card split clickable"
								: "card split"
						}
						id="activity"
						{...(activity.projectId
							? { onClick: () => setOverlay(true) }
							: {})}
					>
						<div id="activity_icon">
							<img
								src={
									fileExtensionToIconLink[
										activity.fileName.split(".")[
											activity.fileName.split(".")
												.length - 1
										]
									]
								}
							/>
						</div>
						<div id="activity_text">
							<h3>Actuellement sur VSCode</h3>
							<p>
								Projet :{" "}
								<span className="bold">
									{activity.projectName}
								</span>
							</p>
							<p>{activity.timeStamp}</p>
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Activity
