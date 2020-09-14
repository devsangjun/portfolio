import React from "react";
import styled from "styled-components";

const Footer = props => {
  const { className } = props;

  return <div className={className}></div>;
};

export default styled(Footer)`
  height: 20rem;
  background-color: #101010;
`;
