import styled from "styled-components";
import { HomeInputTag } from "../../home/homeInput";
import { colors, fontSize, fontWeight } from "../../theme";

export const MainInputWrap = styled.div`
  width: 100%;
  height: 48px;
  ${({ theme }) => theme.common.flexCenter}
  border: 1px solid ${colors.gray350};
  /* background-color: ${colors.gray150}; */
  border-radius: 2px;
  position: relative;
`;
export const SearchIconWrap = styled.div`
  position: absolute;
  left: 20px;
  width: 48px;
  height: inherit;
  ${({ theme }) => theme.common.flexCenter}
`;
export const MainInputTag = styled(HomeInputTag)`
  /* box-sizing: border-box;
  position: absolute; */
  /* width: 328px; */
  height: 48px;
  /* background-color: ${colors.gray150}; */
  font-size: ${fontSize.FontSize16};
  border: 1px solid #555555;
  border-radius: 2px;
  &::placeholder {
    color: ${colors.gray400};
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight400};
  }
  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
`;
export const FilterIconWrap = styled.div`
  position: absolute;
  right: 20px;
  width: 48px;
  height: inherit;
  ${({ theme }) => theme.common.flexCenter}
`;

export const AddKeyword = styled.button`
  position: absolute;
  width: 100px;
  right: 20px;
  color: #ea412a;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-right: 20px;
`;
