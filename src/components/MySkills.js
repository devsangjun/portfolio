import React from "react";
import styled from "styled-components";
import SkillCard from "./SkillCard";

const MySkills = props => {
  const { className } = props;
  const skills = [
    {
      name: "Web Design",
      description:
        "Use design tools such as Sketch and AdobeXD to create design layouts",
    },
    {
      name: "Front-End",
      description:
        "Use React with routers to create multi-page web applications",
    },
    {
      name: "Back-End",
      description:
        "Build a custom web server with Node.js and MongoDB or use Firebase",
    },
  ];

  return (
    <div className={`${className} limit-width`} id="my-skills">
      <h2 className="section-header">My Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} number={index + 1} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default styled(MySkills)`
  padding: 2rem;
  height: 30rem;
  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;
