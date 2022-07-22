//스크랩 그룹 편집 : 순서변경,이름변경, 삭제
import React, { useState, useRef, useInput } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EditGroupContext from "../edit/group/EditGroupContext";

import { FixedHeader, BtnWrap } from "@styles/scrap/scrap";
import { ApplyBtn, DeleteBtn, ButtonWrapDiv } from "@styles/scrap/scrapnews";
import { BackArrow, NewGroupPlus } from "@styles/svgIcon";
// import GroupList from "@components/group/GroupList";
const ScrapGroupEdit = () => {
  const navigate = useNavigate();
  const showDelGroupBtn = useSelector(
    (state) => state.scrapgroupCheckSlice.showDelGroupBtn
  );
  const dispatch = useDispatch();
  return (
    <>
      <FixedHeader>
        <div>
          <div onClick={() => navigate(-1)}>
            <BackArrow />
          </div>
          <h3>그룹 편집</h3>
          <Link to="/newfolder">
            <button>
              <NewGroupPlus />
            </button>
          </Link>
        </div>
      </FixedHeader>
      <EditGroupContext />
      <BtnWrap>
        <ButtonWrapDiv>
          <ApplyBtn>취소</ApplyBtn>

          <DeleteBtn apply showDelGroupBtn={showDelGroupBtn}>
            삭제
          </DeleteBtn>

          <ApplyBtn apply showDelGroupBtn={showDelGroupBtn}>
            저장
          </ApplyBtn>
        </ButtonWrapDiv>
      </BtnWrap>
    </>
  );
};
export default ScrapGroupEdit;
