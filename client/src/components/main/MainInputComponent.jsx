import React from "react";
import { GlobalMoyaLogo } from "@styles/svgIcon";
import { MainContainer } from "@styles/containerStyle";
import { useNavigate } from "react-router-dom";
const MainInputComponent = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <GlobalMoyaLogo />
      <input
        type="text"
        onFocus={() => {
          navigate(`/search`);
        }}
      />
    </MainContainer>
  );
};

export default MainInputComponent;
