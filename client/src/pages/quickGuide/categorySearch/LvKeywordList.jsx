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
import _ from "lodash";
import AccessToken from "@hoc/AccessToken";
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
  accessToken,
  setFillStar,
}) => {
  const [sliceValue, setSliceValue] = useState({ minValue: 0, maxValue: 50 });
  const navigate = useNavigate();

  useEffect(() => {
    setSliceValue((prev) => ({
      minValue: prev.maxValue,
      maxValue: prev.maxValue + 50,
    }));
  }, [page]);

  const handleFillStar = (_id, category, accessToken, clipKeyword) => {
    setFillStar((prev) => !prev);
    if (checkClip(clipKeyword, _id)) {
      deleteKeywordFunc(_id, category, accessToken, clipKeyword);
    } else {
      createKeywordFunc(_id, category, accessToken);
    }
  };

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
                          handleFillStar(
                            item._id,
                            category,
                            accessToken,
                            clipKeyword
                          );
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
                            handleFillStar(
                              item._id,
                              category,
                              accessToken,
                              clipKeyword
                            );
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
      )}
    </>
  );
};

export default AccessToken(memo(LvKeywordList));
