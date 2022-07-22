import styled from "styled-components";
import {
  fontSize,
  fontWeight,
  colors,
  cardImgType,
  cardTextType,
} from "./theme";
import { cardSwitchFunc } from "../functions/cardSwitchFunc";

export const Card = styled.div`
  max-width: 360px;
  margin: 20px auto;
  overflow: hidden;
  border-bottom: 1px solid ${colors.gray350};
`;

export const MainContent = styled.div`
  width: inherit;
  display: flex;
  flex-direction: ${({ viewType }) =>
    viewType === "textOnly" || viewType === "largeImg"
      ? "column"
      : "row-reverse"};
  align-items: center;
  justify-content: space-between;
`;
export const CardHeader = styled.div`
  ${({ viewType }) => cardSwitchFunc(cardTextType, viewType)}
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  h2 {
    margin: 0;
    font-weight: ${fontWeight.FontWeight500};
    font-size: ${fontSize.FontSize16};
    line-height: ${fontSize.FontSize24};
  }
`;
export const Abstract = styled.div`
  padding: 0 16px;
  height: 64px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  p {
    margin: 0;
    color: ${colors.gray500};
    font-weight: ${fontWeight.FontWeight400};
    font-size: ${fontSize.FontSize14};
    line-height: ${fontSize.FontSize22};
  }
`;

export const SubContent = styled.div`
  padding: 16px 16px 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .time {
    font-weight: ${fontWeight.FontWeight500};
    font-size: ${fontSize.FontSize14};
    color: ${colors.gray500};
  }
  .iconGroup {
    svg {
      margin-left: 16px;
    }
  }
`;

export const CardFooter = styled.div`
  background-color: ${colors.gray200};
  padding: 6px 16px;
  position: relative;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  .tags {
    span {
      display: inline-block;
      height: 24px;
      background: #ffffff;
      box-sizing: border-box;
      border: 1px solid #e8e8e8;
      border-radius: 20px;
      padding: 2px 8px;
      font-size: ${fontSize.FontSize12};
      font-weight: 400;
      line-height: 18px;
      color: #949494;
      margin-right: 4px;
    }
  }
`;
export const Tickers = styled.ul`
  display: ${({ $expand }) => ($expand ? "block" : "none")};
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize12};
  padding: 12px 0 8px 0;
  li {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const ImageContent = styled.img`
  ${({ viewType }) => cardSwitchFunc(cardImgType, viewType)}
`;
