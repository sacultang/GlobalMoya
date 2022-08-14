import styled from "styled-components";
import { colors } from "@styles/theme";
import { fontSize, fontWeight } from "../theme";
export const ScrapModalStyle = styled.div`
  width: 109px;
  height: 92px;
  background-color: ${colors.white};
  position: absolute;
  border-radius: 8px;
  top: 45px;
  right: 16px;
  display: ${({ showScrapEditBtn }) => (showScrapEditBtn ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 21;
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
export const ScrapMiniModalStyle = styled.div`
  width: 109px;
  height: 42px;
  background-color: ${colors.white};
  position: absolute;
  border-radius: 8px;
  top: 45px;
  right: 16px;
  display: ${({ showScrapEditBtn }) => (showScrapEditBtn ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 21;
`;
export const BtnWrap = styled.div`
  padding: 12px;
`;
export const FilterBtn = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
`;

//이동그룹 모달
export const ScrapMoveWrap = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 21;
  height: auto;
  width: 100%;
  padding-bottom: 16px;
  background-color: ${colors.white};
  display: ${({ showScrapMoveBtn }) => (showScrapMoveBtn ? "block" : "none")};
  p {
    top: 0;
    position: absolute;
  }
`;
export const ScrapMoveh4 = styled.div`
  padding: 20px 16px;
  color: ${colors.black};
  font-weight: ${fontWeight.FontWeight700};
  font-size: ${fontSize.FontSize16};
`;
