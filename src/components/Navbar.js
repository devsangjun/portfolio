import React from "react";
import styled from "styled-components";

const Navbar = props => {
  const { className } = props;
  return (
    <nav className={className}>
      <span className="logo">SL</span>
      <ul className="nav-items">
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
      </ul>
    </nav>
  );
};

export default styled(Navbar)`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  .logo {
    color: white;
    font-size: 1.5em;
    font-family: "Monoton", cursive;
    margin-left: 1rem;
    user-select: none;
  }
  .nav-items {
    display: flex;
    float: right;
    .nav-item {
      color: white;
      font-size: 0.9em;
      font-family: "Open Sans", sans-serif;
      padding: 0.8rem 2rem;
      border-bottom: 2px solid transparent;
      transition: all 300ms ease-in-out;
      &:hover {
        border-bottom: 2px solid lightgray;
        cursor: pointer;
      }
    }
  }
`;
