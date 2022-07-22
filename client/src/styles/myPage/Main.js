import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const MainContainer = styled.div`
  position: relative;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
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

export const AccountInfo = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  /* width: 360px; */
  height: 216px;
  background: ${colors.gray150};
  /* margin: 0 auto; */
`;

export const Account = styled.div`
  position: relative;
  span {
    font-size: ${fontSize.FontSize22};
    font-weight: ${fontWeight.FontWeight600};
    left: 44px;
    bottom: 27px;
    position: absolute;
  }
  p {
    font-size: ${fontSize.FontSize16};
    font-weight: ${fontWeight.FontWeight400};
    color: #1a1a1a;
    line-height: 22px;
    margin-bottom: 16px;
    letter-spacing: -0.2px;
    color: #1a1a1a;
  }
  svg {
    display: block;
    padding-top: 10px;
  }
`;

export const SubscriptionInfo = styled.div`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  padding: 12px 12px 14px 16px;
  .subs {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.2px;
      color: #2a2a2a;
    }
  }
`;
export const Subscription = styled.div`
  font-size: ${fontSize.FontSize14};
  color: ${colors.gray500};
  line-height: 22px;
  font-weight: ${fontWeight.FontWeight500};
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  .substerm {
    display: flex;
    div {
      width: 74px;
    }
  }
`;
export const AccountSettings = styled.div`
  /* 계정 관리 */
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.2px;
  /* Gray/Gray400 */
  color: #b7b7b7;
`;
export const Settings = styled.ul`
  padding: 20px 18px 20px 18px;
  /* 비밀번호 재설정 */
  li {
    width: 360px;
    height: 24px;
    left: 0px;
    top: 343px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    /* Gray/Gray800 */
    color: #2a2a2a;
  }
  div {
    margin-top: 15px;
  }
  svg {
    right: 10px;
    position: absolute;
    fill: none;
    stroke: white;
    stroke-width: 2px;
    position: absolute;
  }
`;

export const Help = styled.div`
  border-top: 1px solid #ddd;
  .helpWrap {
    padding: 20px 18px 20px 18px;
  }
  div {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -0.2px;
    /* Gray/Gray400 */
    color: #b7b7b7;
  }
  ul {
    margin-top: 15px;

    font-weight: 500;
    font-size: 16px;
    li {
      width: 360px;
      height: 44px;
      color: ${colors.gray800};
    }
  }
  svg {
    right: 10px;
    position: absolute;
    fill: none;
    stroke: white;
    stroke-width: 2px;
  }
`;
