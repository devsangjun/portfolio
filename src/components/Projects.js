import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import BinderFavicon from "../images/binder_favicon.png";
import AboutTimerFavicon from "../images/about_timer_favicon.png";
import WeatherOrNotFavicon from "../images/weather_or_not_favicon.png";
import MoogleFavicon from "../images/moogle_favicon.png";
import TLDRFavicon from "../images/tldr_favicon.png";
import LockeyFavicon from "../images/lockey_favicon.png";

const data = [
  {
    title: "Binder",
    description: "Create a to-do-list and have it stored locally.",
    date: "JUL 2019",
    skills: ["React", "Redux"],
    favicon: BinderFavicon,
    codeLink: "https://github.com/ohyeyoye/binder",
    runLink: "https://ohyeyoye.github.io/binder",
  },
  {
    title: "AboutTimer",
    description: "Set multiple timers and run them simultaneously.",
    date: "AUG 2019",
    skills: ["React", "Redux"],
    favicon: AboutTimerFavicon,
    codeLink: "https://github.com/ohyeyoye/about-timer",
    runLink: "https://ohyeyoye.github.io/about-timer",
  },
  {
    title: "Weather Or Not",
    description:
      "Search for weathers in cities and save them to your Favorites.",
    date: "MAY 2020",
    skills: ["React", "Redux", "Node"],
    favicon: WeatherOrNotFavicon,
    codeLink: "https://github.com/ohyeyoye/weather-or-not",
    serverLink: "https://github.com/ohyeyoye/weather-or-not-server",
    runLink: "https://ohyeyoye.github.io/weather-or-not",
  },
  {
    title: "Moogle",
    description: 'No more Googling. Just "moogle" movies for a brief synopsis.',
    date: "MAY 2020",
    skills: ["React", "Redux", "Node"],
    favicon: MoogleFavicon,
    codeLink: "https://github.com/ohyeyoye/moogle",
    serverLink: "https://github.com/ohyeyoye/moogle-server",
    runLink: "https://ohyeyoye.github.io/moogle",
  },
  {
    title: "TL;DR",
    description: "Create a personal Markdown blog online.",
    date: "JUN 2020",
    skills: ["React", "Redux", "Node"],
    favicon: TLDRFavicon,
    codeLink: "https://github.com/ohyeyoye/tldr",
    serverLink: "https://github.com/ohyeyoye/tldr-server",
    runLink: "https://ohyeyoye.github.io/tldr",
  },
  {
    title: "Lockey",
    description:
      "Save your passwords in your web vault. (Secured with encryption with your secret master password)",
    date: "OCT 2020",
    skills: ["React", "Redux", "Firebase Auth & DB"],
    favicon: LockeyFavicon,
    runLink: "https://lockey-d41ff.web.app/",
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
  padding: 2rem 1.5rem 4rem 1.5rem;
  .project-cards {
    display: flex;
    flex-wrap: wrap;
    padding: 1.5rem;
    .project-card {
      width: calc(50% - 1rem);
      margin-right: 1rem;
      margin-bottom: 1rem;
      &:nth-child(even) {
        width: 50%;
        margin-right: 0;
      }
    }
  }
`;
