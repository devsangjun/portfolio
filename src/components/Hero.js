import React from "react";
import styled from "styled-components";
import HeroImage from "../images/hero.png";
const Hero = props => {
  const { className } = props;
  return (
    <div className={`${className} limit-width`}>
      <img className="hero-img" src={HeroImage} alt="hero" />
      <div className="hero-msg">
        <h2 className="msg-header">Design & Develop</h2>
        <p className="msg-content">
          I build stunning and well-functioning web applications from top to
          bottom.
        </p>
      </div>
    </div>
  );
};

export default styled(Hero)`
  position: relative;
  height: 35rem;
  .hero-img {
    opacity: 0.4;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    max-width: 40rem;
  }
  .hero-msg {
    position: absolute;
    top: 7rem;
    left: 2rem;
    .msg-header {
      font-size: 3em;
      font-weight: bold;
      text-align: center;
    }
    .msg-content {
      margin-top: 1rem;
      font-size: 1.4em;
      width: 26rem;
      text-align: center;
    }
  }
`;
