import React from "react";
import { GlobalMoyaLogo, SearchIcon } from "@styles/svgIcon";
import { HomeContainer } from "@styles/home/homeContainer";
import { useNavigate } from "react-router-dom";
import {
  HomeInputTag,
  HomeInputWrap,
  SearchIconWrap,
} from "@styles/home/homeInput";

const HomeInput = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <GlobalMoyaLogo />
      <HomeInputWrap
        onFocus={() => {
          navigate("/main");
        }}
      >
        <HomeInputTag placeholder="뉴스 키워드를 검색해보세요" />
        <SearchIconWrap>
          <SearchIcon />
        </SearchIconWrap>
      </HomeInputWrap>
    </HomeContainer>
  );
};

export default HomeInput;
