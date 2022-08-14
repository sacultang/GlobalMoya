import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  keywordContentRequest,
  fetchSearchNews,
} from "@redux/searchFilterSlice";

import {
  MainKeywordContainerDiv,
  MainKeywordDiv,
  MainKeywordLi,
  MainKeywordUl,
  MainKeywordContentDiv,
  MainKeywordActiveContentDiv,
  EditIconDiv,
  EditIconCircle,
} from "@styles/main/mainKeywordList";
import { ErrorMsgP } from "@styles/common/errorMsg";
import { toggleEditAction } from "@redux/buttonSlice";
import NewsCard from "@components/NewsCard";
import Spinner from "@components/common/Spinner";
import AccessToken from "@hoc/AccessToken";

const MainKeywordList = ({ view, apply, accessToken }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [toggleTabState, setToggleTabState] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType,
    paramValue,
    exchange,
  } = useSelector((state) => state.searchFilterSlice);

  // toggle btn
  const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);

  const { keywordList, keyTypeList, paramValueList, exchangeList } =
    useSelector((state) => state.keywordConnectedSlice);

  const toggleModal = () => {
    dispatch(toggleEditAction(!showEditBtn));
    navigate("/main/edit/keyword");
  };

  const toggleTab = async (index) => {
    setToggleTabState(index);
    await dispatch(
      keywordContentRequest([
        keyTypeList[index],
        paramValueList[index],
        exchangeList[index],
      ])
    );
  };

  const getDatas = async () => {
    setIsLoading(false);
    const queryParams = {
      timeFilter,
      mediaType,
      language,
      orderBy,
      keyType,
      paramValue,
      exchange,
    };

    await dispatch(fetchSearchNews({ queryParams, accessToken })).then(
      (response) => {
        let payload = response.payload;
        if (
          payload === undefined ||
          payload.newsList.length === 0 ||
          payload.status > 200
        ) {
          setErrorMsg("결과가 없습니다.");
          setIsLoading(true);
        } else {
          setErrorMsg("");
          setNewsList(payload.newsList);
          setPageToken(payload.nextPageToken);
          setIsLoading(true);
        }
      }
    );
  };

  useEffect(() => {
    navigate(
      `/main?timeFilter=${timeFilter}&mediaType=${mediaType}&language=${language}&orderBy=${orderBy}&keyType=${keyType}&paramValue=${paramValue}&exchange=${exchange}`
    );
  }, [timeFilter, mediaType, language, orderBy, keyType, paramValue, exchange]);

  // 첫 실행
  useEffect(() => {
    dispatch(
      keywordContentRequest([
        keyTypeList[0],
        paramValueList[0],
        exchangeList[0],
      ])
    );
    getDatas();

    return () => {
      console.log("unMounted 카드");
    };
  }, []);

  // 탭 클릭 시
  useEffect(() => {
    if (toggleTabState === 0) {
      getDatas();
    } else {
      getDatas();
    }

    return () => {
      console.log("clear time");
    };
  }, [toggleTabState, timeFilter, mediaType, orderBy]);

  return (
    <>
      <MainKeywordContainerDiv>
        <MainKeywordDiv>
          <MainKeywordUl>
            {keywordList.map((keyword) => {
              const { name, _id, id } = keyword;
              return (
                <MainKeywordLi
                  key={_id + name}
                  toggleTab={keyword.paramValue === paramValue}
                  onClick={() => toggleTab(id)}
                >
                  {name.length > 10 ? name.slice(0, 9) + "..." : name}
                </MainKeywordLi>
              );
            })}
          </MainKeywordUl>
          <EditIconDiv onClick={toggleModal}>
            <EditIconCircle />
            <EditIconCircle />
            <EditIconCircle marginRight="0px" />
          </EditIconDiv>
        </MainKeywordDiv>
        <MainKeywordContentDiv>
          {!isLoading ? (
            <Spinner />
          ) : errorMsg ? (
            <ErrorMsgP>{errorMsg}</ErrorMsgP>
          ) : (
            keywordList.map((keyword) => {
              const { _id, id, keyType } = keyword;
              return (
                <MainKeywordActiveContentDiv
                  key={_id + keyType}
                  toggleContent={toggleTabState === id}
                >
                  <NewsCard
                    key={id}
                    view={view}
                    apply={apply}
                    newsList={newsList}
                  />
                </MainKeywordActiveContentDiv>
              );
            })
          )}
        </MainKeywordContentDiv>
      </MainKeywordContainerDiv>
    </>
  );
};

export default AccessToken(MainKeywordList);
