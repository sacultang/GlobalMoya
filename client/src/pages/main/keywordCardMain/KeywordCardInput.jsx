import React from "react";
import { SearchIcon, FilterIcon } from "@styles/svgIcon";
import {
  MainInputTag,
  MainInputWrap,
  SearchIconWrap,
  FilterIconWrap,
  AddKeywordDiv,
} from "@styles/main/mainPageInput";
import { useSelector, useDispatch } from "react-redux";
import { toggleBtnAction } from "@redux/modalSlice";

const KeywordInput = ({ inputRef }) => {
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleBtnAction(!showBtn));
  };

  return (
    <MainInputWrap>
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      <MainInputTag
        placeholder="뉴스 키워드를 검색해보세요."
        ref={inputRef}
        style={{ flexGrow: 1, width: "50%" }}
      />
      <AddKeywordDiv>키워드 +</AddKeywordDiv>
      <FilterIconWrap onClick={toggleModal}>
        <FilterIcon />
      </FilterIconWrap>
    </MainInputWrap>
  );
};

export default KeywordInput;
