import React, { useState, lazy, Suspense } from "react";
import MainHeader from "./MainHeader";
import MainInputComponent from "./MainInput";
import MainKeywordList from "./MainKeywordList";
import EditKeywordContext from "@pages/edit/keyword/EditKeywordContext";
import FilterIconModal from "@components/filterModal/FilterIconModal";
import FilterTypeModal from "@components/filterModal/FilterTypeModal";
const ViewTypeFilter = lazy(() => import("@pages/filtermodal/ViewTypeFilter"));
const SearchTypeFilter = lazy(() =>
  import("@pages/filtermodal/SearchTypeFilter")
);
import Spinner from "@components/common/Spinner";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { MainPageContainer } from "@styles/main/mainContainer";
import { BtnWrap, FilterBtn } from "@styles/filterStyle/filterModal";

import { useSelector, useDispatch } from "react-redux";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";

import UserCheck from "@hoc/UserCheck";
import GroupChooseModal from "@components/scrapModal/GroupChooseModal";
const MainPage = () => {
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const showBtn = useSelector((state) => state.modalSlice.showBtn);
  const showModal = useSelector((state) => state.modalSlice.showModal);
  const user = useSelector((state) => state.user.userLogin);
  const showScrapMoveBtn = useSelector(
    (state) => state.modalSlice.showScrapMoveBtn
  );
  const [view, setView] = useState(viewType);
  const [apply, setApply] = useState(false);
  const [searchType, setSearchType] = useState({
    mediaType: "mp,op,r",
    timeFilter: "mth1",
    orderBy: "latest",
  });
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(toggleModalAction(e.target.id));
  };
  const handleBG = () => {
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
  };

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
            setSearchType={setSearchType}
            searchType={searchType}
          />
        </Suspense>
      </FilterTypeModal>
      <FilterBG showBtn={showBtn} onClick={handleBG} />
      <MainPageContainer>
        <MainHeader user={user} />
        <MainInputComponent />
        <MainKeywordList view={view} apply={apply} />
        <EditKeywordContext />
      </MainPageContainer>
      <GroupChooseModal showScrapMoveBtn={showScrapMoveBtn} />
    </>
  );
};

export default UserCheck(MainPage);
