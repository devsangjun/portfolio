import React from "react";
import styled from "styled-components";

const About = props => {
  const { className } = props;

  return (
    <div className={className}>
      <h2 className="section-header">About</h2>
      <div className="info-container">
        <div className="info-item info-interests">
          <h3 className="info-header">Interests</h3>
        </div>
        <div className="info-item info-skills">
          <h3 className="info-header">Skills</h3>
        </div>
      </div>
    </div>
  );
};

export default styled(About)`
  padding: 1.5rem 2rem;
  .info-container {
    display: flex;
    margin-top: 2rem;
    .info-item {
      flex: 1;
      height: 20rem;
      padding: 1.5rem;
      margin-right: 1rem;
      border-radius: 0.25rem;
      color: white;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
      &:last-child {
        margin-right: 0;
      }
      .info-header {
        font-size: 1.5em;
        font-weight: 300;
      }
    }
    .info-interests {
      background: linear-gradient(135deg, #0c283c, #3d556e);
    }
    .info-skills {
      background: linear-gradient(135deg, #3d556e, #0c283c);
    }
  }
`;
