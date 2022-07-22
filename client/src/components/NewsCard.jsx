import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  MainContent,
  SubContent,
  CardFooter,
  ImageContent,
  Abstract,
  CardHeader,
  Tickers,
  NoResultTickers,
} from "@styles/newsCard/cardStyles";
import {
  ScrapIcon,
  TranslateIconKo,
  ShareIcon,
  ExpandMoreIcon,
  TranslateIconEn,
} from "@styles/svgIcon";
import globalMOYAPremiumSvg from "@assets/globalMOYA.svg";
import { differenceDayFuncTwo } from "../util/dateFunc";
import { translateApi } from "../api/translateApi";
import ErrorMsg from "./ErrorMsg";
import { bookmarkAll } from "../api/bookmarkApi";
import { toggleScrapMoveBtn } from "@redux/modalSlice";
import { addNewsID } from "../redux/reducer/scrapNewsSlice";
import { useDispatch } from "react-redux";
import _ from "lodash";
const NewsCard = ({ view, apply, newsList, errorMsg, lastElementRef }) => {
  const [scrap, setScrap] = useState(false);
  const [open, setOpen] = useState({});
  const [trakingId, setTrakingId] = useState({});
  const [translate, setTranslate] = useState([]);
  const [changeTrans, setChangeTrans] = useState(true);
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);
  const dispatch = useDispatch();
  const showScrapMoveBtn = useSelector(
    (state) => state.modalSlice.showScrapMoveBtn
  );
  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] });
  };
  const fetch = async (newsId) => {
    const response = await translateApi(newsId);
    if (response.status === 200) {
      setTranslate((prev) => [
        ...prev,
        {
          newsId,
          description: response.data.description,
          title: response.data.title,
        },
      ]);
    } else if (response.status === 400) {
      setTranslate((prev) => [
        ...prev,
        {
          newsId,
          description: "description",
          title: response.data.title,
        },
      ]);
    }
  };
  const getBookmark = async () => {
    const res = await bookmarkAll();
    // console.log(res);
  };
  useEffect(() => {
    getBookmark();
  }, []);
  useEffect(() => {
    // console.log(translate);
  }, [translate, changeTrans]);

  const handleTranslate = (e, newsId) => {
    if (translate.some((title) => title.newsId === newsId)) {
      setTranslate((prev) => prev.filter((item) => item.newsId !== newsId));
      return;
    }

    setTrakingId({ [e.target.id]: !trakingId[e.target.id] });
    fetch(newsId);
  };
  const handleScrap = (newsId) => {
    dispatch(addNewsID(newsId));
    dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
  };
  return (
    <>
      {newsList.length > 0 ? (
        newsList.map((news, idx) => {
          if (newsList.length === idx + 1) {
            return (
              <Card key={news.newsId} ref={lastElementRef}>
                <MainContent viewType={apply ? view : viewType}>
                  <ImageContent
                    src={news.imageUrl ? news.imageUrl : globalMOYAPremiumSvg}
                    viewType={apply ? view : viewType}
                  />
                  <CardHeader viewType={apply ? view : viewType}>
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <h2>
                        {" "}
                        {
                          translate.find((item) => item.newsId === news.newsId)
                            .title
                        }
                      </h2>
                    ) : (
                      <h2> {news.title}</h2>
                    )}
                  </CardHeader>
                </MainContent>

                <Abstract>
                  {translate &&
                  translate.some((title) => news.newsId === title.newsId) ? (
                    <p>
                      {
                        translate.find((item) => item.newsId === news.newsId)
                          .description
                      }
                    </p>
                  ) : (
                    <p> {news.description ? news.description : "no text"}</p>
                  )}
                </Abstract>

                <SubContent>
                  <div className="time">
                    {news.brandName} | {differenceDayFuncTwo(news.publishTime)}
                  </div>
                  <div className="iconGroup">
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <TranslateIconEn
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    ) : (
                      <TranslateIconKo
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    )}

                    <ShareIcon />
                    <ScrapIcon
                      onClick={() => handleScrap(news.newsId)}
                      $scrap={scrap}
                    />
                  </div>
                </SubContent>
                {news.assetTags && news.assetTags.length > 0 ? (
                  <CardFooter>
                    <Tickers $expand={`${open[idx] ? "expand" : "none"}`}>
                      {news.nluLabels.slice(0, 3).map((label, index) => (
                        <li key={label + index}>
                          <strong>Related Symbols</strong> {label}
                        </li>
                      ))}
                    </Tickers>

                    <div className="tags">
                      {news.assetTags.map((tag, index) => (
                        <span key={tag + index}>#{tag}</span>
                      ))}
                    </div>

                    <ExpandMoreIcon
                      id={idx}
                      onClick={(e) => {
                        handleExpand(e, idx);
                      }}
                      $expand={`${open[idx] ? "expand" : "none"}`}
                    />
                  </CardFooter>
                ) : (
                  <NoResultTickers />
                )}
              </Card>
            );
          } else {
            return (
              <Card key={news.newsId} ref={lastElementRef}>
                <MainContent viewType={apply ? view : viewType}>
                  <ImageContent
                    src={news.imageUrl ? news.imageUrl : globalMOYAPremiumSvg}
                    viewType={apply ? view : viewType}
                  />
                  <CardHeader viewType={apply ? view : viewType}>
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <h2>
                        {
                          translate.find((item) => item.newsId === news.newsId)
                            .title
                        }
                      </h2>
                    ) : (
                      <h2> {news.title}</h2>
                    )}
                  </CardHeader>
                </MainContent>

                <Abstract>
                  {translate &&
                  translate.some((title) => news.newsId === title.newsId) ? (
                    <p>
                      {
                        translate.find((item) => item.newsId === news.newsId)
                          .description
                      }
                    </p>
                  ) : (
                    <p>
                      {" "}
                      {news.description ? news.description : "no description"}
                    </p>
                  )}
                </Abstract>

                <SubContent>
                  <div className="time">
                    {news.brandName} | {differenceDayFuncTwo(news.publishTime)}
                  </div>
                  <div className="iconGroup">
                    {translate &&
                    translate.some((title) => news.newsId === title.newsId) ? (
                      <TranslateIconEn
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    ) : (
                      <TranslateIconKo
                        id={news.newsId}
                        onClick={(e) => {
                          handleTranslate(e, news.newsId);
                        }}
                      />
                    )}

                    <ShareIcon />
                    <ScrapIcon
                      onClick={() => handleScrap(news.newsId)}
                      $scrap={scrap}
                    />
                  </div>
                </SubContent>
                {news.assetTags && news.assetTags.length > 0 ? (
                  <CardFooter>
                    <Tickers $expand={`${open[idx] ? "expand" : "none"}`}>
                      {news.nluLabels.slice(0, 3).map((label, index) => (
                        <li key={label + index}>
                          <strong>Related Symbols</strong> {label}
                        </li>
                      ))}
                    </Tickers>

                    <div className="tags">
                      {news.assetTags.map((tag, index) => (
                        <span key={tag + index}>#{tag}</span>
                      ))}
                    </div>

                    <ExpandMoreIcon
                      id={idx}
                      onClick={(e) => {
                        handleExpand(e, idx);
                      }}
                      $expand={`${open[idx] ? "expand" : "none"}`}
                    />
                  </CardFooter>
                ) : (
                  <NoResultTickers />
                )}
              </Card>
            );
          }
        })
      ) : (
        <ErrorMsg errorMsg={errorMsg} />
      )}
    </>
  );
};

export default NewsCard;
