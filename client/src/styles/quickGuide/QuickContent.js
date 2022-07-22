import styled from "styled-components";
import { H2Tag } from "../filterStyle/filterStyle";
import { fontWeight } from "../theme";
export const QH2Tag = styled(H2Tag)`
  font-weight: ${fontWeight.FontWeight600};
`;
export const QuickContentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  a {
    margin-bottom: 8px;
    margin-right: 8px;
    &:nth-child(even) {
      margin-right: 0;
    }
  }
`;
export const QuickHeadDiv = styled(QuickContentDiv)`
  margin-top: 64px;
  display: block;
`;
