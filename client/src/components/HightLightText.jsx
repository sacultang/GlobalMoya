import React from "react";
import {
  KeywordH4,
  KeywordWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import { useNavigate } from "react-router-dom";
const HightLightText = ({ paramValue, category, exchange, children }) => {
  const navigate = useNavigate();
  const handleLocationState = (paramValue, category, exchange) => {
    // console.log(exchange);
    navigate(`/main/keywordsearch/${paramValue}`, {
      state: { paramValue, category, exchange },
    });
  };
  return (
    <KeywordWrap>
      <KeywordH4
        onClick={() => handleLocationState(paramValue, category, exchange)}
      >
        {children}
      </KeywordH4>
    </KeywordWrap>
  );
};

export default HightLightText;
