import styled from "styled-components";
import { colors, fontWeight, fontSize } from "../theme";
import { DefaultContainer } from "@styles/common/container";

export const NaviWrap = styled.div`
  position: fixed;
  width: 280px;
  height: 100vh;
  left: ${({ showNavi }) => (showNavi ? "0" : "-280px")};
  top: 0;
  transition: all 0.3s ease-out;
  background-color: ${colors.gray150};
  z-index: 8;
`;
export const NaviGo = styled.div`
  padding: 0px 16px;
  height: 48px;
  background-color: ${colors.white};
  border-top: 1px solid ${colors.gray250};
  display: flex;
  align-items: center;
  color: ${colors.black};
  font-size: ${fontSize.FontSize16};
  cursor: pointer;
`;
export const Navispan = styled.div`
  height: 10px;
  border-top: 1px solid ${colors.gray250};
`;
export const FilterBG = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  top: 0;
  z-index: 3;
  display: ${({ showScrapMoveBtn, showScrapEditBtn, showNavi }) =>
    showScrapMoveBtn || showScrapEditBtn || showNavi ? "block" : "none"};
`;
