import styled from "styled-components";

import { colors, fontWeight } from "@styles/theme";

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  cursor: pointer;
  font-weight: ${fontWeight.FontWeight600};
  margin: 15px 0px 10px;
  width: 328px;
  height: 52px;
  background-color: ${colors.gray350};
  &:hover {
    background-color: ${colors.black};
  }
`;
