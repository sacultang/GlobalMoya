import React from "react";
import {
  ViewWrapForm,
  H2Tag,
  VerticalView,
  HorizontalView,
  ButtonWrapDiv,
  ApplyBtn,
  FilterInner,
  InputWrap,
  FilterWrap,
} from "@styles/filterStyle/filterStyle";
import { MagazineDisable, TextDisable, CardDisable } from "@styles/svgIcon";
import { useDispatch, useSelector } from "react-redux";
import { toggleBtnAction, toggleModalAction } from "@redux/modalSlice";
import { cardTypeAction } from "@redux/cardTypeSlice";
import { useCallback } from "react";
const ViewTypeFilter = ({ showModal, showBtn, setApply, setView, view }) => {
  const dispatch = useDispatch();
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  const handleChange = useCallback(
    (e) => {
      setView(e.target.id);
      setApply(true);
    },
    [view]
  );
  /* 
    1. 인풋 체인지로 view 타입 핸들
    2. apply 시 저장, 취소시 이전 값
  */
  const handleCardType = (e) => {
    e.preventDefault();
    dispatch(toggleBtnAction(!showBtn));
    dispatch(toggleModalAction(""));
    if (e.target.id === "apply") {
      setApply(true);
      dispatch(cardTypeAction(view));
    } else {
      console.log("cancel");
      setApply(false);
      dispatch(toggleModalAction(""));
      dispatch(cardTypeAction(viewType));
    }
  };
  return (
    <>
      {showBtn && (
        <FilterWrap className={showModal.view ? "showModal" : "hideModal"}>
          <FilterInner>
            <H2Tag>보기 타입</H2Tag>
            <ViewWrapForm>
              <InputWrap>
                <HorizontalView>
                  <label htmlFor="Magazine">
                    <input
                      type="radio"
                      id="Magazine"
                      name="newsRadio"
                      onChange={handleChange}
                      defaultChecked={viewType === "Magazine"}
                    />
                    <MagazineDisable />
                  </label>
                  <label htmlFor="TextOnly">
                    <input
                      type="radio"
                      id="TextOnly"
                      name="newsRadio"
                      onChange={handleChange}
                      defaultChecked={viewType === "TextOnly"}
                    />
                    <TextDisable />
                  </label>
                </HorizontalView>
                <VerticalView>
                  <label htmlFor="CardType">
                    <input
                      type="radio"
                      id="CardType"
                      name="newsRadio"
                      onChange={handleChange}
                      defaultChecked={viewType === "CardType"}
                    />
                    <CardDisable />
                  </label>
                </VerticalView>
              </InputWrap>
            </ViewWrapForm>
            <ButtonWrapDiv>
              <ApplyBtn id="cancel" onClick={handleCardType}>
                취소
              </ApplyBtn>
              <ApplyBtn id="apply" onClick={handleCardType} apply>
                적용하기
              </ApplyBtn>
            </ButtonWrapDiv>
          </FilterInner>
        </FilterWrap>
      )}
    </>
  );
};

export default ViewTypeFilter;
