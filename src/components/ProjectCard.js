import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import Code from "@material-ui/icons/Code";
import Dns from "@material-ui/icons/Dns";
import Play from "@material-ui/icons/PlayArrow";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";

const ProjectCard = props => {
  const {
    className,
    title,
    summary,
    description,
    date,
    skills,
    codeLink,
    serverLink,
    runLink,
  } = props;
  const [arrowDown, setArrowDown] = useState(true);
  const projectDescription = useRef();
  const iconButton = useRef();
  const onClick = e => {
    iconButton.current.style.transform = arrowDown
      ? "rotate(180deg)"
      : "rotate(0deg)";
    setArrowDown(!arrowDown);
  };
  return (
    <div className={`${className} shadow`}>
      <div className="project-header">
        <h2 className="project-title">{title}</h2>
        <div className="header-btm-container">
          <span className="project-subtitle">{summary}</span>
          <span className="project-date">{date}</span>
        </div>
      </div>
      <IconButton className="icon-btn" onClick={onClick} ref={iconButton}>
        <ArrowDown />
      </IconButton>
      <div
        className="project-body"
        style={{
          opacity: arrowDown ? "0" : "1",
          height: arrowDown ? "0" : "6rem",
        }}
      >
        <p
          className={`project-description ${arrowDown ? "close" : "open"}`}
          ref={projectDescription}
        >
          {description}
        </p>
      </div>
      <div className="project-btm-container">
        <ul className="project-skills">
          {skills.map((skill, index) => (
            <li className="project-skill" key={index}>
              #{skill}
            </li>
          ))}
        </ul>
        <div className="project-tools">
          {codeLink && (
            <IconButton href={codeLink} target="_blank">
              <Code />
            </IconButton>
          )}
          {serverLink && (
            <IconButton href={serverLink} target="_blank">
              <Dns />
            </IconButton>
          )}
          <IconButton href={runLink} target="_blank">
            <Play />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default styled(ProjectCard)`
  width: calc(33% - 0.5rem);
  padding: 2rem;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: white;
  .project-header {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 0.5rem;
    .project-title {
      font-size: 1.3em;
    }
    .header-btm-container {
      display: flex;
      justify-content: space-between;
      .project-subtitle {
        font-size: 0.8em;
      }
      .project-date {
        font-size: 0.8em;
      }
    }
  }
  .icon-btn {
    transition: all 300ms ease-in-out;
  }
  .project-body {
    width: 100%;
    overflow: hidden;
    transition: all 300ms ease-in-out;
  }
  .open {
    height: fit-content;
  }
  .close {
    height: 0;
  }
  .project-btm-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .project-skills {
      display: flex;
      width: 100%;
      .project-skill {
        margin-right: 0.5rem;
        font-size: 0.7em;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  @media (max-width: 960px) {
    width: calc(50% - 0.5rem);
  }
  @media (max-width: 640px) {
    .project-header {
      .project-title {
        font-size: 1em;
      }
      .header-btm-container {
        display: flex;
        flex-direction: column;
        .project-subtitle {
          font-size: 0.8em;
        }
        .project-date {
          font-size: 0.8em;
        }
      }
    }
    .project-body {
      .project-description {
        font-size: 0.8em;
      }
    }
    .project-btm-container {
      .project-skills {
        display: none;
      }
    }
  }

  @media (max-width: 640px) {
    width: calc(50% - 0.5rem);
    .project-header {
      .project-title {
        font-size: 1em;
      }
      .header-btm-container {
        display: flex;
        flex-direction: column;
        .project-subtitle {
          font-size: 0.8em;
        }
        .project-date {
          font-size: 0.8em;
        }
      }
    }
    .project-body {
      .project-description {
        font-size: 0.8em;
      }
    }
    .project-btm-container {
      .project-skills {
        display: none;
      }
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    .project-header {
      .project-title {
        font-size: 1em;
      }
      .header-btm-container {
        display: flex;
        justify-content: space-between;
        .project-subtitle {
          font-size: 0.8em;
        }
        .project-date {
          font-size: 0.8em;
        }
      }
    }
    .project-body {
      .project-description {
        font-size: 0.8em;
      }
    }
  }
`;

// <div className={className}>
// <div className="project-top-container">
//   <span className="project-date">{date}</span>
// </div>
// <img
//   className="project-favicon"
//   src={favicon}
//   alt={`${title}-icon`}
//   draggable="false"
// />
// <div className="project-content">
//   <h3 className="project-title">{title}</h3>
//   <p className="project-description">{description}</p>
//   {serverLink && (
//     <span className="alert-message">
//       Server runs on Heroku, so it may take a few API calls or refreshes
//       to wake the server up
//     </span>
//   )}
// </div>
// <div className="project-btm-container">
//   <ul className="skills-list">
//     {skills.map((skill, index) => (
//       <li key={index} className="skill-item">
//         #{skill}{" "}
//       </li>
//     ))}
//   </ul>
//   <ul className="project-links">
//     {codeLink && (
//       <a href={codeLink}>
//         <VscCode className="link-icon" />
//       </a>
//     )}
//     {serverLink && (
//       <a href={serverLink}>
//         <VscServer className="link-icon" />
//       </a>
//     )}
//     <a href={runLink}>
//       <VscDebugStart className="link-icon" />
//     </a>
//   </ul>
// </div>
// </div>
