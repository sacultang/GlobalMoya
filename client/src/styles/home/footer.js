import styled from "styled-components";
import { colors, fontWeight, fontSize, pxToRem } from "../theme";

export const FooterTag = styled.footer`
  background-color: ${colors.gray900};
  width: 100%;
  height: 258px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize12};
`;
export const TermsDiv = styled.div`
  border-bottom: 1px solid ${colors.gray750};
  padding: 16px 0 14px 16px;
  font-weight: ${fontWeight.FontWeight700};
  a {
    color: inherit;
  }
`;
export const CompanyDiv = styled.div`
  padding: 16px 14px 16px;
  border-bottom: 1px solid ${colors.gray750};
`;
export const H2Tag = styled.h2`
  line-height: ${pxToRem(18)};
  strong {
    font-weight: ${fontWeight.FontWeight600};
  }
  font-weight: ${fontWeight.FontWeight300};
`;

export const CopyRightDiv = styled.div`
  padding: 16px 18px 14px 16px;
  line-height: ${pxToRem(18)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SNSGroup = styled.div`
  svg {
    margin-left: 20px;
  }
`;
