import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // useHistory 추가
import { useSelector, useDispatch } from "react-redux";
import { toggleScrapEditBtn } from "../../redux/reducer/modalSlice";

import { bookmarkAll } from "@api/bookmarkApi";

import NewsCard from "@components/NewsCard";
import NewsCardList from "@components/NewsCardList";
import ScrapCategory from "./scrapcate/ScrapCategory";
import { EditButton, Header } from "@styles/scrap/scrap";
import { BackArrow } from "@styles/svgIcon";
import { FilterBG } from "@styles/naviStyle/naviWrap";
import {
  BtnWrap,
  FilterBtn,
  ScrapMiniModalStyle,
} from "@styles/scrap/scrapModal";

const ScrapMain = ({ view, apply }) => {
  const [black, setBlack] = useState(true);
  const [newsList, setNewsList] = useState([]);
  const dispatch = useDispatch();
  const showScrapEditBtn = useSelector(
    (state) => state.modalSlice.showScrapEditBtn
  );
  const toggleEditModal = () => {
    dispatch(toggleScrapEditBtn(!showScrapEditBtn));
  };
  const handleBG = () => {
    dispatch(toggleScrapEditBtn(!showScrapEditBtn));
  };
  const getBookmarkAllDatas = async () => {
    const response = await bookmarkAll();

    const allbook = response.reports;
    const newslist = allbook.map((e) => {
      if (e.newsList) {
        const newsThing = e.newsList;
        return newsThing;
      }
    });
    const A = newslist.flat();
    setNewsList(A);
  };
  useEffect(() => {
    getBookmarkAllDatas();
  }, []);
  console.log("newsList?", newsList.length);
  return (
    <>
      <FilterBG showScrapEditBtn={showScrapEditBtn} onClick={handleBG} />
      <ScrapMiniModalStyle showScrapEditBtn={showScrapEditBtn}>
        <BtnWrap>
          <Link to="/scrap/groupedit">
            <FilterBtn>그룹 편집</FilterBtn>
          </Link>
        </BtnWrap>
      </ScrapMiniModalStyle>
      <Header>
        <div>
          <Link to="/main">
            <BackArrow />
          </Link>
          <h3>스크랩 뉴스</h3>
          <EditButton className="edit" onClick={toggleEditModal}>
            편집
          </EditButton>
        </div>
      </Header>
      <ScrapCategory black={black} />
      {newsList.map((news, idx) => (
        <>
          <NewsCardList news={news} view={view} apply={apply} idx={idx} />
        </>
      ))}
    </>
  );
};
export default ScrapMain;
