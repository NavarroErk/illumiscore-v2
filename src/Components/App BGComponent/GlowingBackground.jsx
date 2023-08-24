import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for the pulsating glow effect
const glow = keyframes`
  0% {
    background-color: #1A2634;
  }
  50% {
    background-color: #2C2C2C;
  }
  100% {
    background-color: #1A2634;
  }
`;

// Styled component for the background
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  animation: ${glow} 3s infinite alternate;
`;

const GlowingBackground = () => {
  return <Background />;
};

export default GlowingBackground;
