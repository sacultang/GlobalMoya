import styled from "styled-components";

import { colors, fontWeight, fontSize } from "@styles/theme";

export const MainText = styled.span`
  text-align: center;
  color: ${colors.black};
  font-weight: ${fontWeight.FontWeight600};
  font-size: ${fontSize.FontSize20};
  margin-top: 18px;
`;

export const SuccessIcon = styled.div`
  margin-top: 153px;
  width: 63px;
  height: 63px;
`;

export const SuccessButton = styled.button`
  color: ${colors.white};
  cursor: pointer;
  font-weight: ${fontWeight.FontWeight600};
  margin: 308px 0px 10px;
  width: 328px;
  height: 52px;
  background-color: ${colors.gray350};
  &:hover {
    background-color: ${colors.black};
  }
`;
