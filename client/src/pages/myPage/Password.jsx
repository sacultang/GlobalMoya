import React from "react";
import {
  Container,
  Main,
  CurrentPassword,
  PasswordField,
  PasswordFieldHelpText,
  NewPassword,
  ApplyBtn,
} from "@styles/myPage/Password";
import { useNavigate } from "react-router-dom";
import { BackArrow } from "@styles/svgIcon";

const Password = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <div className="h3div">
          <BackArrow onClick={() => navigate(-1)} />
          <h3>비밀번호 재설정</h3>
        </div>
      </Main>

      <CurrentPassword>
        <div>현재 비밀번호</div>
        <PasswordField
          type="password"
          minlength="10"
          maxlength="30"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{10,30}$"
          placeholder="현재 비밀번호를 입력해주세요"
          required
        ></PasswordField>
      </CurrentPassword>

      <NewPassword>
        <div>새로운 비밀번호</div>
        <PasswordField
          type="password"
          maxlength="30"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{10,30}$"
          placeholder="변경할 비밀번호를 입력해주세요"
          required
        ></PasswordField>

        <PasswordField
          type="password"
          maxlength="30"
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_-+=[]{}~?:;`|/]).{10,30}$"
          placeholder="비밀번호 확인"
          required
        ></PasswordField>

        <PasswordFieldHelpText>
          <p>
            영문 대/소문자 각각 1자 이상, 특수문자 또는 숫자 포함
            <br /> 10자 이상을 입력해주세요.
          </p>
        </PasswordFieldHelpText>
      </NewPassword>

      <ApplyBtn type="submit">변경하기</ApplyBtn>
    </Container>
  );
};

export default Password;
