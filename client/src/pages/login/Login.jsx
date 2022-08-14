import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginFunc } from "@api/loginApi";
import { searchUserList } from "@api/subsApi";
import UserCheck from "@hoc/UserCheck";
import { RequiredLogout } from "@hoc/userAccessType";
import { fetchUserSuccess } from "@redux/user/userSlice";
import { subsUserAction } from "@redux/user/subsSlice";

import { Container } from "@styles/loginRegister/container";
import { CommonForm } from "@styles/loginRegister/commonForm";
import { Header, BackSpace, TitleHeader } from "@styles/loginRegister/header";
import { InputDiv, InputType } from "@styles/loginRegister/loginRegisterInput";
import {
  IconCancel,
  IconText,
  ShowIcon,
} from "@styles/loginRegister/login/loginIcon";
import {
  LoginDiv,
  LoginSpan,
  LonginIcon,
  LoginAuto,
  FindPw,
} from "@styles/loginRegister/login/loginAuto";
import { RegisterLink, LoginRegi } from "@styles/loginRegister/login/loginNew";
import { LoginButton } from "@styles/loginRegister/loginRegisterButton";

import { setRefreshToken } from "@util/settingSessions";

import IconEyeShut from "@assets/icons-eyeShut.svg"
import IconEyeOpen from "@assets/icons-eyeOpen.svg"
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetch = async (formData, data) => {
    const response = await loginFunc(formData);

    if (response.status === 200) {
      const userList = await searchUserList(data.email);
      const userEmail = userList.userCode.content[0].email;
      const userCode = userList.userCode.content[0].id;
      const accessToken = response.data.access_token;

      await dispatch(
        fetchUserSuccess({
          userEmail,
          userCode,
          accessToken,
        })
      );
      await dispatch(subsUserAction(userList.subsUser));
      await setRefreshToken(response.data.refresh_token);
      navigate(-1);
    } else if (response.status === 400) {
      alert("경고");
    }
  };

  // 회원가입 navigate
  const handleClick = () => {
    navigate("/register");
  };

  // input 아이콘 동작용 state, ref

  const [pwVisible, setPwVisible] = useState(false);

  const handleShow = () => {
    setPwVisible(pwVisible ? false : true);
    let showIcon = document.querySelector("#showIcon");
    console.log(showIcon.style);
    pwVisible
      ? (showIcon.style.backgroundImage =
          "client/src/assets/images/icons-eyeOpen.svg")
      : (showIcon.style.backgroundImage =
          "client/src/assets/images/icons-eyeShut.svg");
  };

  return (
    <Container>
      <CommonForm
        onSubmit={handleSubmit((data) => {
          const formData = new FormData();

          for (let key in data) {
            formData.append(key, data[key]);
          }

          fetch(formData, data);
        })}
      >
        <Header>
          <BackSpace
            type="button"
            onClick={() => {
              navigate("/");
            }}
          />
          <TitleHeader>로그인</TitleHeader>
        </Header>
        <InputDiv>
          <InputType
            id="email"
            type="email"
            name="email"
            placeholder="이메일"
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          <IconCancel
            onClick={() => {
              const emailInput = document.querySelector("#email");
              emailInput.value = "";
            }}
          >
            <IconText>icons-cancel</IconText>
          </IconCancel>
        </InputDiv>
        <InputDiv>
          <InputType
            type={pwVisible ? "text" : "password"}
            name="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
            })}
          />
          <ShowIcon id="showIcon" onClick={handleShow} url={pwVisible? IconEyeOpen : IconEyeShut}>
            <IconText>눈동자 아이콘</IconText>
          </ShowIcon>
        </InputDiv>
        <LoginDiv>
          <LoginSpan>
            {/* <CheckCircle alt="icons-check"  /> */}
            <LonginIcon type="checkbox" value="" />
            <LoginAuto>자동 로그인</LoginAuto>
          </LoginSpan>
          <FindPw>비밀번호 찾기</FindPw>
        </LoginDiv>
        <RegisterLink>
          아직 계정이 없으신가요?
          <LoginRegi onClick={handleClick}>회원가입</LoginRegi>
        </RegisterLink>
        <LoginButton type="submit" disabled={isSubmitting}>
          로그인
        </LoginButton>
      </CommonForm>
    </Container>
  );
};

export default UserCheck(Login, RequiredLogout);
