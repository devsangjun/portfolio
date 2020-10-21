import React from "react";
import styled from "styled-components";

const SkillCard = props => {
  const { className, number, name, description } = props;

  return (
    <div className={className}>
      <div className="number-circle-outline">
        <h2 className="number">{number}</h2>
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-description">{description}</p>
    </div>
  );
};

export default styled(SkillCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33% - 0.5rem);
  .number-circle-outline {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 1px solid #1e8dff;
    display: grid;
    place-items: center;
    .number {
      font-size: 3em;
      color: #1e8dff;
    }
    margin-bottom: 1rem;
  }
  .skill-name {
    color: #555555;
    font-size: 1.5em;
    margin-bottom: 1rem;
  }
  .skill-description {
    color: #555555;
    font-size: 1em;
    font-weight: bold;
    width: 15rem;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: calc(33% - 0.5rem);
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    .number-circle-outline {
      width: 5rem;
      height: 5rem;
      .number {
        font-size: 2.5em;
        color: #1e8dff;
      }
      margin-bottom: 1rem;
    }
    .skill-name {
      color: #555555;
      font-size: 1.2em;
      margin-bottom: 1rem;
    }
    .skill-description {
      color: #555555;
      font-size: 0.8em;
      font-weight: bold;
      width: 9rem;
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
    .number-circle-outline {
      width: 4rem;
      height: 4rem;
      .number {
        font-size: 2em;
        color: #1e8dff;
      }
      margin-bottom: 1rem;
    }
    .skill-name {
      color: #555555;
      font-size: 1.2em;
      margin-bottom: 1rem;
    }
    .skill-description {
      color: #555555;
      font-size: 0.8em;
      font-weight: bold;
      width: 15rem;
      text-align: center;
    }
  }
`;
