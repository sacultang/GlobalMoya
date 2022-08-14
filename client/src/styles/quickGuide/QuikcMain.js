import styled from "styled-components";
import { MainInputWrap } from "../main/mainPageInput";
import { colors } from "../theme";
export const QuickInputWrap = styled(MainInputWrap)`
  background-color: #fff;
  width: 100%;
  border-color: ${colors.gray700};
  .arrow {
    width: 24px;
    margin-left: 12px;
    ${({ theme }) => theme.common.flexCenter}
  }
  .cancel {
    width: 24px;
    margin-right: 14px;
    ${({ theme }) => theme.common.flexCenter}
  }
`;
