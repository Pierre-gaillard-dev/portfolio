// components
import { ChevronLeft, ExternalLink, Github } from "./icons"
import Button from "./Button"
// types
import type { Project, language } from "../type"
// css
import "./css/ProjectDetail.css"
import "./css/Project.css"
import { FC, RefObject, useRef } from "react"

export const getIframe = (project: Project, ref: RefObject<any>) => {
  const url = project.demo
  if (!url) return <div>Demo not found</div>

  //github
  if (url.startsWith("https://github.com/")) {
    return (
      <iframe
        src={url}
        width={"100%"}
        height={"100%"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ref={ref}
      ></iframe>
    )
  }

  //itch.io
  if (url.includes("itch.io")) {
    return (
      <iframe
        frameBorder="0"
        src={url}
        allowFullScreen
        width={"100%"}
        height={"100%"}
        ref={ref}
      >
        <a href="https://pierre-gaillard-dev.itch.io/gipoulet">
          Play Gipoulet on itch.io
        </a>
      </iframe>
    )
  }

  return (
    <iframe
      src={url}
      width={"100%"}
      height={"100%"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      ref={ref}
    ></iframe>
  )
}

const ProjectDetail: FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const formatText = (text: string) => {
    let result = text.split("\n").map((line, index) => {
      if (line !== "") {
        return <p key={index}>{line}</p>
      } else {
        return <br key={index} />
      }
    })
    return result
  }

  return (
    <div className="content projectDetail">
      <section id="hero" className="background_light">
        <div className="container">
          <a onClick={onClose} className="back">
            <ChevronLeft />
            Retour
          </a>
          <div className="split">
            <div>
              <h2>{project.title}</h2>
              {project.languages && (
                <div className="split left languages">
                  {project.languages.map((language: language, index) => {
                    return (
                      <p key={index} className={language.slug}>
                        {language.name}
                      </p>
                    )
                  })}
                </div>
              )}
            </div>
            <div className="split links">
              <Button link={project.github} color="white">
                <Github />
                <span>Github</span>
              </Button>
              {project.demo ? (
                <Button link={project.demo} color="white">
                  <ExternalLink />
                  <span>Demo</span>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {project.demo && project.is_playable_demo ? (
        <section id="demo" className="container">
          <h2>Testez-le</h2>
          <div
            className="center"
            style={{
              width: project.demo_width || "100%",
              height:
                project.demo_height ||
                (iframeRef.current?.clientWidth || 600) /
                  (project.aspect_ratio || 16 / 9),
            }}
          >
            {getIframe(project, iframeRef)}
            <a className="full-screen" href={project.demo} target="_blank">
              <ExternalLink />
            </a>
          </div>
        </section>
      ) : null}
      {project.video ? (
        <section id="video" className="container">
          <h2>démonstration</h2>
          <div className="center">
            <iframe
              width={project.demo_width || "530px"}
              height={project.demo_height || "300px"}
              src={project.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      ) : null}
      {(!project.demo && !project.video) || !project.is_playable_demo ? (
        <section id="image" className="container">
          <img src={project.img} alt={project.title} />
        </section>
      ) : null}
      <section id="description" className="container">
        <h2>Description</h2>
        {formatText(project.description)}
        <br style={{ height: "2rem" }} />
        <p>
          <span className="bold">Début du projet :</span> {project.started_at}
        </p>
        {project.finished_at ? (
          <p>
            <span className="bold">Fin du projet :</span> {project.finished_at}
          </p>
        ) : null}
        <p>
          <span className="bold">Dur&eacute;e passée sur le projet :</span>{" "}
          {project.duration}
        </p>
      </section>
      <section id="conditions" className="container">
        <h2>Conditions</h2>
        {formatText(project.conditions)}
      </section>
      <section id="droits" className="container">
        <h2>Droits d'auteur</h2>
        {formatText(project.copyright)}
      </section>
    </div>
  )
}

export default ProjectDetail
