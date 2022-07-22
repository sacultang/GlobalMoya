import styled from "styled-components";
import { colors, fontSize, fontWeight, device } from "@styles/theme";
export const MainKeywordContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobile} {
    font-size: ${fontSize.FontSize14};
  }
`;
export const MainKeywordDiv = styled.div`
  position: relative;
`;
export const MainKeywordUl = styled.ul`
  display: flex;
  margin-top: 20px;
  margin-right: 38px;
  overflow-x: scroll;
  /* Firefox */
  scrollbar-width: none;
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MainKeywordLi = styled.li`
  flex-grow: 1;
  flex-shrink: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 110px;
  padding: 15px 0px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  box-sizing: content-box;
  outline: none;
  position: relative;
  outline: none;
  ${(props) => {
    if (props.toggleTab) {
      return `
        border-bottom: 3px solid ${colors.gray900};
        font-weight: ${fontWeight.FontWeight600};
        color: ${colors.gray900};
      `;
    } else {
      return `
        color: ${colors.gray400};
        font-weight: ${fontWeight.FontWeight500};
      `;
    }
  }}
`;
export const MainKeywordContentDiv = styled.div`
  flex-grow: 1;
`;
export const MainKeywordActiveContentDiv = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  ${(props) => {
    if (props.toggleContent) {
      return `
        display: block;
      `;
    } else {
      return `
        display: none;
      `;
    }
  }}
`;
export const MainKeywordActiveContentH2 = styled.h2`
  padding: 0px 0 5px 0px;
`;
export const EditIconDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  margin-top: 20px;
  transform: translateY(-120%);
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 30px;
    border-radius: 50%;
    background-color: ${colors.white};
    filter: blur(5px);
    transform: translate(-60%, -20%);
    z-index: -1;
  }
`;
export const EditIconCircle = styled.span`
  width: 4px;
  height: 4px;
  margin-right: ${(props) => props.marginRight || "4px"};
  background: ${colors.black};
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
`;
