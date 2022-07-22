import styled from "styled-components";

import { colors, fontWeight } from "@styles/theme";

export const InputDiv = styled.div`
  border: 1px solid ${colors.gray350};
  width: 328px;
  height: 48px;
  position: relative;
  margin-bottom: 12px;
`;

export const InputType = styled.input`
  width: 270px;
  height: 43px;
  border: 0;
  border-radius: 2px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: ${fontWeight.FontWeight500};
  line-height: 22px;
  margin-bottom: 40px;
  margin-left: 12px;
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
    // placeholder 안없어짐
    &::placeholder {
      color: ${colors.gray500};
      display: none;
    }
  }
`;
