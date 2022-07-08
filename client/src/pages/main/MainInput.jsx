import React from "react";
import {
  MainInputTag,
  MainInputWrap,
  SearchIconWrap,
  FilterIconWrap,
} from "@styles/main/mainPageInput";

import { SearchIcon, FilterIcon } from "@styles/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalAction } from "../../redux/reducer/modalSlice";

import { useNavigate } from "react-router-dom";
const MainInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const show = useSelector((state) => state.modalSlice.showModal);
  const toggleModal = () => {
    dispatch(toggleModalAction(!show));
  };

  return (
    <MainInputWrap>
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      <MainInputTag
        placeholder="뉴스 키워드를 검색해보세요."
        onFocus={() => {
          navigate("/quick");
        }}
      />
      <FilterIconWrap onClick={toggleModal}>
        <FilterIcon />
      </FilterIconWrap>
    </MainInputWrap>
  );
};

export default MainInput;
