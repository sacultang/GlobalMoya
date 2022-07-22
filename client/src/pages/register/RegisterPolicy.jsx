import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@styles/loginRegister/container";
import { Header, BackSpace, TitleHeader } from "@styles/loginRegister/header";
import {
  TermsAndConditions,
  CheckAll,
  CheckAllItems,
  Check,
  Instruction,
  CustomerAgreement,
  ImageContent,
  Checklabel,
  SignUp,
} from "@styles/loginRegister/register/registerPolicy";
import "../../index.css";
import LearnMore from "../../assets/images/LearnMore.svg";
import { Link } from "react-router-dom";

const data = [
  {
    id: "privacy",
    data: "개인정보 수집 및 이용약관에 동의 (필수)",
    path: "/personalpolicy",
  },
  {
    id: "service",
    data: "서비스 이용약관 동의 (필수)",
    path: "/servicepolicy",
  },
  {
    id: "personal",
    data: "개인정보 처리방침 동의 (필수)",
    path: "/personalpolicy",
  },
  { id: "event", data: "이벤트 및 혜택 안내 수신동의 (선택)" },
];

const RegisterPolicy = (props) => {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const navigate = useNavigate();

  const allAgreeHandler = (checked) => {
    console.log(checked);
    setIsAllChecked(!isAllChecked);
    const checkedItemArray = [];
    if (checked) {
      data.forEach((data) => checkedItemArray.push(data.id));
      setCheckedItems(checkedItemArray);
    } else if (
      (!checked && checkedItems.includes("privacy")) |
      (!checked && checkedItems.includes("service")) |
      (!checked && checkedItems.includes("personal"))
    ) {
      setCheckedItems([]);
    }
  };
  const agreeHandler = (checked, value) => {
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else if (!checked && checkedItems.includes(value)) {
      setCheckedItems(checkedItems.filter((el) => el !== value));
    }
  };

  // 가입 버튼 핸들러

  const handleClick = () => {
    if (
      checkedItems.includes("privacy") &&
      checkedItems.includes("service") &&
      checkedItems.includes("personal")
    ) {
      props.setRegisterPage("onInput");
    }
  };

  return (
    <Container>
      <Header>
        <BackSpace
          onClick={() => {
            navigate("/login");
          }}
        />
        <TitleHeader>회원가입</TitleHeader>
      </Header>
      <TermsAndConditions>
        <Instruction>서비스 이용 약관에 동의해 주세요.</Instruction>
        <CustomerAgreement>
          <CheckAll>
            <Check>
              <input
                type="checkbox"
                id="agreement"
                checked={checkedItems.length >= 4}
                onChange={(e) => allAgreeHandler(e.currentTarget.checked)}
              />
              <Checklabel htmlFor="agreement" className="container">
                <span className="checkmark"></span>
                <CheckAllItems>전체 동의</CheckAllItems>
              </Checklabel>
            </Check>
          </CheckAll>
          {data.map((item) => (
            <Check key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                checked={checkedItems.includes(item.id)}
                value={item.id}
                onChange={(e) =>
                  agreeHandler(e.currentTarget.checked, e.target.value)
                }
              />
              <Checklabel htmlFor={item.id} className="container">
                <span className="checkmark"></span>
                <CheckAllItems>{item.data}</CheckAllItems>
                <Link to={`${item.path}`}>
                  <ImageContent src={LearnMore} />
                </Link>
              </Checklabel>
            </Check>
          ))}
        </CustomerAgreement>
        <SignUp onClick={handleClick}>가입하기</SignUp>
      </TermsAndConditions>
    </Container>
  );
};

export default RegisterPolicy;
