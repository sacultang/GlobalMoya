import styled from "styled-components";
import { colors, fontWeight } from "@styles/theme";

export const DefaultButton = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  width:${({ orange }) => (orange ? "64px" : "53px")};
  height: 38px;
  color: ${(props) =>
    props.orange ? props.theme.colors.white : props.theme.colors.gray500};
  background-color: ${(props) =>
    props.orange
      ? props.theme.colors.pointOrange100
      : props.theme.colors.gray150};
  border-radius: 2px;
  font-weight: ${fontWeight.FontWeight500};
`;

export const RadiusButton = styled(DefaultButton)`
  border-radius: 200px;
  font-weight: ${fontWeight.FontWeight500};
  width: auto;
  padding: 0 16px;
  margin-right: 8px;
  white-space: nowrap;
`;

export const CategoryButton = styled(DefaultButton)`
  border-radius: 4px;
  width: 160px;
  height: 52px;
  ${({ theme }) => theme.common.flexCenter}
  background-color: ${(props) => {
    props.orange
      ? props.theme.colors.pointOrange100
      : props.theme.colors.gray200;
  }};
  font-weight: ${fontWeight.FontWeight500};
  color: ${colors.gray700};
  margin: 0;
`;
export const ScrapButton = styled(DefaultButton)`
  border-radius: 4px;
  width: 160px;
  height: 52px;
  ${({ theme }) => theme.common.flexCenter}
  background-color: ${(props) => {
    props.orange
      ? props.theme.colors.pointOrange100
      : props.theme.colors.gray200;
  }};
  font-weight: ${fontWeight.FontWeight500};
  color: ${colors.gray700};
  margin: 0;
`;

export const DefaultBlackButton = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  width:${({ black }) => (black ? "64px" : "53px")};
  height: 38px;
  color: ${(props) =>
    props.black ? props.theme.colors.white : props.theme.colors.gray500};
  background-color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.gray150};
  border-radius: 2px;
  font-weight: ${fontWeight.FontWeight500};
`;
export const DefaultCompleteButton = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  width:${({ black }) => (black ? "64px" : "53px")};
  height: 38px;
  color: ${colors.white};
  background-color: ${(props) =>
    props.black ? props.theme.colors.black : props.theme.colors.gray350};
  border-radius: 2px;
  font-weight: ${fontWeight.FontWeight500};
`;
export const RadiusBlackButton = styled(DefaultBlackButton)`
  border-radius: 200px;
  font-weight: ${fontWeight.FontWeight500};
  width: auto;
  padding: 0 16px;
  margin-right: 8px;
  white-space: nowrap;
  &.all {
    margin-left: 16px;
  }
`;
