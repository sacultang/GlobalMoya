import React, { useState, useEffect } from "react";
import HightLightText from "@components/HightLightText";
import Spinner from "@components/common/Spinner";
import AddKeywordModal from "@components/addKeywordModal/AddKeywordModal";
import { filterValue } from "@util/filterMasterFunc";
import Highlighter from "react-highlight-words";
import _ from "lodash";
import {
  HighLightLi,
  KeywordUL,
  IconWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import { colors } from "@styles/theme";
import { deleteKeywordFunc, createKeywordFunc, checkClip } from "@util";

const HiglightKeyword = ({
  dataList,
  keyword,
  loading,
  category,
  clipKeyword,
  setFillStar,
  resultBoolean,
  setResultBoolean,
}) => {
  const [filterKeyword, setFilterKeyword] = useState([]);
  const [limitCode, setLimitCode] = useState(0);
  const [resMsg, setResMsg] = useState([]);
  useEffect(() => {
    const data = filterValue(dataList, keyword);
    setFilterKeyword(data);
  }, [keyword]);

  const handleFillStar = async (_id, category, clipKeyword) => {
    setFillStar((prev) => !prev);
    if (checkClip(clipKeyword, _id)) {
      setLimitCode(0);
      deleteKeywordFunc(_id, category, clipKeyword);
    } else {
      const res = await createKeywordFunc(_id, category, clipKeyword);
      if (res.code === 2002) {
        setLimitCode(res.code);
        setResMsg(res.message);
      } else {
        setResMsg(res.data.msg);
      }
      setResultBoolean(true);
    }
  };
  useEffect(() => {
    setFillStar((prev) => !prev);
  }, [resMsg]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AddKeywordModal
            resultBoolean={resultBoolean}
            limitCode={limitCode}
          />
          <KeywordUL>
            {_.map(filterKeyword.slice(0, 40), (item, idx) => (
              <HighLightLi key={item._id}>
                <IconWrap>
                  <SearchIcon />
                </IconWrap>
                <HightLightText
                  paramValue={item.paramValue}
                  category={category}
                  exchange={item.exchange}
                >
                  <Highlighter
                    textToHighlight={item.name}
                    searchWords={[keyword]}
                    highlightStyle={{
                      color: `${colors.pointOrange200}`,
                      backgroundColor: "transparent",
                    }}
                  />{" "}
                  (
                  <Highlighter
                    textToHighlight={item.paramValue}
                    searchWords={[keyword]}
                    highlightStyle={{
                      color: `${colors.pointOrange200}`,
                      backgroundColor: "transparent",
                    }}
                  />
                  )
                </HightLightText>
                <IconWrap star>
                  <StarIcon
                    onClick={() => {
                      handleFillStar(item._id, category, clipKeyword);
                    }}
                    $clip={checkClip(clipKeyword, item._id)}
                  />
                </IconWrap>
              </HighLightLi>
            ))}
          </KeywordUL>
        </>
      )}
    </>
  );
};

export default HiglightKeyword;
