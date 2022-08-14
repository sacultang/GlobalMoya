import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showDelBtnScrapAction,
  addCheckedScrapBtn,
  delCheckedScrapBtn,
  initCheckedScrapAction,
} from "@redux/scrapCheckboxSlice";
import styled from "styled-components";
import { ScrapDelCheckbox } from "@styles/svgIcon";

const Label = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const IconCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const ScrapCheck = ({ news, handleCheck }) => {
  const [checkedButtons, setCheckedButtons] = useState([]);
  const checkedBtn = useSelector(
    (state) => state.scrapCheckboxSlice.checkedScrapBtn
  );
  const checking = checkedButtons.includes(news.newsId) ? true : false;

  const dispatch = useDispatch();

  const changeHandler = useCallback((checked, checkEl) => {
    console.log("아이디는?", news.newsId);
    if (checked) {
      // 체크 반영
      setCheckedButtons([...checkedButtons, checkEl]);
      dispatch(addCheckedScrapBtn(checkEl));
    } else {
      // 체크 반영 해제
      setCheckedButtons(checkedButtons.filter((button) => button !== checkEl));
      dispatch(delCheckedScrapBtn(checkEl));
    }
  });

  // useEffect(() => {
  //   // console.log(handleCheck);
  //   if (checkedBtn.length !== 0) {
  //     dispatch(showDelBtnScrapAction(true));
  //   } else {
  //     dispatch(showDelBtnScrapAction(false));
  //   }
  //   return () => {};
  // }, [checkedBtn]);

  useEffect(() => {
    return () => {
      // 초기화
      dispatch(initCheckedScrapAction());
    };
  }, []);

  return (
    <>
      <Label
        htmlFor={news.newsId}
        onClick={() => {
          handleCheck(news.newsId);
        }}
      >
        <HiddenCheckbox
          type="checkbox"
          id={news.newsId}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, news.newsId);
          }}
          checked={checking}
        />
        <IconCheckbox checked={checking}>
          <ScrapDelCheckbox checked={checking} />
        </IconCheckbox>
      </Label>
    </>
  );
};

export default ScrapCheck;
