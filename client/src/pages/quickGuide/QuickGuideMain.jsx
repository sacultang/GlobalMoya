import React from "react";
import QuickGuideHeader from "./QuickGuideHeader";
import QuickContent from "./QuickContent";
import { DefaultContainer } from "@styles/common/container";
const QuickGuideMain = () => {
  return (
    <DefaultContainer>
      <QuickGuideHeader />
      <QuickContent />
    </DefaultContainer>
  );
};

export default QuickGuideMain;
