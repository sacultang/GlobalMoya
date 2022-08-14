import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const QuickButtonWrap = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid ${colors.gray250};
  display: flex;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
