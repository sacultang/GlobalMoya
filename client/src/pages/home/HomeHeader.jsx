import React from "react";
import { DefaultHeader } from "@styles/common/DefaultHeader";
import { DefaultButton } from "@styles/common/button/button";
import { ProfileIcon } from "@styles/svgIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const HomeHeader = () => {
  const isLogin = useSelector((state) => state.user.userLogin);

  return (
    <>
      <DefaultHeader>
        {isLogin ? (
          <>
            <Link to="/subscribe" style={{ marginRight: 15 }}>
              <DefaultButton>구독</DefaultButton>
            </Link>
            <Link to="/mypagemain">
              <ProfileIcon />
            </Link>
          </>
        ) : (
          <Link to="/login">
            <DefaultButton orange>로그인</DefaultButton>
          </Link>
        )}
      </DefaultHeader>
    </>
  );
};

export default HomeHeader;
