import React from "react";
import styled from "styled-components";

const About = props => {
  const { className } = props;

  return (
    <div className={className}>
      <h2 className="section-header">About</h2>
      <div className="info-container">
        <div className="info-item info-interests">
          <p className="info-content">
            &emsp;&emsp;Over the course of working on personal projects, I've
            always aimed at creating well functioning and attractive
            applications. I take each step meticulously from selecting theme
            colors to designing icons. I make sure every component serves its
            purpose and remove any extraneous decorations.
          </p>
        </div>
        <div className="info-item info-skills">
          <h3 className="info-header">Interests</h3>
          <ul>
            <li>Web & Mobile Development</li>
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default styled(About)`
  padding: 1.5rem 2rem;
  background-color: #f5f5f7;
  .info-container {
    display: flex;
    margin-top: 2rem;
    .info-item {
      flex: 1;
      height: 20rem;
      padding: 1.5rem;
      margin-right: 1rem;
      border-radius: 0.125rem;
      color: gray;
      /* box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2); */
      &:last-child {
        margin-right: 0;
      }
      .info-header {
        font-size: 1.5em;
        font-weight: 500;
      }
      .info-content {
        text-align: justify;
        font-size: 1.1em;
        line-height: 1.8em;
      }
    }
    /* .info-interests {
      background: linear-gradient(135deg, #131313, #818181);
    }
    .info-skills {
      background: linear-gradient(135deg, #818181, #131313);
    } */
  }
`;
