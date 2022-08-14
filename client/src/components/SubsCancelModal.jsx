import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fontSize, colors } from "@styles/theme";
import { payMentChange, subsCancel, customerSearch } from "@api/subsApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { subsUserAction } from "../redux/reducer/user/subsSlice";
const SubsCancelModal = ({ popup, subsUser, setShowBtn, setPopup }) => {
  const navigate = useNavigate();

  const [cancelDone, setCancelDone] = useState(true);
  const dispatch = useDispatch();

  const handleCancel = async () => {
    const result = await subsCancel(
      subsUser.subscriptions[subsUser.subscriptions.length - 1]?.id
    );

    if (result.status === 200) {
      const customer = await customerSearch(subsUser.id);
      setCancelDone((prev) => !prev);
      if (customer.status === 200) {
        await dispatch(subsUserAction(customer.data));
      }
    }
  };

  const handleBg = () => {
    setShowBtn((prev) => !prev);
    setPopup((prev) => !prev);
  };
  const redirect = () => {
    setShowBtn((prev) => !prev);
    setPopup((prev) => !prev);
    navigate(-1);
  };

  // useEffect(() => {
  //   customerSearch(subsUser.id);
  // }, []);

  return (
    <SubsCancelDiv popup={popup}>
      {cancelDone ? (
        <>
          <div className="">
            <div className="head">
              <h1>구독을 취소하시겠습니까?</h1>
              <h3>
                키워드 추가 및 뉴스 그룹 설정 기능 등의 프리미엄 혜택이
                사라집니다.
              </h3>
            </div>
          </div>

          <div className="button">
            <button onClick={handleBg}>유지</button>
            <button className="cancel" onClick={handleCancel}>
              구독 취소
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="">
            <div className="head">
              <h1>구독취소 되었습니다</h1>
            </div>
          </div>
          <div className="button">
            <button className="cancel" onClick={redirect}>
              완료
            </button>
          </div>
        </>
      )}
    </SubsCancelDiv>
  );
};

export default SubsCancelModal;
const SubsCancelDiv = styled.div`
  display: ${(props) => (props.popup ? "block" : "none")};
  width: 280px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  position: absolute;
  z-index: 3;
  border-radius: 2px;

  .head {
    border-bottom: 1px solid #ddd;
    margin-bottom: 14px;
    padding: 20px 24px;
    h1 {
      font-size: ${fontSize.FontSize18};
      font-weight: 600;
      margin-bottom: 12px;
    }
    h3 {
      font-size: ${fontSize.FontSize14};
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
  .button {
    padding: 14px 24px 18px 0;
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 32px;
      color: ${colors.gray400};
      background-color: #fff;
      font-weight: 600;
      font-size: ${fontSize.FontSize16};
    }
    .cancel {
      color: ${colors.pointOrange200};
    }
  }
`;
