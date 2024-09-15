import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

body {
  margin:0;
  font-family: system-ui;
  background: linear-gradient(120deg, #f0f8ff, #f8f8ff);
  background-size: 200% 200%;
  animation: gradientShift 30s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
}

`;
