import React from "react";
import styled from "styled-components";
import { pxToRem, colors } from "@styles/theme";

const AddKeywordModal = ({ resultBoolean, limitCode }) => {
  return (
    <>
      {limitCode === 2002 ? (
        <AddKeyword hide={resultBoolean}>
          {resultBoolean ? "10개까지 추가 가능합니다" : ""}
        </AddKeyword>
      ) : (
        <AddKeyword hide={resultBoolean}>
          {resultBoolean ? "즐겨찾기 항목에 추가 되었습니다" : ""}
        </AddKeyword>
      )}
    </>
  );
};

export default AddKeywordModal;

const AddKeyword = styled.div`
  width: 90%;
  height: 50px;
  background-color: ${colors.gray750};
  position: fixed;
  color: white;
  left: 0;
  right: 0;
  margin: auto;
  bottom: ${({ hide }) => (hide ? "30px" : "-100vh")};
  display: ${({ hide }) => (hide ? "flex" : "none")};
  border-radius: 4px;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
  font-size: ${pxToRem(12)};
`;
