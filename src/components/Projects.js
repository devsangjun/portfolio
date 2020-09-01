import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import BinderFavicon from "../images/binder_favicon.png";
import AboutTimerFavicon from "../images/about_timer_favicon.png";
import WeatherOrNotFavicon from "../images/weather_or_not_favicon.png";
import MoogleFavicon from "../images/moogle_favicon.png";
import TLDRFavicon from "../images/tldr_favicon.png";

const data = [
  {
    title: "Binder",
    description:
      "Allows the user to create multiple timers and run them simultaneously",
    date: "JUL 2019",
    skills: ["React", "Redux"],
    favicon: BinderFavicon,
  },
  {
    title: "AboutTimer",
    description:
      "Allows the user to create multiple timers and run them simultaneously",
    date: "AUG 2019",
    skills: ["React", "Redux"],
    favicon: AboutTimerFavicon,
  },
  {
    title: "Weather Or Not",
    description:
      "Allows the user to create multiple timers and run them simultaneously",
    date: "MAY 2020",
    skills: ["React", "Redux"],
    favicon: WeatherOrNotFavicon,
  },
  {
    title: "Moogle",
    description:
      "Allows the user to create multiple timers and run them simultaneously",
    date: "MAY 2020",
    skills: ["React", "Redux"],
    favicon: MoogleFavicon,
  },
  {
    title: "TL;DR",
    description:
      "Allows the user to create multiple timers and run them simultaneously",
    date: "JUN 2020",
    skills: ["React", "Redux"],
    favicon: TLDRFavicon,
  },
];

const Projects = props => {
  const { className } = props;

  return (
    <div className={className}>
      <h2 className="section-header">Projects</h2>
      <div className="project-cards">
        {data.map((project, index) => (
          <ProjectCard className="project-card" key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default styled(Projects)`
  padding: 1.5rem 2rem;
  background-color: #f5f5f7;
  .project-cards {
    display: flex;
    padding: 1.5rem;
    .project-card {
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
