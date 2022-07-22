import React from "react";
import { DefaultHeader } from "@styles/headerStyles";
import { DefaultButton } from "@styles/button";
import { Profile } from "@styles/svgIcon";
const MainHeaderComponent = () => {
  return (
    <>
      <DefaultHeader>
        <DefaultButton orange>로그인</DefaultButton>
        <DefaultButton>구독</DefaultButton>
        <Profile />
      </DefaultHeader>
    </>
  );
};

export default MainHeaderComponent;
