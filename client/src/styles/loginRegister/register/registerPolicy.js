import styled from "styled-components";
import { fontSize, fontWeight, colors } from "@styles/theme";

export const TermsAndConditions = styled.div`
  padding: 12px 16px 16px;
  h3 {
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageIcon = styled.img`
  display: flex;
  margin-left: 20px;
  margin-top: -38px;
`;

export const Instruction = styled.div`
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  color: ${colors.gray650};
  margin-left: 9px;
  margin-top: 120px;
  margin-bottom: 28px;
`;

export const CustomerAgreement = styled.form`
  width: 100%;
  color: ${colors.gray400};
  line-height: 2em;
`;

export const ImageContent = styled.img``;

export const SignUp = styled.button`
  position: relative;
  width: 100%;
  height: 52px;
  margin-top: 400px;
  color: ${colors.white};
  font-weight: ${fontWeight.FontWeight600};
  background: #b7b7b7;
  border-radius: 2px;
  border: 1px solid #e8e8e8;
  &:hover {
    background-color: ${colors.black};
  }
`;

export const CheckAll = styled.div`
  margin-bottom: 12px;
  padding-bottom: 12px;
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.gray800};
  border-bottom: 2px solid #efefef;
  display: flex;
  align-items: center;
`;

export const Checklabel = styled.label`
  margin-bottom: ${({ contact }) => (contact ? "10px" : "0")};
  a {
    display: flex;
    align-items: center;
  }
`;

export const Check = styled.div`
  margin-top: ${({ contact }) => (contact ? "230px" : "0")};
  &:last-child {
    img {
      display: none;
    }
  }
  label {
    display: flex;
    align-items: center;
    .checkmark {
      width: 16px;
      height: 16px;
      background-color: white;
      border: 2px solid ${colors.gray500};
      position: relative;
      &::after {
        left: 0px;
        top: -5px;
        width: 4px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        bottom: 0;
        right: 0;
        margin: auto;
        content: "";
      }
    }
  }
  input {
    display: none;
    &:checked + label {
      color: black;
      .checkmark {
        width: 16px;
        height: 16px;
        background-color: black;
        border: 2px solid black;
      }
    }
  }
`;

export const CheckAllItems = styled.span`
  margin-left: 8px;
  flex-grow: 1;
  font-size: ${fontSize.fontSize14};
  color: ${({ contact }) => (contact ? colors.gray500 : colors.gray800)};
`;
