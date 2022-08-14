import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { MainHeader, SideHeader } from "@styles/main/mainPageHeader";
import {
  NaviWrap,
  NaviGo,
  Navispan,
  FilterBG,
} from "@styles/naviStyle/naviWrap";

import Hamburger from "@components/common/Hamburger";
import MoyaLogo from "@components/MoyaLogo";
import { MoreIcon } from "../../styles/svgIcon";
import { logOutFunc } from "@api/loginApi";

import { toggleEditAction } from "@redux/buttonSlice";
import { toggleNavigation } from "@redux/modalSlice";
import { userLogoutAction } from "@redux/user/userSlice";

const Header = ({ user }) => {
  const dispatch = useDispatch();
  const showNavi = useSelector((state) => state.modalSlice.showSideNavi);
  const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);
  const navigate = useNavigate();
  const toggleNavi = () => {
    dispatch(toggleNavigation(!showNavi));
  };
  const handleBG = () => {
    dispatch(toggleNavigation(!showNavi));
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    navigate("/");
    logOutFunc();
    dispatch(userLogoutAction());
  };
  const toggleModal = () => {
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main/edit/keyword");
  };
  return (
    <>
      {user ? (
        <NaviWrap showNavi={showNavi}>
          <SideHeader>
            <MoyaLogo />
          </SideHeader>
          <a
            href="https://watch.moya.ai/global"
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기"
          >
            <NaviGo>
              AI 글로벌 주식 뉴스
              <MoreIcon />
            </NaviGo>
          </a>
          <Navispan />
          <Link to="/scrap">
            <NaviGo>
              스크랩 뉴스
              <MoreIcon />
            </NaviGo>
          </Link>
          <NaviGo onClick={toggleModal}>
            키워드 관리
            <MoreIcon />
          </NaviGo>
          <Navispan />
          <Link to="/mypagemain">
            <NaviGo>
              마이페이지
              <MoreIcon />
            </NaviGo>
          </Link>
          <NaviGo onClick={handleLogout}>
            로그아웃
            <MoreIcon />
          </NaviGo>
          <Navispan />
        </NaviWrap>
      ) : (
        <NaviWrap showNavi={showNavi}>
          <SideHeader>
            <MoyaLogo />
          </SideHeader>
          <a
            href="https://watch.moya.ai/global"
            target="_blank"
            rel="noopener noreferrer"
            title="새창으로 열기"
          >
            <NaviGo>
              AI 글로벌 주식 뉴스
              <MoreIcon />
            </NaviGo>
          </a>
          <Navispan />
          <NaviGo onClick={handleLogin}>
            로그인
            <MoreIcon />
          </NaviGo>
          <Navispan />
        </NaviWrap>
      )}

      <FilterBG showNavi={showNavi} onClick={handleBG} />
      <MainHeader>
        <Hamburger click={toggleNavi} main></Hamburger>
        <MoyaLogo mainHeader={"mainHeader"} />
      </MainHeader>
    </>
  );
};

export default Header;
