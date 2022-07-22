import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";
import KeywordCardInput from "./KeywordCardInput";
import MainHeader from "../MainHeader";

const ViewTypeFilter = lazy(() => import("@pages/filtermodal/ViewTypeFilter"));
const SearchTypeFilter = lazy(() =>
  import("@pages/filtermodal/SearchTypeFilter")
);

import { MainPageContainer } from "@styles/main/mainContainer";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";
import NewsCardInfiniteHook from "@hooks/NewsCardInfiniteHook";
import NewsCard from "@components/NewsCard";
import FilterIconModal from "@components/filterModal/FilterIconModal";
import FilterTypeModal from "@components/filterModal/FilterTypeModal";
import Spinner from "@components/common/Spinner";
import ScrollTop from "@components/ScrollTop";
import AccessToken from "../../../hoc/AccessToken";
const KeywordCardMain = ({ accessToken }) => {
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const showModal = useSelector((state) => state.modalSlice.showModal);
  const [view, setView] = useState(viewType);
  const [apply, setApply] = useState(false);

  const [page, setPage] = useState(1);
  const user = useSelector((state) => state.user.userLogin);

  const inputRef = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchType, setSearchType] = useState({
    mediaType: "mp,op,r",
    timeFilter: "mth1",
    orderBy: "latest",
  });
  const { lastElementRef, newsList, loading, errorMsg } = NewsCardInfiniteHook(
    setPage,
    page,
    location.state,
    searchType,
    accessToken
  );

  const handleClick = (e) => {
    dispatch(toggleModalAction(e.target.id));
  };

  const handleBG = () => {
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  useEffect(() => {
    inputRef.current.value = location.state.paramValue;
  }, []);
  const renderLoader = () => <Spinner />;
  return (
    <>
      <FilterIconModal showBtn={showBtn}>
        <BtnWrap>
          <FilterBtn id="view" onClick={handleClick}>
            보기 타입
          </FilterBtn>
        </BtnWrap>
        <BtnWrap>
          <FilterBtn id="sort" onClick={handleClick}>
            데이터 정렬
          </FilterBtn>
        </BtnWrap>
      </FilterIconModal>
      <FilterTypeModal>
        {/* 버튼 조건에 따라 렌더링 */}
        <Suspense fallback={renderLoader()}>
          <ViewTypeFilter
            setView={setView}
            view={view}
            showModal={showModal}
            showBtn={showBtn}
            setApply={setApply}
          />
        </Suspense>

        <Suspense fallback={renderLoader()}>
          <SearchTypeFilter
            showModal={showModal}
            showBtn={showBtn}
            setApply={setApply}
            searchType={searchType}
            setSearchType={setSearchType}
          />
        </Suspense>
      </FilterTypeModal>
      <FilterBG showBtn={showBtn} onClick={handleBG} />
      <MainPageContainer style={{ paddingBottom: 0, borderBottom: 0 }}>
        <MainHeader user={user} />
        <KeywordCardInput inputRef={inputRef} />
      </MainPageContainer>
      <>
        <NewsCard
          view={view}
          apply={apply}
          newsList={newsList}
          loading={loading}
          errorMsg={errorMsg}
          lastElementRef={lastElementRef}
        />
        {loading ? <Spinner /> : null}
      </>

      <ScrollTop />
    </>
  );
};

export default AccessToken(KeywordCardMain);
