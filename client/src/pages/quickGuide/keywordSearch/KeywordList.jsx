import React, { memo, useState, useEffect, useCallback } from "react";
import MasterValueHook from "@hooks/MasterValueHook";
import {
  KeywordUL,
  HighLightLi,
  IconWrap,
  NoResults,
  ResultsUL,
  CategoryH4,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import _ from "lodash";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import Highlighter from "react-highlight-words";
import Spinner from "@components/common/Spinner";
import HightLightText from "@components/HightLightText";
import { colors } from "@styles/theme";
import { changeCase } from "@util/changeCase";
import { deleteKeywordFunc, createKeywordFunc } from "@util";
import AddKeywordModal from "@components/addKeywordModal/AddKeywordModal";
const KeywordList = ({
  keyword,
  loading,
  setFilterId,
  filterId,
  reports,
  setResult,
}) => {
  const { filteredResult, generateKey } = MasterValueHook(keyword);
  const [resultBoolean, setResultBoolean] = useState(false);
  const [limitCode, setLimitCode] = useState(0);
  const checkKeyword = (reports, id, category) => {
    const result = reports.some(
      (item) => item._id === id && item.keyType === category
    );
    return result;
  };

  useEffect(() => {
    setResult(false);
    const msgTimeOut = setTimeout(() => {
      setResultBoolean(false);
    }, 2000);
    return () => {
      clearTimeout(msgTimeOut);
    };
  }, [reports]);

  const handleFillStar = useCallback(
    async (_id, category) => {
      setFilterId({ id: _id, category });
      if (checkKeyword(reports, _id, category)) {
        await deleteKeywordFunc(_id, category, reports);
        setLimitCode(0);
        setResult(true);
      } else {
        const res = await createKeywordFunc(_id, category, reports);
        console.log(res);
        if (res.code === 2002) {
          setLimitCode(res.code);
        } else {
          setLimitCode(0);
        }
        setResult(true);
        setResultBoolean(true);
      }
    },
    [filterId, reports]
  );

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
            {filteredResult &&
              _.map(filteredResult, (item) => {
                return (
                  <>
                    <HighLightLi key={generateKey(item.mainCate)}>
                      <CategoryH4>{changeCase(item.mainCate)}</CategoryH4>
                    </HighLightLi>

                    <ResultsUL>
                      {item.filtered.length > 0 ? (
                        _.map(item.filtered.slice(0, 20), (value, idx) => {
                          return (
                            <>
                              <HighLightLi key={generateKey(value._id + idx)}>
                                <IconWrap>
                                  <SearchIcon />
                                </IconWrap>
                                <HightLightText
                                  paramValue={value.paramValue}
                                  category={item.mainCate}
                                  exchange={value.exchange}
                                >
                                  <Highlighter
                                    textToHighlight={value.name}
                                    searchWords={[keyword]}
                                    highlightStyle={{
                                      color: `${colors.pointOrange200}`,
                                      backgroundColor: "transparent",
                                    }}
                                  />{" "}
                                  (
                                  <Highlighter
                                    textToHighlight={value.paramValue}
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
                                    id={value._id}
                                    onClick={() => {
                                      handleFillStar(value._id, item.mainCate);
                                    }}
                                    $clip={checkKeyword(
                                      reports,
                                      value._id,
                                      item.mainCate
                                    )}
                                  />
                                </IconWrap>
                              </HighLightLi>
                            </>
                          );
                        })
                      ) : (
                        <HighLightLi>
                          <NoResults>검색 결과가 없습니다.</NoResults>
                        </HighLightLi>
                      )}
                    </ResultsUL>
                  </>
                );
              })}
          </KeywordUL>
        </>
      )}
    </>
  );
};

export default memo(KeywordList);
