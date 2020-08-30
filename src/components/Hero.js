import React from "react";
import styled from "styled-components";
import HeroImage from "../images/hero.jpg";
const Hero = props => {
  const { className } = props;
  return (
    <div className={className}>
      <div className="hero-msg">
        <h2 className="msg-header">HI, I'M SANGJUN.</h2>
        <p className="msg-content">
          I create web applications from start to end.
        </p>
      </div>
    </div>
  );
};

export default styled(Hero)`
  position: relative;
  height: 30rem;
  background: url(${HeroImage}) no-repeat center center;
  background-size: cover;
  color: white;
  z-index: 1;
  .hero-msg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .msg-header {
      font-size: 3em;
      font-weight: bold;
      font-family: "Open Sans", sans-serif;
    }
    .msg-content {
      margin-top: 1rem;
      font-size: 1.4em;
      font-family: "PT Serif", serif;
    }
  }
`;
