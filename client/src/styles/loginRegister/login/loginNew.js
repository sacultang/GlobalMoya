import styled from "styled-components";

import { colors, fontWeight } from "@styles/theme";

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
