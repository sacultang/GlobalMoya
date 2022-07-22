import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showDelBtnGroupAction,
  addCheckedGroupBtn,
  delCheckedGroupBtn,
  initCheckedGroupAction,
} from "@redux/scrapgroupCheckSlice";
import styled from "styled-components";
import { DeleteIcon } from "@styles/svgIcon";

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

  ${DeleteIcon} {
    & circle {
      fill: ${(props) => (props.checked ? "##FC5B3F" : "#dfdfdf")};
    }
  }
`;

const ScrapgroupCheck = ({ item }) => {
  const [checkedButtons, setCheckedButtons] = useState([]);
  const checkedBtn = useSelector(
    (state) => state.scrapgroupCheckSlice.checkedGroupBtn
  );
  const dispatch = useDispatch();
  const changeHandler = useCallback((checked, checkEl) => {
    if (checked) {
      // 체크 반영
      setCheckedButtons([...checkedButtons, checkEl]);
      dispatch(addCheckedGroupBtn(checkEl));
    } else {
      // 체크 반영 해제
      setCheckedButtons(checkedButtons.filter((button) => button !== checkEl));
      dispatch(delCheckedGroupBtn(checkEl));
    }
  });

  useEffect(() => {
    if (checkedBtn.length !== 0) {
      dispatch(showDelBtnGroupAction(true));
    } else {
      dispatch(showDelBtnGroupAction(false));
    }
    return () => {};
  }, [checkedBtn]);

  useEffect(() => {
    return () => {
      // 초기화
      dispatch(initCheckedGroupAction());
    };
  }, []);

  return (
    <>
      <Label htmlFor={item.groupId}>
        <HiddenCheckbox
          type="checkbox"
          id={item.groupId}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, item.groupId);
          }}
          checked={checkedButtons.includes(item.groupId) ? true : false}
        />
        <IconCheckbox
          checked={checkedButtons.includes(item.groupId) ? true : false}
        >
          <DeleteIcon />
        </IconCheckbox>
      </Label>
    </>
  );
};

export default ScrapgroupCheck;
