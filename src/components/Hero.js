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
      text-align: left;
    }
    .msg-content {
      margin-top: 1rem;
      font-size: 1.4em;
      width: 26rem;
      text-align: left;
    }
  }
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 25rem;
    .hero-img {
      max-width: 30rem;
      width: 80%;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
    }
    .hero-msg {
      position: static;
      .msg-header {
        width: 100%;
        font-size: 2em;
        font-weight: bold;
        text-align: center;
      }
      .msg-content {
        margin: auto;
        margin-top: 1rem;
        font-size: 1em;
        max-width: 25rem;
        width: 80%;
        text-align: center;
      }
    }
  }
  @media (max-width: 480px) {
    height: 20rem;
  }
`;
