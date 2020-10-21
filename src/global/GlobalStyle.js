import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .section-header {
    font-size: 2em;
    @media (max-width: 640px) {
      font-size: 1.8em;
    }
    @media (max-width: 480px) {
      font-size: 1.5em;
    }
  }
  .shadow {
    box-shadow: 0.125rem 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
  }

`;
