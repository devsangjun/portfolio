import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Navbar = props => {
  const { className } = props;
  return (
    <nav className={`${className} limit-width`} id="nav-bar">
      <div className="logo">
        <span className="logo-name">SANGJUN LEE</span>
        <span className="logo-description">
          Web Developer from Los Angeles, CA
        </span>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <Link className="link" to="my-skills">
            My Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="my-works">
            My Works
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default styled(Navbar)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .logo {
    display: flex;
    flex-direction: column;
    user-select: none;
    .logo-name {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
  .nav-items {
    display: flex;
    float: right;
    .nav-item {
      font-size: 1em;
      font-weight: bold;
      border-bottom: 2px solid transparent;
      transition: all 300ms ease-in-out;
      .link {
        color: #1e8dff;
        padding: 0.8rem 1rem;
        &:hover {
          border-bottom: 2px solid #1e8dff;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    .logo {
      .logo-description {
        display: none;
      }
      margin-bottom: 0.5rem;
    }
  }
`;
