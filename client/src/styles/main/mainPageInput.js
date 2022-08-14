import styled from "styled-components";
import { HomeInputTag } from "../home/homeInput";
import { colors, fontSize, fontWeight } from "../theme";
export const MainInputWrap = styled.div`
  width: 100%;
  height: 48px;
  ${({ theme }) => theme.common.flexCenter}
  border: 1px solid ${colors.gray350};
  background-color: ${colors.gray150};
  border-radius: 2px;
`;
export const SearchIconWrap = styled.div`
  width: 48px;
  height: inherit;
  ${({ theme }) => theme.common.flexCenter}
`;
export const MainInputTag = styled(HomeInputTag)`
  background-color: ${colors.gray150};
  font-size: ${fontSize.FontSize16};

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
  position: relative;
  width: 48px;
  height: inherit;
  ${({ theme }) => theme.common.flexCenter}
`;
export const AddKeywordDiv = styled.div`
  width: 60px;
  font-size: ${fontSize.FontSize14};
  color: ${colors.pointOrange200};
  font-weight: ${fontWeight.FontWeight600};
`;
