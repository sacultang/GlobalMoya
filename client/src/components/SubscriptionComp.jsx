import React from "react";
import { Link } from "react-router-dom";
import { SubscriptionInfo, Subscription } from "../styles/myPage/Main";
import { colors, fontWeight } from "../styles/theme";
import styled from "styled-components";
import { subDate, dateFormat } from "@util/dateFunc";
const SubscriptionComp = ({ subsUser }) => {
  return (
    <>
      <SubscriptionInfo>
        {subsUser.subscriptions.length > 0 &&
        subsUser.subscriptions[subsUser.subscriptions.length - 1].status ===
          "ACTIVE" ? (
          <>
            <div className="subs">
              <span>월별 정기구독 이용중</span>
              <Link to="/mypage/subscription">
                <SubsBtn>구독관리</SubsBtn>
              </Link>
            </div>
            <Subscription>
              <div className="substerm">
                <div>구독 기간 </div>| &nbsp;
                {subsUser.subscriptions &&
                  subDate(
                    subsUser.subscriptions[subsUser.subscriptions.length - 1]
                      ?.nextPaymentDateTime
                  )}{" "}
                &nbsp;~ &nbsp;
                {subsUser.subscriptions &&
                  dateFormat(
                    subsUser.subscriptions[subsUser.subscriptions.length - 1]
                      ?.nextPaymentDateTime
                  )}
              </div>
              <div className="substerm">
                <div>다음 결제일 </div>| &nbsp;
                {subsUser.subscriptions &&
                  dateFormat(
                    subsUser.subscriptions[subsUser.subscriptions.length - 1]
                      ?.nextPaymentDateTime
                  )}
              </div>
            </Subscription>{" "}
          </>
        ) : (
          <>
            <div className="subs">
              <span>무료 서비스 이용중</span>
              <Link to="/subscribe">
                <SubsRedirectBtn>구독하기 {">"} </SubsRedirectBtn>
              </Link>
            </div>
            <Subscription>
              <div>
                <NotSubs>
                  <span>MOYA Premium</span>의 기능을 통해 더 많은 글로벌
                  <br /> 뉴스들을 읽고 관리해보세요!
                </NotSubs>
              </div>
            </Subscription>
          </>
        )}
      </SubscriptionInfo>
    </>
  );
};

export default SubscriptionComp;

const NotSubs = styled.div`
  width: 100%;
  font-weight: ${fontWeight.FontWeight500};
  span {
    color: ${colors.pointOrange200};
  }
`;
const SubsRedirectBtn = styled.button`
  width: 69px;
  height: 24px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  letter-spacing: -0.2px;
  background: #ffffff;

  color: ${colors.pointOrange200};
  border: 1px solid ${colors.pointOrange200};
`;
const SubsBtn = styled.button`
  width: 69px;
  height: 24px;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  letter-spacing: -0.2px;
  background: #ffffff;
  /* Gray/Gray400 */

  color: #b7b7b7;
`;
