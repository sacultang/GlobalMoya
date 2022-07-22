import React, { useState, useEffect, useMemo } from "react";
import { getKeywords, updateListKeywords } from "@api/keywordListApi";

import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleEditAction } from "@redux/buttonSlice";
import {
  EditContextWrap,
  EditContainer,
  EditHeaderContainer,
  EditBack,
  EditHeader,
  EditCount,
  EditUl,
  EditButtonDiv,
  EditButtonCancel,
  EditButtonSave,
  EditButtonDelete,
} from "@styles/edit/editKeyword";
import { BackArrow } from "@styles/svgIcon";
import KeywordSortableItem from "./KeywordSortableItem";
import { createTermSeq } from "@util/createTermSeq";
import AccessToken from "@hoc/AccessToken";

const EditKeywordContext = ({ accessToken }) => {
  const [items, setItems] = useState([]);
  const [newItems, setNewItems] = useState([]);
  const [newTerm, setTermSeq] = useState([]);
  const navigate = useNavigate();

  const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);
  const showDelBtn = useSelector((state) => state.buttonSlice.showDelBtn);

  const TermSeq = useMemo(() => createTermSeq(items.length), [items]);

  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main");
  };

  const getDatas = async () => {
    const response = await getKeywords(accessToken);
    setItems(response);
  };

  useEffect(() => {
    if (!items.length) getDatas();
  }, [items]);

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        for (let i = 0; i < items.length; i++) {
          items[i].updateFlag = "S";
        }
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const saveTermSeq = () => {
    let SNum = 0;
    let termItem = items.map((item, idx) => {
      item.termSeq = TermSeq[idx];
      if (item.updateFlag === "S") SNum++;
      return item;
    });
    if (!SNum) {
      return alert("변경 값이 없습니다.");
    } else {
      updateListKeywords({ termList: termItem }, accessToken);
    }
  };

  const handleDelete = () => {
    // let DNum = 0;
    // let termItem = items.map((item, idx) => {
    //   item.termSeq = TermSeq[idx];
    //   if (item.updateFlag === "R") DNum++;
    //   return item;
    // });
    // if (!DNum) {
    //   return alert("변경 값이 없습니다.");
    // } else {
    //   updateListKeywords({ termList: termItem }, accessToken);
    // }
  };

  return (
    <EditContextWrap showEditBtn={showEditBtn}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        autoScroll={{ threshold: { x: 0, y: 0 } }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <EditContainer>
            <EditHeaderContainer>
              <EditBack onClick={toggleModal}>
                <BackArrow />
              </EditBack>
              <EditHeader>키워드 편집</EditHeader>
              <EditCount>{items && items.length}/10</EditCount>
            </EditHeaderContainer>
            <EditUl>
              {items.map((item) => (
                <KeywordSortableItem
                  key={item.id}
                  item={item}
                  handleDelete={handleDelete}
                />
              ))}
              {/* {keywordNameList &&
                items.map((item) => (
                  <KeywordSortableItem key={item.id} item={item} />
                ))} */}
            </EditUl>
            <EditButtonDiv>
              <EditButtonCancel onClick={toggleModal}>취소</EditButtonCancel>
              {showDelBtn ? (
                <EditButtonDelete onClick={() => handleDelete()}>
                  삭제
                </EditButtonDelete>
              ) : (
                <EditButtonSave onClick={() => saveTermSeq()}>
                  저장
                </EditButtonSave>
              )}
            </EditButtonDiv>
          </EditContainer>
        </SortableContext>
      </DndContext>
    </EditContextWrap>
  );
};

export default AccessToken(EditKeywordContext);
