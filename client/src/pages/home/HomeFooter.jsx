import React from "react";
import { Link } from "react-router-dom";
import {
  FooterTag,
  TermsDiv,
  CompanyDiv,
  H2Tag,
  CopyRightDiv,
  SNSGroup,
} from "@styles/home/footer";
import { IconsFacebook, IconsInstagram, IconsKakaotalk } from "@styles/svgIcon";
const HomeFooter = () => {
  return (
    <FooterTag>
      <TermsDiv>
        <h2>
          <Link to="/servicepolicy">
            <span>이용약관 &nbsp;&nbsp;</span>
          </Link>
          |
          <Link to="/personalpolicy">
            <span> &nbsp;&nbsp;개인정보처리방침</span>
          </Link>
        </h2>
      </TermsDiv>
      <CompanyDiv>
        <H2Tag>
          <strong>주식회사 시스메틱 </strong> <br />
          <strong> 사업자 등록번호</strong>&nbsp;&nbsp; 711-86-00050 <br />
          <strong>통신판매업신고</strong>&nbsp;&nbsp; 제2020-서울영등포-2864호
          <br />
          <strong> 주소</strong>&nbsp;&nbsp; 서울시 영등포구 당산로41길 11, E동
          1202호
          <br />
          <strong>연락처</strong>&nbsp;&nbsp; +82-2-6338-1880 <br />
          <strong>이메일</strong>&nbsp;&nbsp; help@moya.ai
        </H2Tag>
      </CompanyDiv>
      <CopyRightDiv>
        <div>
          Copyrightⓒ 2022 Sysmetic co Ltd <br /> All rights reserved.
        </div>
        <SNSGroup>
          <a
            href="https://www.facebook.com/MOYAAI/"
            target="_blank"
            rel="noopener noreferrer"
            title="moya facebook"
          >
            <IconsFacebook />
          </a>
          <a
            href="https://www.instagram.com/moya.ai/?hl=ko"
            target="_blank"
            rel="noopener noreferrer"
            title="moya instagram"
          >
            <IconsInstagram />
          </a>
          <a
            href="https://pf.kakao.com/_sRNkxl"
            target="_blank"
            rel="noopener noreferrer"
            title="moya kakaotalk"
          >
            <IconsKakaotalk />
          </a>
        </SNSGroup>
      </CopyRightDiv>
    </FooterTag>
  );
};

export default HomeFooter;
