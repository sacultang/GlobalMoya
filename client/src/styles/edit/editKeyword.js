import styled from "styled-components";
import { colors, fontSize, fontWeight } from "../theme";
export const EditContextWrap = styled.div`
  display: ${({ showEditBtn }) => (showEditBtn ? "flex" : "none")};
`;
export const EditContainer = styled.div`
  padding: 0px 16px;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: ${colors.white};
  z-index: 999;

  &::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
  overflow-y: auto;
`;
export const EditContainer2 = styled.div`
  margin: 60px 0 100px 0;
  padding: 0px 16px;
  flex-direction: column;
  z-index: 1;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
  overflow-y: auto;
`;
export const EditHeaderContainer = styled.div`
  display: flex;
  padding: 30px 0px 15px;
`;
export const EditBack = styled.div`
  cursor: pointer;
`;
export const EditHeader = styled.h2`
  flex-grow: 1;
  text-align: center;
  font-weight: ${fontWeight.FontWeight600};
  color: ${colors.gray900};
`;
export const EditCount = styled.span`
  color: ${colors.gray500};
`;
export const EditUl = styled.ul`
  color: ${colors.gray870};
  height: 100%;
`;
// 나중에 컴포넌트로 분리
export const EditButtonDiv = styled.div`
  position: relative;
  bottom: 16px;
  width: 90%;
  margin: 0 auto;
`;
export const EditButtonCancel = styled.button`
  margin-right: 4%;
  width: 26%;
  height: 52px;
  background-color: ${colors.gray350};
  color: ${colors.white};
  cursor: pointer;
  transition: background-color 500ms;
  &:hover {
    background-color: ${colors.gray300};
  }
`;
export const EditButtonSave = styled.button`
  width: 70%;
  height: 52px;
  background-color: ${colors.gray900};
  color: ${colors.white};
  cursor: pointer;
  transition: background-color 500ms;
  &:hover {
    background-color: ${colors.gray850};
  }
`;
export const EditButtonDelete = styled.button`
  width: 70%;
  height: 52px;
  background-color: ${colors.pointOrange200};
  color: ${colors.white};
  cursor: pointer;
  transition: background-color 500ms;
  &:hover {
    background-color: ${colors.pointOrange100};
  }
`;

// SortableItem
export const EditItemWrap = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
`;
// export const IconWrap = styled.div`
//   width: 48px;
//   display: flex;
//   justify-content: center;
//   svg {
//     height: 20px;
//   }
//   cursor: pointer;
// `;
export const EditItemTextWrap = styled.div`
  padding: 0px 20px;
  border-radius: 4px;
`;
// mobile에서 터치 시 width,height 사이즈가 아이콘 보다 더 커야 터치하기에 좋다.
export const EditHamburgerWrap = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;
export const EditTextKeyword = styled.h4``;

export const EditInputGroup = styled.input`
  font-size: ${fontSize.FontSize16};
  background: none;
  border: 1px solid ${colors.gray250};
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
`;
