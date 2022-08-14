import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";
import { DefaultCompleteButton } from "@styles/common/button/button";
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid ${colors.gray250};
  box-sizing: border-box;
  h3 {
    text-align: center;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    width: 100%;
    margin: 0 auto;
    position: relative;
    svg {
      cursor: pointer;
      position: absolute;
      margin-left: 20px;
    }
    button {
      background: none;
      cursor: pointer;
      padding: 8px;
      position: absolute;
      right: 24px;
      top: -12px;
      svg {
        margin-left: 0;
      }
      &.edit {
        top: -12px;
        right: 20px;
      }
    }
  }
`;
export const FixedHeader = styled(Header)`
  position: fixed;
  top: 0;
  background-color: ${colors.white};
  z-index: 2;
`;
export const EditButton = styled.button`
  background: none;
  color: ${colors.pointOrange100};
  font-size: ${fontSize.FontSize16};
  font-weight: ${fontWeight.FontWeight600};
`;
export const BtnWrap = styled.div`
  background-color: ${colors.white};
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  display: flex;
  transition: 0.3s;
  z-index: 10;
`;
export const BtnWrapVisible = styled.div`
  background-color: ${colors.white};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  transition: 0.3s;
`;
export const CompleteBtn = styled(DefaultCompleteButton)`
  width: 100%;
  height: 54px;
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
`;

export const Btn50percent = styled(DefaultCompleteButton)`
  width: 49.6%;
  height: 54px;
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
  background-color: ${colors.black};
  &:first-child {
    margin-right: 8px;
  }
  &.delete {
    background-color: ${colors.pointOrange200};
  }
`;

export const HeightContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NewGroupInputWrap = styled.div`
  width: 100%;
  height: 48px;
`;
export const Wrap = styled.div`
  margin: auto 16px;
  display: flex;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray350};
`;
export const NewGroupInput = styled.input`
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding-left: 8px;
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  &::placeholder {
    color: ${colors.gray400};
    font-weight: ${fontWeight.FontWeight400};
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;
export const GroupNamelengthWrap = styled.div`
  height: 48px;
  padding: 0 8px;
  box-sizing: border-box;
  p {
    line-height: 48px;
    font-size: ${fontSize.FontSize14};
    color: ${colors.gray400};
  }
`;

export const NewsCardcontent = styled.div`
  padding: 48px 0 76px 0;
`;
