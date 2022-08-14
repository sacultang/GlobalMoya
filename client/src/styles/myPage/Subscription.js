import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";
import { DefaultButton } from "@styles/common/button/button";
export const Settings = styled.div`
  position: relative;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  height: 56px;
  h3 {
    text-align: center;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    width: 100%;
    margin: 0 auto;
    position: relative;
    svg {
      position: absolute;
      margin-left: 20px;
    }
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 36px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const SubscriptionPlan = styled.div`
  /* span이랑 div를 감싸고 있는거 */
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  margin-top: 72px;
  /* 😫😤😭
   flex속성 뭐 잇어요
   세로 배치할려면
  */
  span {
    font-size: ${fontSize.FontSize16};
    font-weight: ${fontWeight.FontWeight700};
    line-height: 24px;
    color: ${colors.black};
    margin-bottom: 4px;
  }
  div {
    font-size: ${fontSize.FontSize16};
    font-weight: ${fontWeight.FontWeight600};
    line-height: 24px;
    color: ${colors.gray600};
  }
`;

export const NextPayment = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight500};
    color: ${colors.gray500};
  }
  div {
    color: ${colors.gray600};
    font-size: ${fontSize.FontSize16};
    font-weight: ${fontWeight.FontWeight500};
  }
`;
export const PaymentMethod = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  margin-top: 72px;
  font-size: ${fontSize.FontSize16};
  font-weight: ${fontWeight.FontWeight500};
  color: ${colors.gray750};
  line-height: 24px;
  div {
    padding: 12px 0;
    border-bottom: 1px solid ${colors.gray250};
    display: flex;
    justify-content: space-between;
  }
  span:last-child {
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight500};
    color: ${colors.gray500};
  }
`;
export const ApplyBtn = styled(DefaultButton)`
  margin-top: 138px;
  width: 100%;
  height: 54px;
  font-size: ${colors.FontSize14};
  font-weight: ${fontWeight.FontWeight600};
  background-color: black;
`;

export const Popup = styled.div`
  width: 280px;
  height: 144px;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: orange;
  position: absolute;
  display: flex;
  flex-direction: column;
  span {
    line-height: 24px;
    padding: 12px 0 12px 16px;
    font-size: ${fontSize.FontSize18};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    font-size: ${fontSize.FontSize14};
    font-weight: ${fontWeight.FontWeight400};
    color: ${colors.gray900};
  }
`;
