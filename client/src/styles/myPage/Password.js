import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";
import { DefaultContainer } from "../common/container";
import { DefaultButton } from "@styles/common/button/button";

export const Container = styled(DefaultContainer)`
  input: {
  }
  input::placeholder {
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
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
      margin-left: 0;
    }
  }
`;
export const CurrentPassword = styled.div`
  margin-top: 42px;
  margin-bottom: 28px;
  div {
    margin-bottom: 12px;
  }
`;
export const PasswordField = styled.input`
  box-sizing: border-box;
  padding: 10px 10px;
  width: 100%;
  margin-bottom: 10px;
  height: 48px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;
export const NewPassword = styled.div`
  margin-top: 42px;
  margin-bottom: 28px;
  div {
    margin-bottom: 12px;
  }
`;

export const PasswordFieldHelpText = styled.div`
  font-weight: ${fontWeight.FontWeight500};
  font-size: ${fontSize.FontSize12};
  line-height: 18px;
  letter-spacing: -0.2px;
  color: ${colors.gray600};
`;

export const ApplyBtn = styled(DefaultButton)`
  margin-top: 58px;
  width: 100%;
  height: 54px;
  font-size: ${colors.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.white};
  background-color: ${colors.gray350};
  &:hover {
    background-color: ${colors.black};
  }
`;
