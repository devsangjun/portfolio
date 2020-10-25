import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const data = [
  {
    title: "SpotLight",
    summary: "Your Online Diary",
    description:
      "Keep your entries online, bookmark them, and search keywords to retrieve some of your precious memories.",
    date: "OCT 2020",
    skills: ["React", "Redux", "Firebase Auth & Firestore"],
    runLink: "https://lockey-d41ff.web.app/",
    color: "#FFC800",
  },
  {
    title: "Lockey",
    summary: "Password Vault",
    description:
      "Save your passwords in your web vault with a master password that auto-locks every 3 minutes.",
    date: "OCT 2020",
    skills: ["React", "Redux", "Firebase Auth & DB"],
    runLink: "https://lockey-d41ff.web.app/",
    color: "#005CE6",
  },
  {
    title: "Moogle",
    summary: "Movie Search Engine",
    description: 'No more Googling. Just "moogle" movies for a brief synopsis.',
    date: "MAY 2020",
    skills: ["React", "Redux", "Node"],
    codeLink: "https://github.com/ohyeyoye/moogle",
    serverLink: "https://github.com/ohyeyoye/moogle-server",
    runLink: "https://ohyeyoye.github.io/moogle",
    color: "#3F35E2",
  },
  {
    title: "Weather or Not",
    summary: "Weather App",
    description:
      "Search for weathers in cities and save them to your Favorites.",
    date: "MAY 2020",
    skills: ["React", "Redux", "Node"],
    codeLink: "https://github.com/ohyeyoye/weather-or-not",
    serverLink: "https://github.com/ohyeyoye/weather-or-not-server",
    runLink: "https://ohyeyoye.github.io/weather-or-not",
    color: "#55AAFF",
  },
  {
    title: "AboutTimer",
    summary: "Multi-timers",
    description: "Set multiple timers and run them simultaneously.",
    date: "AUG 2019",
    skills: ["React", "Redux"],
    codeLink: "https://github.com/ohyeyoye/about-timer",
    runLink: "https://ohyeyoye.github.io/about-timer",
    color: "#8640F8",
  },
  {
    title: "Binder",
    summary: "To-do-list App",
    description: "Create a to-do-list and have it stored locally.",
    date: "JUL 2019",
    skills: ["React", "Redux"],
    codeLink: "https://github.com/ohyeyoye/binder",
    runLink: "https://ohyeyoye.github.io/binder",
    color: "#F89BA5",
  },
];

const Projects = props => {
  const { className } = props;

  return (
    <div className={`${className} limit-width`} id="my-works">
      <h2 className="section-header">My Works</h2>
      <div className="project-cards">
        {data.map((project, index) => (
          <ProjectCard className="project-card" key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default styled(Projects)`
  padding: 2rem;
  .project-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
  }
  @media (max-width: 480px) {
    .project-cards {
      flex-direction: column;
      align-items: center;
    }
  }
`;
