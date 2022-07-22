import { useState, useCallback, useEffect } from "react";
import { getMasterData } from "@api/masterApi";
import { filterValue } from "../util/filterMasterFunc";
import _ from "lodash";
const MasterValueHook = (searchWord) => {
  const [filteredResult, setFilteredResult] = useState([]);
  const [masterData, setMasterData] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const data = await getMasterData();
      setMasterData(data);
    };
    fetch();
  }, []);

  let resultParamValue = new Set();

  const getParamValueFunc = useCallback(() => {
    Object.keys(masterData).forEach((key) => {
      // console.log(key);
      let dataArr = masterData[key];
      let resultValue = filterValue(dataArr, searchWord);

      resultParamValue = [
        ...resultParamValue,
        {
          mainCate: key,
          filtered: resultValue,
        },
      ];
      setFilteredResult(resultParamValue);
    });
  }, [searchWord]);

  useEffect(() => {
    getParamValueFunc();
    if (searchWord.length <= 0) {
      setFilteredResult([]);
    }
  }, [searchWord]);

  const generateKey = useCallback((pre) => {
    return `${pre}_${new Date().getTime()}`;
  }, []);

  return { filteredResult, generateKey };
};

export default MasterValueHook;
