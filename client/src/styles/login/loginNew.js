import styled from "styled-components";

import { colors } from "@styles/theme";
import { fontWeight } from "../theme";

export const RegisterLink = styled.div`
  margin-bottom: 49px;
`;

export const LoginRegi = styled.a`
  padding-left: 6px;
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.gray900};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
