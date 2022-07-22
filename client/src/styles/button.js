import styled from "styled-components";
import { colors, fontWeight, pxToRem } from "./theme";

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
  margin-right: ${({ orange }) => (orange ? 0 : "15px")};
`;

export const RadiusButton = styled(DefaultButton)`
  border-radius: 200px;
  font-weight: ${fontWeight.FontWeight500};
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
`;
