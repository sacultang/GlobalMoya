import styled from "styled-components";

import { colors, fontSize, fontWeight } from "@styles/theme"


export const OverlapBtn = styled.button`
  background-color: ${colors.gray350};
  border: 0.3px solid ${colors.gray400};
  border-radius: 200px;
  position: absolute;
  top: 11px;
  right: 10px;
  width: 60px;
  height: 26px;
  color: ${colors.white};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: ${fontWeight.FontWeight600};
  font-size: ${fontSize.FontSize12};
  letter-spacing: -0.5px;
  &:hover {
    background-color: ${colors.black};
  }
`;