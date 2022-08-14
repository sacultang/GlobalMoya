import React, { useState } from "react";
import {
  Settings,
  Main,
  Logo,
  SubscriptionPlan,
  NextPayment,
  PaymentMethod,
  ApplyBtn,
} from "@styles/myPage/Subscription";
import { FilterBG } from "@styles/filterStyle/filterBG";
import { BackArrow, GlobalMOYAPremium } from "@styles/svgIcon";
import { DefaultContainer } from "@styles/common/container";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RequiredLogin } from "@hoc/userAccessType";
import UserCheck from "@hoc/UserCheck";
import { dateFormat } from "@util/dateFunc";
import SubsCancelModal from "@components/SubsCancelModal";

const Subscription = ({ user }) => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const subsUser = useSelector((state) => state.subsSlice.subsUser);

  const handleSubs = () => {
    setPopup((prev) => !prev);
    setShowBtn((prev) => !prev);
  };

  return (
    <>
      {user && (
        <Settings>
          <SubsCancelModal
            popup={popup}
            subsUser={subsUser}
            setPopup={setPopup}
            setShowBtn={setShowBtn}
          />
          <FilterBG showBtn={showBtn} onClick={handleSubs} />
          <Main>
            <div className="h3div">
              <BackArrow onClick={() => navigate(-1)} />

              <h3>구독관리</h3>
            </div>
          </Main>
          <DefaultContainer>
            <Logo>
              <GlobalMOYAPremium></GlobalMOYAPremium>
            </Logo>

            <SubscriptionPlan>
              <span>개인 멤버십 | 9,900원/월</span>
              <NextPayment>
                <div>
                  다음 결제일 |{" "}
                  {subsUser.subscriptions[subsUser.subscriptions.length - 1]
                    .nextPaymentDateTime === null
                    ? null
                    : dateFormat(
                        subsUser.subscriptions[
                          subsUser.subscriptions.length - 1
                        ].nextPaymentDateTime
                      )}
                </div>
                <span onClick={handleSubs}>구독취소</span>
              </NextPayment>
            </SubscriptionPlan>

            <PaymentMethod>
              <div>
                <span>
                  결제카드 :{" "}
                  {
                    subsUser.paymentMethods[subsUser.subscriptions.length - 1]
                      .paymentInfo
                  }
                </span>
                <span>수정</span>
              </div>
            </PaymentMethod>
            <ApplyBtn onClick={() => navigate(-1)}>확인</ApplyBtn>
          </DefaultContainer>
        </Settings>
      )}
    </>
  );
};

export default UserCheck(Subscription, RequiredLogin);
