import styled from "styled-components";
import { colors } from "@styles/theme";
export const FilterModalStyle = styled.div`
  background-color: ${colors.white};
  position: absolute;
  border-radius: 8px;
  top: 129px;
  right: 15px;
  display: ${({ showBtn }) => (showBtn ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    border-bottom: 1px solid ${colors.gray250};
    width: 100%;
    height: 1px;
    bottom: 0;
    top: 0;
    margin: auto;
  }
`;
export const BtnWrap = styled.div`
  padding: 12px 15px 12px 15px;
`;
export const FilterBtn = styled.button`
  background-color: white;
  color: ${colors.black};
`;
