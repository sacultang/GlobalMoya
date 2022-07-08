import styled from "styled-components";
import { colors, fontWeight, fontSize } from "../theme";
import { DefaultButton } from "../common/button/button";
export const FilterWrap = styled.div`
  position: fixed;
  width: auto;
  height: 100%;
  left: 0;
  right: 0;
  bottom: -150vh;
  transition: all 0.3s ease-out;
  &.Show {
    bottom: 0;
  }
`;
export const FilterModal = styled.div`
  background-color: #fff;
  padding: 20px 16px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
`;

export const FilterInner = styled.div`
  width: 100%;
  height: 100%;
`;
export const ViewWrapForm = styled.form`
  ${({ theme }) => theme.common.flexCenter}
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${colors.gray250};
  label {
    position: relative;
    input {
      display: none;
    }
    input[type="radio"] {
      &:checked + svg {
        path[fill-rule="evenodd"] {
          fill: ${colors.gray870};
        }
        path[fill-rule="text"] {
          fill: ${colors.gray870};
        }
        rect {
          fill: ${colors.gray500};
        }
      }
    }
  }
`;
export const VerticalView = styled.div``;
export const HorizontalView = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  label {
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
export const H2Tag = styled.h2`
  color: ${colors.black};
  font-weight: ${fontWeight.FontWeight700};
  font-size: ${fontSize.FontSize18};
  margin-bottom: 16px;
`;

export const SelectForm = styled.form`
  border-bottom: 1px solid ${colors.gray250};
  margin-bottom: 24px;
  div {
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    &:last-child {
      margin-bottom: 24px;
    }
  }
  label {
    font-weight: ${fontWeight.FontWeight400};
    font-size: ${fontSize.FontSize16};
    margin-left: 10px;
    color: ${colors.gray770};
  }
  input[type="radio"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: #fff;
    border: 1px solid ${colors.gray500};
    &:checked {
      border: 4px solid ${colors.gray900};
    }
    &:checked + label {
      font-weight: ${fontWeight.FontWeight500};
      color: ${colors.black};
    }
  }
`;

export const PublishForm = styled.form`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.gray200};
  overflow: scroll;
  margin-bottom: 24px;
  &::-webkit-scrollbar {
    display: none;
  }
  label {
    position: relative;
    width: 60px;
    height: 34px;
    input {
      display: none;
    }
    .publish-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.gray200};
      width: 56px;
      height: 32px;
      /* padding: 14px 5px; */
      border-radius: 20px;
      border: 1px solid ${colors.gray300};
      box-sizing: border-box;
      color: ${colors.gray400};
      margin-left: 6px;
      font-size: ${fontSize.FontSize14};
    }
    input:checked + .publish-btn {
      background-color: #000;
      color: #fff;
      border: none;
    }
  }
`;
export const PublishWrap = styled.div``;

export const SortForm = styled(SelectForm)``;

export const ButtonForm = styled.form`
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`;
export const ApplyBtn = styled(DefaultButton)`
  height: 52px;
  width: ${({ apply }) => (apply ? "224px" : "96px")};
  &:last-child {
    margin-right: 0;
  }
  background-color: ${({ apply }) => (apply ? colors.black : colors.gray350)};
  color: ${colors.white};
  font-weight: ${fontWeight.FontWeight600};
`;
