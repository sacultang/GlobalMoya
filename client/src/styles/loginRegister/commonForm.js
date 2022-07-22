import styled from "styled-components";

import { colors, fontSize, fontWeight } from "@styles/theme";

export const CommonForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize14};
  color: ${colors.gray500};
  align-items: center;
  padding-top: 104px;
`;



