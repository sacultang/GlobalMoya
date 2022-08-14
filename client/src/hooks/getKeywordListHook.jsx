import React, { useEffect, useState } from "react";
import { getKeywords } from "../api/keywordListApi";

const getKeywordListHook = (category) => {
  const [hasKeyword, setHasKeyword] = useState([]);
  const [reports, setReports] = useState([]);
  useEffect(() => {
    // fetch();
    console.log(category);
  }, [category]);
  const fetch = async () => {
    const response = await getKeywords();
    console.log(response);
    // if (response.reports.length > 0) {
    //   setReports(response.reports);
    // }
    // if (reports.length > 0) {
    //   const filterKeyword = reports.filter((item) => item.keyType === category);
    //   setHasKeyword(filterKeyword);
    // }
  };

  return { hasKeyword };
};

export default getKeywordListHook;
