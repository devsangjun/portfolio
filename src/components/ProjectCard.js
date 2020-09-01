import React from "react";
import styled from "styled-components";

const ProjectCard = props => {
  const { className, title, description, date, favicon } = props;
  return (
    <div className={className}>
      <img className="project-favicon" src={favicon} alt={`${title}-icon`} />
      <span className="project-date">{date}</span>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default styled(ProjectCard)`
  position: relative;
  height: 15rem;
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  .project-favicon {
    position: relative;
    z-index: 2;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.2);
  }
  .project-date {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: gray;
    font-size: 0.8em;
  }
  .project-title {
    font-size: 1.4em;
    margin-top: 1rem;
  }
  .project-description {
    margin-top: 0.5rem;
    color: gray;
  }
  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 3rem;
    left: 0;
    width: 100%;
    border-bottom: 1px solid lightgray;
  }
`;
