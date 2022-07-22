import React from "react";
import {
  Footer,
  TermsDiv,
  CompanyDiv,
  H3Tag,
  CopyRightDiv,
  SNSGroup,
} from "@styles/footerStyle";
import { IconsFacebook, IconsInstagram, IconsKakaotalk } from "@styles/svgIcon";
const FooterComponent = () => {
  return (
    <Footer>
      <TermsDiv>
        <h2>이용약관 &nbsp;&nbsp;| &nbsp;&nbsp;개인정보처리방침</h2>
      </TermsDiv>
      <CompanyDiv>
        <H3Tag>
          <strong>주식회사 시스메틱 </strong> <br />
          <strong> 사업자 등록번호</strong>&nbsp;&nbsp; 711-86-00050 <br />
          <strong>통신판매업신고</strong>&nbsp;&nbsp; 제2020-서울영등포-2864호
          <br />
          <strong> 주소</strong>&nbsp;&nbsp; 서울시 영등포구 당산로41길 11, E동
          1202호
          <br />
          <strong>연락처</strong>&nbsp;&nbsp; +82-2-6338-1880 <br />
          <strong>이메일</strong>&nbsp;&nbsp; help@moya.ai
        </H3Tag>
      </CompanyDiv>
      <CopyRightDiv>
        <div>
          Copyrightⓒ 2022 Sysmetic co Ltd <br /> All rights reserved.
        </div>
        <SNSGroup>
          <IconsFacebook />
          <IconsInstagram />
          <IconsKakaotalk />
        </SNSGroup>
      </CopyRightDiv>
    </Footer>
  );
};

export default FooterComponent;
