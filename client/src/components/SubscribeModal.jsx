import React, { useEffect } from "react";
import styled from "styled-components";
import { DefaultContainer } from "@styles/common/container";
import { XIcon, CheckIcon } from "../styles/svgIcon";
import MoyaLogo from "@components/MoyaLogo";
import { colors, fontWeight, fontSize, pxToRem } from "@styles/theme";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "@styles/common/button/button";
import { createOrder } from "../api/subsApi";
import UserCheck from "../hoc/UserCheck";
import { RequiredLogin } from "../hoc/userAccessType";
import { useSelector } from "react-redux";
const SubscribeModal = () => {
  const navigate = useNavigate();
  const userCode = useSelector((state) => state.user.userData.userCode);

  const subsFetch = async () => {
    const orderCode = await createOrder(userCode);
    console.log(orderCode);
  };
  const handleSubs = () => {
    subsFetch();
  };
  return (
    <Container>
      <CancelWrap>
        <XIcon onClick={() => navigate(-1)} />
      </CancelWrap>
      <HeadWrap>
        <h3>키워드 기반 뉴스 구독 서비스</h3>
        <MoyaLogo />
      </HeadWrap>
      <SubsForm>
        <input type="radio" name="newsRadio" id="premium" defaultChecked />
        <label htmlFor="premium">
          <h3>PREMIUM</h3>
          <div className="box">
            <div className="benefit">
              <CheckIcon />
              키워드 즐겨찾기 최대 10개
            </div>
            <div className="benefit">
              <CheckIcon />
              키워드 관련 뉴스 콘텐츠 구독
            </div>
            <div className="benefit">
              <CheckIcon />
              스크랩 그룹 설정 무제한
            </div>
            <PriceDiv>
              <span>9,900원/월</span>
            </PriceDiv>
          </div>
        </label>
        <input type="radio" name="newsRadio" id="free" disabled />
        <label htmlFor="free">
          <h3>FREE</h3>
          <div className="box">
            <div className="benefit">
              <CheckIcon />
              키워드 즐겨찾기 최대 1개
            </div>
            <div className="benefit">
              <CheckIcon />
              스크랩 그룹 설정 최대 1개
            </div>
          </div>
        </label>
      </SubsForm>
      <SubsBtn orange onClick={handleSubs}>
        구독하기
      </SubsBtn>
    </Container>
  );
};

export default UserCheck(SubscribeModal, RequiredLogin);
const Container = styled(DefaultContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CancelWrap = styled.div`
  width: 100%;
  height: 24px;
`;
const HeadWrap = styled.div`
  padding: 40px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-bottom: 8px;
    color: ${colors.gray870};
    font-weight: ${fontWeight.FontWeight600};
  }
`;

const SubsForm = styled.form`
  width: 100%;

  label {
    font-weight: ${fontWeight.FontWeight700};
    font-size: ${fontSize.FontSize16};
    line-height: ${pxToRem(24)};
    margin-left: 10px;
    color: ${colors.gray500};
    h3 {
      font-weight: ${fontWeight.FontWeight600};
      margin-bottom: 8px;
    }
    .box {
      padding: 20px 22px;
      border: 1px solid ${colors.gray300};
      border-radius: 2px;
      font-weight: ${fontWeight.FontWeight500};
      .benefit {
        margin-bottom: 8px;
        &:last-child {
          margin-bottom: 0;
        }
        svg {
          margin-right: 10px;
        }
      }
    }
  }
  input[type="radio"] {
    display: none;
    &:checked {
      border: 4px solid ${colors.gray900};
    }
    &:checked + label {
      h3 {
        color: ${colors.pointOrange100};
      }
      .box {
        border: 1px solid ${colors.pointOrange100};
        color: #000;
        svg {
          path {
            stroke: ${colors.pointOrange100};
          }
        }
      }
    }
  }
`;

const PriceDiv = styled.div`
  font-weight: ${fontWeight.FontWeight600};
  font-size: ${fontSize.FontSize20};
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
export const SubsBtn = styled(DefaultButton)`
  margin-top: 138px;
  width: 100%;
  height: 54px;
  font-size: ${colors.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
`;
