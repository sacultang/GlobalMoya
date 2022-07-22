import React from "react";
import styled, { keyframes } from "styled-components";

import { colors } from "@styles/theme";
const Spinner = () => {
  return (
    <LoaderWrap>
      <Loader />
    </LoaderWrap>
  );
};

export default Spinner;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  border: 4px solid ${colors.gray300};
  border-top: 4px solid ${colors.alertRed200};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const LoaderWrap = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;
