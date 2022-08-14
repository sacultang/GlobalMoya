import React, { useState } from "react";
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
} from "@styles/svgIcon";
import { differenceDayFunc } from "../util/dateFunc";
import ErrorMsg from "./ErrorMsg";

const NewsCardList = ({ view, apply, news, errorMsg, idx }) => {
  const [scrap, setScrap] = useState(false);
  const [open, setOpen] = useState({});
  const viewType = useSelector((state) => state.cardTypeSlice.viewType);

  const handleExpand = (e) => {
    setOpen({ [e.target.id]: !open[e.target.id] });
  };

  return (
    <>
      <Card key={news.newsId}>
        <MainContent viewType={apply ? view : viewType}>
          <ImageContent
            src={news.imageUrl}
            viewType={apply ? view : viewType}
          />
          <CardHeader viewType={apply ? view : viewType}>
            <h2>{news.title}</h2>
          </CardHeader>
        </MainContent>

        <Abstract>
          <p>{news.description}</p>
        </Abstract>

        <SubContent>
          <div className="time">
            {news.brandName} | {differenceDayFunc(news.publishTime)}
          </div>
          <div className="iconGroup">
            <TranslateIconKo />
            <ShareIcon />
            <ScrapIcon
              onClick={() => {
                setScrap((prev) => !prev);
              }}
              $scrap={scrap}
            />
          </div>
        </SubContent>

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
          {news.assetTags.length !== 0 ? (
            <ExpandMoreIcon
              id={idx}
              onClick={(e) => {
                handleExpand(e, idx);
              }}
              $expand={`${open[idx] ? "expand" : "none"}`}
            />
          ) : (
            <ExpandMoreIcon
              id={idx}
              onClick={(e) => {
                handleExpand(e, idx);
              }}
              $expand={`${open[idx] ? "expand" : "card"}`}
            />
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default NewsCardList;
