import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const Settings = styled.div`
  position: relative;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  height: 56px;
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
      position: absolute;
      margin-left: 20px;
    }
  }
`;

export const Account = styled.div`
  display: flex;
  padding-top: 23px;
  margin-left: 15px;
  margin-bottom: 23px;
  span {
    font-size: ${fontSize.FontSize22};
    font-weight: ${fontWeight.FontWeight600};
    left: 44px;
    bottom: 27px;
  }
  p {
    font-size: ${fontSize.FontSize16};
    font-weight: ${fontWeight.FontWeight400};
    color: #1a1a1a;
    line-height: 22px;
    margin-bottom: 16px;
    letter-spacing: -0.2px;
    color: #1a1a1a;
  }
  .iconWrap {
    overflow: hidden;
    position: relative;
    margin-right: 17px;
  }
  div:last-child {
    padding: 25px 0 23px 5px;
  }
`;

export const Container = styled.div`
  border-top: ${({ $button }) => ($button ? 0 : "1px solid #e8e8e8")};
  border-bottom: ${({ $button }) => ($button ? 0 : "1px solid #e8e8e8")};
  padding: 16px 16px 16px 16px;
  span {
    font-weight: ${fontWeight.FontWeight600};
    font-size: ${fontSize.FontSize14};
    line-height: 22px;
    letter-spacing: -0.2px;
    margin-bottom: 15px;
    color: ${colors.gray900};
  }
  p {
    font-weight: ${fontWeight.FontWeight600};
    font-size: ${fontSize.FontSize14};
    line-height: 22px;
    letter-spacing: -0.2px;
    color: ${colors.gray400};
    margin-top: 5px;
  }
`;
export const Popup = styled.div`
  display: ${(props) => (props.popup ? "block" : "none")};
  width: 280px;
  height: 96px;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: #fff;
  position: absolute;
  z-index: 2;
  div {
    height: 48px;
    border-bottom: 1px solid #dfdfdf;
    line-height: 24px;
    padding: 12px 0 12px 16px;
    box-sizing: border-box;
    font-size: ${fontSize.FontSize16};
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 1;

  display: ${(props) => (props.popup ? "block" : "none")};
`;

export const ChoosePhoto = styled.div`
  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 63px;
    top: 157px;
  }
`;

export const Header = styled.div`
  line-height: 22px;
  margin-bottom: 5px;
`;

export const Nickname = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${colors.gray350};
  height: 48px;
  border-radius: 2px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  margin-top: 11px;
  .input {
    width: 50%;
    height: 100%;
    flex-grow: 1;
    input {
      width: 100%;
      height: 100%;
      border: none;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
      &:focus::placeholder {
        color: transparent;
      }
    }
  }
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 52px;
  padding-left: 16px;
  color: ${colors.white};
  font-weight: ${fontWeight.FontWeight600};
  line-height: 22px;
  background: #b7b7b7;
  border-radius: 2px;
  margin-top: 400px;
  border: 1px solid #e8e8e8;
  &:hover {
    background-color: ${colors.black};
  }
`;
