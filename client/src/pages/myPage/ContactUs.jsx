import React from "react";
import {
  ContactContainer,
  Header,
  MessageSubject,
  Message,
  Email,
  Complete,
} from "@styles/myPage/ContactUs";
import {
  CheckAllItems,
  Check,
  Checklabel,
} from "@styles/loginRegister/register/registerPolicy";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BackArrow, LearnMore } from "@styles/svgIcon";

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <ContactContainer>
      <Header>
        <div className="h3div">
          <BackArrow onClick={() => navigate(-1)} />
          <h3>문의하기</h3>
        </div>
      </Header>
      <MessageSubject
        type="text"
        maxLength="20"
        placeholder="제목을 입력해주세요. (20자 이내)"
        required
      ></MessageSubject>
      <Message
        type="text"
        placeholder={`문의하실 내용을 입력해주세요.\n확인 절차에 따라 시일이 걸릴 수 있습니다.`}
        required
      ></Message>
      <Email
        type="email"
        maxLength="30"
        placeholder="답변 받을 이메일 주소를 입력해주세요."
        required
      ></Email>
      <Check contact>
        <input type="checkbox" id="policy" />
        <Checklabel contact htmlFor="policy" className="container">
          <span className="checkmark"></span>
          <CheckAllItems contact>개인정보 수집, 이용 동의 (필수)</CheckAllItems>
          <Link to="/personalpolicy">
            <LearnMore />
          </Link>
        </Checklabel>
        <input type="checkbox" id="service" />
        <Checklabel contact htmlFor="service" className="container">
          <span className="checkmark"></span>
          <CheckAllItems contact>서비스 이용약관 동의 (필수)</CheckAllItems>
          <Link to="/servicepolicy">
            <LearnMore />
          </Link>
        </Checklabel>
      </Check>
      <Complete>완료</Complete>
    </ContactContainer>
  );
};

export default ContactUs;
