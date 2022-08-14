import styled from "styled-components";
import { colors } from "@styles/theme";
export const HamburgerWrap = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${({ main }) => (main ? "absolute" : "static")};
  left: 0;
  div {
    background: ${({ main }) => (main ? "#000" : colors.gray400)};
  }
  cursor: pointer;
`;
export const HamburgerBar = styled.div`
  width: 20px;
  margin-bottom: 6px;
  height: 2px;
  &:last-child {
    margin-bottom: 0;
  }
`;
