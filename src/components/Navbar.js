import React from "react";
import styled from "styled-components";

const Navbar = props => {
  const { className } = props;
  return (
    <nav className={className}>
      <span className="logo">Sangjun Lee</span>
      <ul className="nav-items">
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
      </ul>
    </nav>
  );
};

export default styled(Navbar)`
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    margin-left: 1rem;
  }
  .nav-items {
    display: flex;
    float: right;
    .nav-item {
      padding: 1rem 2rem;
      color: lightgray;
      border-bottom: 2px solid transparent;
      transition: all 200ms ease-in-out;
      &:hover {
        color: gray;
        border-bottom: 2px solid gray;
        cursor: pointer;
      }
    }
  }
`;
