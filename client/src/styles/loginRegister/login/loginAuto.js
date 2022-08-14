import styled from "styled-components";

import IconsCheckCircleSvg from "@assets/icons-checkCircle.svg";

export const LoginDiv = styled.div`
  width: 328px;
  margin-top: 5px;
  margin-bottom: 22%;
  position: relative;
`;

export const LoginSpan = styled.div`
  padding-left: 23px;
  position: relative;
`;

export const LonginIcon = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  position: absolute;
  top: -3px;
  left: -3px;
  cursor: pointer;
`;

export const LoginAuto = styled.label`
  line-height: 10px;
  cursor: pointer;
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: -2px;
    left: 0;
    background-image: url(${IconsCheckCircleSvg});
    background-size: 20px;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export const FindPw = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #000000;
  }
`;
