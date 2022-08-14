import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";
import { DefaultCompleteButton } from "@styles/common/button/button";

export const ButtonWrapDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ApplyBtn = styled(DefaultCompleteButton)`
  height: 52px;
  width: ${({ apply }) => (apply ? "70%" : "30%")};
  &:last-child {
    margin-right: 0;
  }
  background-color: ${({ apply }) => (apply ? colors.black : colors.gray350)};
  color: ${colors.white};
  font-weight: ${fontWeight.FontWeight600};
  margin-right: ${({ apply }) => (apply ? 0 : "8px")};
  display: ${({ showDelGroupBtn }) => (showDelGroupBtn ? "none" : "flex")};
`;
export const DeleteBtn = styled(ApplyBtn)`
  background-color: ${colors.pointOrange200};
  display: ${({ showDelGroupBtn }) => (showDelGroupBtn ? "flex" : "none")};
`;
