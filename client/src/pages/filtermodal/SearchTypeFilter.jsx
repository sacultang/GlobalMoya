import React, { useState, useEffect } from "react";
import {
  H2Tag,
  ButtonWrapDiv,
  ApplyBtn,
  FilterInner,
  SelectForm,
  PublishForm,
  SortForm,
  PublishWrap,
  FilterWrap,
} from "@styles/filterStyle/filterStyle";
import { changeFilterRequest } from "@redux/searchFilterSlice";
import { published, mediaTypeArr, orderByArr } from "./searchParam";
import { useDispatch, useSelector } from "react-redux";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";

const SearchTypeFilter = ({
  showModal,
  showBtn,
  setApply,
  setSearchType,
  searchType,
}) => {
  const dispatch = useDispatch();

  const { timeFilter, mediaType, orderBy } = useSelector(
    (state) => state.searchFilterSlice
  );

  const handleSearchType = (e) => {
    const { value, name } = e.target;
    setSearchType({
      ...searchType,
      [name]: value,
    });
  };

  useEffect(() => {}, [searchType]);

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
    if (e.target.id === "apply") {
      setApply(true);
      dispatch(changeFilterRequest(searchType));
    } else {
      dispatch(changeFilterRequest({ timeFilter, mediaType, orderBy }));
      setApply(false);
      dispatch(toggleModalAction(""));
    }
  };

  return (
    <>
      {showBtn && (
        <FilterWrap className={showModal.sort ? "showModal" : "hideModal"}>
          <FilterInner>
            <H2Tag>언론사 종류</H2Tag>
            <SelectForm>
              {mediaTypeArr.map((item, idx) => (
                <div key={item.mediaType}>
                  <input
                    type="radio"
                    name="mediaType"
                    id={item.mediaType}
                    value={item.mediaType}
                    defaultChecked={mediaType === item.mediaType}
                    onChange={handleSearchType}
                  />
                  <label htmlFor={item.mediaType}>{item.text}</label>
                </div>
              ))}
            </SelectForm>
            <H2Tag>발행일</H2Tag>
            <PublishForm>
              {published.map((item, idx) => (
                <PublishWrap key={item.timeType}>
                  <label htmlFor={item.timeType}>
                    <input
                      type="radio"
                      name="timeFilter"
                      id={item.timeType}
                      value={item.timeType}
                      defaultChecked={timeFilter === item.timeType}
                      onChange={handleSearchType}
                    />
                    <span className="publish-btn">{item.text}</span>
                  </label>
                </PublishWrap>
              ))}
            </PublishForm>
            <H2Tag>정렬</H2Tag>
            <SortForm>
              {orderByArr.map((item, idx) => (
                <div key={item.orderBy}>
                  <input
                    type="radio"
                    name="orderBy"
                    value={item.orderBy}
                    id={item.orderBy}
                    defaultChecked={orderBy === item.orderBy}
                    onChange={handleSearchType}
                  />
                  <label htmlFor={item.orderBy}>{item.text}</label>
                </div>
              ))}
            </SortForm>
            <ButtonWrapDiv>
              <ApplyBtn id="cancel" onClick={handleSearch}>
                취소
              </ApplyBtn>
              <ApplyBtn id="apply" apply onClick={handleSearch}>
                적용하기
              </ApplyBtn>
            </ButtonWrapDiv>
          </FilterInner>
        </FilterWrap>
      )}
    </>
  );
};

export default SearchTypeFilter;
