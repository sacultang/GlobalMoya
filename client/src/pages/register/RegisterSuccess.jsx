import React from "react";

import { CommonForm } from "@styles/loginRegister/commonForm";
import { Header, BackSpace, TitleHeader } from "@styles/loginRegister/header";
import {
  MainText,
  SuccessIcon,
  SuccessButton,
} from "@styles/loginRegister/register/registerSuccess";
import { IconsCheckCircle } from "@styles/svgIcon";
import { useNavigate } from "react-router-dom";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  const loginMove = () => {
    navigate("/login");
  };
  return (
    <>
      <CommonForm>
        <Header onClick={loginMove}>
          <BackSpace />
          <TitleHeader>가입완료</TitleHeader>
        </Header>
        <SuccessIcon>
          <IconsCheckCircle />
        </SuccessIcon>
        <MainText>
          회원가입이 <br />
          완료되었습니다.
        </MainText>
        <SuccessButton onClick={loginMove}>로그인하기</SuccessButton>
      </CommonForm>
    </>
  );
};

export default RegisterSuccess;
