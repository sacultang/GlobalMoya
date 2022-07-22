import styled from "styled-components";
import { colors, fontSize, fontWeight } from "../theme";
export const HomeInputWrap = styled.div`
  padding-left: 16px;
  margin-top: 22px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: 1px solid ${colors.gray700};
  border-radius: 2px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HomeInputTag = styled.input`
  width: 87%;
  height: 90%;
  box-sizing: border-box;
  border: none;
  border-radius: 2px;
  position: relative;
  &::placeholder {
    color: ${colors.gray400};
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight400};
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;
export const SearchIconWrap = styled.div`
  width: 48px;
  height: 24px;
  display: flex;
  justify-content: center;
`;
