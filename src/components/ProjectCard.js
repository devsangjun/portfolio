import React from "react";
import styled from "styled-components";
import { VscCode, VscServer, VscDebugStart } from "react-icons/vsc";
const ProjectCard = props => {
  const {
    className,
    title,
    description,
    date,
    favicon,
    codeLink,
    serverLink,
    runLink,
  } = props;
  return (
    <div className={className}>
      <div className="project-top-container">
        <span className="project-date">{date}</span>
      </div>
      <img
        className="project-favicon"
        src={favicon}
        alt={`${title}-icon`}
        draggable="false"
      />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {serverLink && (
          <span className="alert-message">
            Server runs on Heroku, so it may take a few API calls or refreshes
            to wake the server up
          </span>
        )}
      </div>
      <div className="project-links">
        <a href={codeLink}>
          <VscCode className="link-icon" />
        </a>
        {serverLink && (
          <a href={serverLink}>
            <VscServer className="link-icon" />
          </a>
        )}
        <a href={runLink}>
          <VscDebugStart className="link-icon" />
        </a>
      </div>
    </div>
  );
};

export default styled(ProjectCard)`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 18rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  .project-top-container {
    text-align: right;
    border-bottom: 1px solid lightgray;
    padding: 1rem;
    .project-date {
      color: gray;
      font-size: 0.75em;
    }
  }
  .project-favicon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 2;
    width: 4rem;
    height: 4rem;
    border: 1px solid lightgray;
    border-radius: 50%;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in-out;
  }
  .project-content {
    flex: 1;
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    .project-title {
      font-size: 1.4em;
    }
    .project-description {
      margin-top: 0.5rem;
      color: gray;
      line-height: 1.5em;
    }
    .alert-message {
      font-size: 0.8em;
      color: lightcoral;
    }
  }
  .project-links {
    padding: 1rem;
    text-align: right;
    font-size: 1.5em;
    border-top: 1px solid lightgray;
    a {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
      .link-icon {
        color: gray;
        transition: all 200ms ease-in-out;
        &:hover {
          color: black;
          transform: scale(1.25);
        }
      }
    }
  }
`;
