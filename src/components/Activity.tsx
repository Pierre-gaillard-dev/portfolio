import { useEffect, useState } from "react"

import Overlay from "./Overlay"
import ProjectDetail from "./projectDetail"
// import  from "../config/api"

import "./css/activity.css"

import { getProjectByFolderName } from "../projects.json"

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

export type Activity = {
  projectName: string
  fileName: string
  timeStamp: Date | null
  projectId: string
}

const Activity: React.FC = () => {
  const [activity, setActivity] = useState<Activity>({
    projectName: "",
    fileName: "",
    timeStamp: null,
    projectId: "",
  })

  const [overlay, setOverlay] = useState<boolean>(false)

  const getDuration = () => {
    if (activity.timeStamp) {
      const duration =
        new Date().valueOf() -
        Date.parse(activity.timeStamp.toString()).valueOf()
      const durationInMinutes = duration / 60000
      const durationInHours = durationInMinutes / 60
      if (durationInHours >= 1) {
        return (
          Math.round(durationInHours) +
          "h" +
          Math.round(durationInMinutes % 60) +
          "min"
        )
      } else {
        return Math.round(durationInMinutes) + "min"
      }
    }
  }

  // useEffect(() => {
  //   const fetchActivity = async () => {
  //     try {
  //       const apiUrl = getApiUrl(API_CONFIG.ENDPOINTS.ACTIVITY)
  //       const response = await fetch(apiUrl)
  //       const data = await response.json()
  //       const projectId = getProjectByFolderName(data.projectName)?.id
  //       setActivity({ ...data, projectId: projectId })
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération de l'activité:", error)
  //     }
  //   }

  //   fetchActivity()
  // }, [])
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
              activity.projectId ? "card split clickable" : "card split"
            }
            id="activity"
            {...(activity.projectId ? { onClick: () => setOverlay(true) } : {})}
          >
            <div id="activity_icon">
              <img
                src={
                  fileExtensionToIconLink[
                    activity.fileName.split(".")[
                      activity.fileName.split(".").length - 1
                    ]
                  ]
                }
              />
            </div>
            <div id="activity_text">
              <h3>Actuellement sur VSCode</h3>
              <p>
                Projet : <span className="bold">{activity.projectName}</span>
              </p>
              <p>
                Depuis :{" "}
                <span className="bold">
                  {activity.timeStamp && getDuration()}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Activity
