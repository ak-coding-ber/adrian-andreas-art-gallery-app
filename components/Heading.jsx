import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 65px;
  animation: colorChange 5s infinite alternate;

  @keyframes colorChange {
    0% {
      color: red;
    }
    50% {
      color: green;
    }
    100% {
      color: blue;
    }
  }
`;

const Heading = () => {
  return <StyledHeading>Art Gallery</StyledHeading>;
};

export default Heading;
