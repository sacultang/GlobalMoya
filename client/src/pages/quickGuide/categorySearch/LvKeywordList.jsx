import React, { useState, useEffect, memo } from "react";
import { SearchIcon, StarIcon } from "@styles/svgIcon";
import {
  KeywordLi,
  KeywordH4,
  KeywordUL,
  KeywordWrap,
  IconWrap,
} from "@styles/quickGuide/categorySearch/LvKeywordList";
import Spinner from "@components/common/Spinner";
import AddKeywordModal from "@components/addKeywordModal/AddKeywordModal";
import _ from "lodash";

import { checkClip } from "@util/filterMasterFunc";
import { deleteKeywordFunc, createKeywordFunc } from "@util";
import { useNavigate } from "react-router-dom";
const LvKeywordList = ({
  dataList,
  myRef,
  page,
  loading,
  category,
  clipKeyword,
  setFillStar,
  resultBoolean,
  setResultBoolean,
}) => {
  const [sliceValue, setSliceValue] = useState({ minValue: 0, maxValue: 50 });
  const [limitCode, setLimitCode] = useState(0);
  const [resMsg, setResMsg] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSliceValue((prev) => ({
      minValue: prev.maxValue,
      maxValue: prev.maxValue + 50,
    }));
  }, [page]);

  const handleFillStar = async (_id, category, clipKeyword) => {
    setFillStar((prev) => !prev);
    if (checkClip(clipKeyword, _id)) {
      await deleteKeywordFunc(_id, category, clipKeyword);
      setLimitCode(0);
    } else {
      const res = await createKeywordFunc(_id, category, clipKeyword);

      if (res.code === 2002) {
        setLimitCode(res.code);
        setResMsg(res.message);
      } else {
        setLimitCode(0);
        setResMsg(res.data.msg);
      }
      setResultBoolean(true);
    }
  };
  // useEffect(() => {
  //   const msgTimeOut = setTimeout(() => {
  //     setResultBoolean(false);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(msgTimeOut);
  //   };
  // }, [clipKeyword]);
  useEffect(() => {
    setFillStar((prev) => !prev);
  }, [resMsg]);
  const handleLocationState = (paramValue, category, exchange) => {
    navigate(`/main/keywordsearch/${paramValue}`, {
      state: { paramValue, category, exchange },
    });
  };
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
            {dataList &&
              _.map(
                dataList.slice(
                  0,
                  dataList.length > 100 ? sliceValue.maxValue : dataList.length
                ),
                (item, idx) => {
                  if (item.length === idx + 1) {
                    return (
                      <KeywordLi ref={myRef} key={item._id}>
                        <SearchIcon />
                        <KeywordWrap>
                          <KeywordH4
                            onClick={() => {
                              handleLocationState(
                                item.paramValue,
                                category,
                                item.exchange
                              );
                            }}
                          >
                            {item.name} ({item.paramValue})
                          </KeywordH4>
                        </KeywordWrap>
                        <StarIcon
                          onClick={() => {
                            handleFillStar(item._id, category, clipKeyword);
                          }}
                          $clip={checkClip(clipKeyword, item._id)}
                        />
                      </KeywordLi>
                    );
                  } else {
                    return (
                      <KeywordLi ref={myRef} key={item._id}>
                        <IconWrap>
                          <SearchIcon />
                        </IconWrap>
                        <KeywordWrap>
                          <KeywordH4
                            onClick={() => {
                              handleLocationState(
                                item.paramValue,
                                category,
                                item.exchange
                              );
                            }}
                          >
                            {item.name} ({item.paramValue})
                          </KeywordH4>
                        </KeywordWrap>
                        <IconWrap star>
                          <StarIcon
                            onClick={() => {
                              handleFillStar(item._id, category, clipKeyword);
                            }}
                            $clip={checkClip(clipKeyword, item._id)}
                          />
                        </IconWrap>
                      </KeywordLi>
                    );
                  }
                }
              )}
          </KeywordUL>
        </>
      )}
    </>
  );
};

export default memo(LvKeywordList);
