import React from "react";
import { HamburgerWrap, HamburgerBar } from "@styles/common/button/hamburger";
const Hamburger = ({ click, main }) => {
  return (
    <HamburgerWrap onClick={(e) => click && click(e)} main={main}>
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </HamburgerWrap>
  );
};

export default Hamburger;
