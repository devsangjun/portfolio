import React from "react";
import styled from "styled-components";

const About = props => {
  const { className } = props;

  return (
    <div className={className}>
      <h2 className="section-header">About</h2>
      <div className="info-container">
        <div className="info-item">
          <h3 className="info-header">Design & Build</h3>
          <p className="info-content">
            &emsp;&emsp;Over the course of working on personal projects, I've
            always aimed at creating well functioning and attractive
            applications. I take each step meticulously from selecting theme
            colors to designing icons. I make sure every component serves its
            purpose and remove any extraneous decorations.
          </p>
        </div>
        <div className="info-item">
          <h3 className="info-header">Skills</h3>
          <ul className="skills-list">
            <li className="skill-item">
              <h4>React.js</h4>
              <ul>
                <li>Single page web applications with API calls</li>
                <li>State management applications using Redux</li>
                <li>Multi-page web applications with react-router-dom</li>
              </ul>
            </li>
            <li className="skill-item">
              <h4>Node.js</h4>
              <ul>
                <li>
                  A middleware server that uses other API calls from other
                  servers
                </li>
                <li>
                  Servers that allow registration and authorization of users
                  using MongoDB
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default styled(About)`
  padding: 2rem 1.5rem 4rem 1.5rem;
  background-color: #f5f5f7;
  .info-container {
    display: flex;
    margin-top: 2rem;
    .info-item {
      flex: 1;
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
        margin-bottom: 1rem;
      }
      .info-content {
        text-align: justify;
        font-size: 1.2em;
        font-weight: 500;
        line-height: 1.8em;
      }
    }
    .skills-list {
      .skill-item {
        > h4 {
          margin-bottom: 1rem;
        }
        li {
          margin-left: 1rem;
          margin-bottom: 1rem;
          &:last-child {
            margin-bottom: 0;
          }
        }
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 0;
        }
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
