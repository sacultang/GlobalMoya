import React from "react";
import MainInputComponent from "./MainInputComponent";
import MainHeaderComponent from "./MainHeaderComponent";
import { DefaultContainer } from "@styles/containerStyle";

const MainPage = () => {
  return (
    <DefaultContainer>
      <MainHeaderComponent />
      <MainInputComponent />
    </DefaultContainer>
  );
};

export default MainPage;
