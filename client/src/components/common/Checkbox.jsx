import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showDelBtnAction,
  addCheckedBtn,
  delCheckedBtn,
  initCheckedAction,
  delItemsAction,
} from "@redux/buttonSlice";
import { deleteKeywords } from "@api/keywordListApi";
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

const Checkbox = ({ item, handleDelete }) => {
  const [checkedButtons, setCheckedButtons] = useState([]);
  const checkedBtn = useSelector((state) => state.buttonSlice.checkedBtn);
  const [keyType, setKeyType] = useState("");
  const [_id, set_Id] = useState("");
  const [termSeq, setTermSeq] = useState("");
  // const [updateFlag, setUpdateFlag] = useState("");

  const dispatch = useDispatch();

  const changeHandler = useCallback((checked, checkEl) => {
    setKeyType(item.keyType);
    set_Id(item._id);
    setTermSeq(item.termSeq);

    if (checked) {
      // 체크 반영
      setCheckedButtons([...checkedButtons, checkEl]);
      dispatch(addCheckedBtn(checkEl));
      dispatch(delItemsAction({ keyType, _id, termSeq }));
    } else {
      // 체크 반영 해제
      setCheckedButtons(checkedButtons.filter((button) => button !== checkEl));
      dispatch(delCheckedBtn(checkEl));
    }
  });

  // console.log("handleDelete", handleDelete());

  // const deleteData = async () => {
  //   const json = {
  //     keyType: keyType,
  //     _id: _id,
  //     termSeq: termSeq,
  //   };
  //   if (checkedBtn.length === 1) {
  //     const response = await deleteKeywords(json, accessToken);
  //     console.log("del res", response);
  //   }
  // };

  useEffect(() => {
    if (checkedBtn.length !== 0) {
      dispatch(showDelBtnAction(true));
    } else {
      dispatch(showDelBtnAction(false));
    }
    return () => {};
  }, [checkedBtn]);

  useEffect(() => {
    return () => {
      // 초기화
      dispatch(initCheckedAction());
    };
  }, []);

  // useEffect(() => {
  // console.log("나 아이템", item);
  // const deleteData = async () => {
  //   const json = {
  //     keyType: "",
  //     _id: "",
  //     termSeq: "",
  //   };
  //   if (checkedBtn.length === 1) {
  //     const response = await deleteKeywords(json, accessToken);
  //   }
  // };
  // }, [checkedBtn]);

  return (
    <>
      <Label htmlFor={item.id}>
        <HiddenCheckbox
          type="checkbox"
          id={item.id}
          name={item.name}
          onChange={(e) => {
            changeHandler(e.currentTarget.checked, "check");
          }}
          checked={checkedButtons.includes("check") ? true : false}
        />
        <IconCheckbox checked={checkedButtons.includes("check") ? true : false}>
          <DeleteIcon />
        </IconCheckbox>
      </Label>
    </>
  );
};

export default Checkbox;
