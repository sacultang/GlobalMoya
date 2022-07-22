import styled from "styled-components";

import ArrowBack from "@assets/arrow-back.svg";
import { colors, fontSize, fontWeight } from "@styles/theme";

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
  width: 100%;
  height: 56px;
`;

export const BackSpace = styled.button`
  background-image: url(${ArrowBack});
  background-repeat: no-repeat;
  background-color: ${colors.white};
  position: absolute;
  top: 32%;
  left: 3.5%; 
  width: 19px;
  height: 15px;
  z-index: 100;
`;

export const TitleHeader = styled.span`
  color: ${colors.black};
  font-size: ${fontSize.FontSize16};
  font-weight: ${fontWeight.FontWeight600};
  position: absolute;
`;