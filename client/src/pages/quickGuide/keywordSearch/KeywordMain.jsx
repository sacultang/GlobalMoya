import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DefaultContainer } from "@styles/common/container";
import QuickGuideHeader from "../QuickGuideHeader";
import KeywordList from "./KeywordList";

import { isLoading } from "@redux/categorySlice";
import { getKeywords } from "@api/keywordListApi";
import ScrollTop from "@components/ScrollTop";
import AccessToken from "../../../hoc/AccessToken";
const KeywordMain = ({ accessToken }) => {
  const [reports, setReports] = useState([]);
  const [reportsLength, setReportsLength] = useState(0);
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const loading = useSelector((state) => state.categorySlice.loading);
  const [filterId, setFilterId] = useState({ id: "", category: "" });
  const [result, setResult] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const fetch = async () => {
    try {
      const reportsData = await getKeywords(accessToken);
      if (reportsData.length > 0) {
        setReports(reportsData);
        setReportsLength(reports.length);
        await dispatch(isLoading(false));
      }
    } catch (e) {
      console.log(e);
    } finally {
      await dispatch(isLoading(false));
    }
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    fetch();
  }, [filterId, result, keyword]);
  return (
    <DefaultContainer>
      <QuickGuideHeader keyword={keyword} inputRef={inputRef} />
      <KeywordList
        keyword={keyword}
        inputRef={inputRef}
        reports={reports}
        loading={loading}
        filterId={filterId}
        setFilterId={setFilterId}
        setResult={setResult}
        reportsLength={reportsLength}
      />
      <ScrollTop />
    </DefaultContainer>
  );
};

export default AccessToken(KeywordMain);
