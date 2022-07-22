import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useHistory 추가
import { useSelector, useDispatch } from "react-redux";
import { toggleScrapMoveBtn } from "../../redux/reducer/modalSlice";
import styled from "styled-components";
import { bookmarkOne, bookmarkDelete } from "@api/bookmarkApi";

import { ScrapMoveWrap, ScrapMoveh4 } from "@styles/scrap/scrapModal";

import {
  Btn50percent,
  FixedHeader,
  NewsCardcontent,
  Wrap,
} from "@styles/scrap/scrap";
import { ApplyBtn, ButtonWrapDiv } from "@styles/scrap/scrapnews";
import ScrapNewsCard from "./scrapcate/ScrapNewsCard";
import ScrapMoveModal from "./scrapcate/ScrapMoveModal";
import { FilterBG } from "@styles/naviStyle/naviWrap";
import { BackArrow } from "@styles/svgIcon";
import { BtnWrapVisible } from "../../styles/scrap/scrap";

const ScrapNewsEdit = ({ scrapcheck, view, apply }) => {
  const navigate = useNavigate();
  const params = useParams();
  const groupId = params.id;
  const groupName = useSelector(
    (state) => state.ScrapFolderSlice.groupName.groupName
  );
  const showDelScrapBtn = useSelector(
    (state) => state.scrapCheckboxSlice.showDelScrapBtn
  );
  const [newsList, setNewsList] = useState([]);
  const [openBg, setOpenBg] = useState(false);
  const [dtNewsId, setDtNewsId] = useState([]);
  const dispatch = useDispatch();
  const showScrapMoveBtn = useSelector(
    (state) => state.modalSlice.showScrapMoveBtn
  );
  const toggleMoveModal = () => {
    dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
  };
  const handleBG = () => {
    dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
  };
  const getBookmarkOneDatas = async () => {
    const response = await bookmarkOne(groupId);
    setNewsList(response.details);
  };
  useEffect(() => {
    getBookmarkOneDatas();
  }, [dtNewsId]);
  useEffect(() => {
    console.log(dtNewsId);
    console.log(groupId);
  }, [dtNewsId]);
  const openModal = () => {
    setOpenBg((prev) => !prev);
  };

  const deleteFunc = async () => {
    const json = {
      groupId,
      newsIdList: dtNewsId,
    };
    const res = await bookmarkDelete(json);
    console.log(res);
    if (res.status === 200) {
      setDtNewsId([]);
      setOpenBg(false);
    }
    console.log("delete", groupId, dtNewsId);
  };
  return (
    <>
      <DelModal $hide={openBg}>
        <div className="header">
          <div>키워드를 삭제하시겠습니까?</div>
        </div>
        <div className="btnWrap">
          <button className="cancel" onClick={openModal}>
            유지
          </button>
          <button className="dlt" onClick={deleteFunc}>
            삭제
          </button>
        </div>
      </DelModal>
      <FilterBG showScrapMoveBtn={openBg} onClick={openModal} />
      <FixedHeader>
        <div>
          <BackArrow onClick={() => navigate(-1)} />
          <h3>{groupName}</h3>
          <button>완료</button>
        </div>
      </FixedHeader>
      <NewsCardcontent>
        {newsList &&
          newsList.map((news, idx) => (
            <>
              <ScrapNewsCard
                news={news}
                view={view}
                apply={apply}
                idx={idx}
                setDtNewsId={setDtNewsId}
              />
            </>
          ))}
      </NewsCardcontent>

      <BtnWrapVisible showDelScrapBtn={showDelScrapBtn}>
        <Btn50percent onClick={toggleMoveModal}>이동</Btn50percent>
        <Btn50percent className="delete" onClick={openModal}>
          삭제
        </Btn50percent>
      </BtnWrapVisible>

      <ScrapMoveWrap showScrapMoveBtn={showScrapMoveBtn}>
        <ScrapMoveh4>이동할 그룹 선택</ScrapMoveh4>
        <ScrapMoveModal></ScrapMoveModal>
        <Wrap>
          <ButtonWrapDiv>
            <ApplyBtn onClick={toggleMoveModal}>취소</ApplyBtn>
            <ApplyBtn apply>저장</ApplyBtn>
          </ButtonWrapDiv>
        </Wrap>
      </ScrapMoveWrap>
    </>
  );
};
export default ScrapNewsEdit;

const DelModal = styled.div`
  width: 280px;
  height: 180px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: white;
  z-index: 5;
  display: ${({ $hide }) => ($hide ? "block" : "none")};
  .header {
    border-bottom: 1px solid #ddd;
    padding-top: 55px;
    padding-bottom: 55px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }
  .btnWrap {
    display: flex;
    justify-content: flex-end;
    padding: 14px 24px 18px 0;
    font-size: 14px;
    button {
      background-color: transparent;
      margin-left: 24px;
    }
    .cancel {
      color: gray;
    }
    .dlt {
      color: #ea2d0d;
    }
  }
`;
