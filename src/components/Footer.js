import React from "react";
import styled from "styled-components";
import FooterImage from "../images/web_developer.png";
import { IconButton } from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";
import Mail from "@material-ui/icons/Mail";

const Footer = props => {
  const { className } = props;

  return (
    <div className={className} id="contact">
      <div className="footer-container limit-width">
        <img className="footer-img" src={FooterImage} alt="footer" />
        <div className="footer-contact">
          <h3>
            Drop A <span style={{ color: "#1E8DFF" }}>Line &</span>
          </h3>
          <h3>
            Stay <span style={{ color: "#1E8DFF" }}>Tuned.</span>
          </h3>
          <div className="footer-tools">
            <IconButton href="https://github.com/ohyeyoye" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton href="mailto:dev.sangjun@gmail.com">
              <Mail />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Footer)`
  background-color: #1a2437;
  height: 40rem;
  padding: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  .footer-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    .footer-img {
      opacity: 0.4;
      margin-left: 2rem;
      max-width: 30rem;
    }
    .footer-contact {
      margin-left: 6rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h3 {
        font-size: 2.5em;
      }
      .footer-tools {
        margin-top: 1rem;
        display: flex;
        .MuiSvgIcon-root {
          font-size: 1.5em;
          color: white;
        }
      }
    }
  }
`;
