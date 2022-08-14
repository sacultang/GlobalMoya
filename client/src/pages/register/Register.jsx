import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerFunc, stepPayFunc } from "@api/registerApi";
import { emailCheckFunc } from "@api/emailCheckApi";

import { CommonForm } from "@styles/loginRegister/commonForm";
import { Header, BackSpace, TitleHeader } from "@styles/loginRegister/header";
import { InputDiv, InputType } from "@styles/loginRegister/loginRegisterInput";
import { LoginButton } from "@styles/loginRegister/loginRegisterButton";
import { OverlapBtn } from "@styles/loginRegister/register/overlapButton";

const Register = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const [emailInput, setEmailInput] = useState("ok");
  const [emailCheck, setEmailCheck] = useState("");

  // 이메일 중복 검증 하는 함수

  const button = document.getElementById("emailCheck");

  const handleEmail = () => {
    let email = watch().email;
    let data = { email: email };
    let json = JSON.stringify(data);
    const promise = emailCheckFunc(json);
    setEmailCheck(promise);

    if (/\S+@\S+\.\S+/.test(email)) {
      if (emailCheck === 0) {
        button.innerText = "확인완료";
        console.log(emailCheck);
      } else {
        button.innerText = "확인필요";
        setEmailInput("existing");
        console.log(emailCheck);
      }
    } else {
      button.innerText = "확인필요";
      setEmailInput("invalid");
      console.log(emailCheck);
    }
  };

  const [pwInput, setPwInput] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pwValid, setPwValid] = useState(true);
  const [pwCorrect, setPwCorrect] = useState(true);

  const handlePw = setTimeout(() => {
    let pw = watch().password;
    let reg =
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{10,}";
    setPwInput(watch().password);
    if (pw !== reg) {
      setPwValid(false);
    }
  }, 500);

  const handlePwCorrect = setTimeout(() => {
    setPwInput(watch().password);
    setPwCheck(watch().passwordCheck);
    if (pwInput !== pwCheck) {
      setPwCorrect(false);
    }
  });

  const navigate = useNavigate();

  return (
    <>
      <CommonForm
        onSubmit={handleSubmit((data) => {
          const formData = new FormData();

          for (let key in data) {
            if (key !== "passwordCheck") {
              formData.append(key, data[key]);
            }
          }

          let stepPayData = {};

          for (let key in data) {
            if (key !== "passwodrCheck" && key !== "password") {
              stepPayData[key] = data[key];
              stepPayData["marketingSms"] = true;
              stepPayData["marketingEmail"] = true;
              stepPayData["marketingKakao"] = true;
            }
          }

          stepPayData = stepPayData.JSON.stringify();

          registerFunc(formData);
          stepPayFunc(stepPayData);
          props.setRegisterPage("onSuccess");
        })}
      >
        <Header>
          <BackSpace
            onClick={() => {
              navigate("/login");
            }}
          />
          <TitleHeader>회원가입</TitleHeader>
        </Header>
        {/*중복 확인 버튼*/}
        <InputDiv>
          <InputType
            type="text"
            name="name"
            placeholder="닉네임"
            {...register("name", {
              required: "닉네임을 입력해주세요.",
            })}
          />
        </InputDiv>
        <InputDiv>
          <InputType
            type="email"
            name="email"
            placeholder="email"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          <OverlapBtn id="emailCheck" onClick={handleEmail}>
            중복확인
          </OverlapBtn>
        </InputDiv>
        {/* // icons-check 들어가는 부분 */}
        <InputDiv>
          <InputType
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={handlePw}
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              pattern: {
                value:
                  "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]{10,}",
                message: "비밀번호 조건을 충족하지 못했습니다.",
              },
            })}
          />
        </InputDiv>
        {/* // icons-check 들어가는 부분 */}
        <InputDiv>
          <InputType
            type="password"
            name="passwordCheck"
            placeholder="비밀번호 확인"
            onChange={handlePwCorrect}
            {...register("passwordCheck", {
              required: "비밀번호가 일치하지 않습니다.",
            })}
          />
        </InputDiv>

        <InputDiv>
          <InputType
            type="number"
            name="phoneNum"
            maxLength="11"
            pattern="[0-9]+"
            placeholder="전화번호"
            {...register("phoneNumber", {
              required: "전화번호를 입력해주세요.",
            })}
          />
        </InputDiv>
        <LoginButton type="submit" disabled={isSubmitting}>
          다음
        </LoginButton>
      </CommonForm>
    </>
  );
};

export default Register;

// 1. 추후에 api에 따라 닉네임과 전화번호 name 수정 필요
// 2. 입력칸이 모두 채워지지 않으면
