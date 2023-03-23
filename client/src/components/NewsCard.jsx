import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
  Card,
  MainContent,
  SubContent,
  ImageContent,
  Abstract,
  CardHeader,
} from "@styles/newsCard/cardStyles"
import { ScrapIcon, TranslateIconKo, ShareIcon, TranslateIconEn } from "@styles/svgIcon"
import globalMOYAPremiumSvg from "@assets/globalMOYA.svg"
import { differenceDayFuncTwo } from "../util/dateFunc"
import { translateApi } from "../api/translateApi"
import ErrorMsg from "./ErrorMsg"
import { checkTransLateId } from "../util/checkTranslate"
import CardFooterComp from "./CardFooterComp"
import _ from "lodash"
const NewsCard = ({ view, apply, newsList, errorMsg, lastElementRef }) => {
  const [trakingId, setTrakingId] = useState({})
  const [translate, setTranslate] = useState([])
  const viewType = useSelector((state) => state.cardTypeSlice.viewType)

  const translateFetch = async (newsId) => {
    const response = await translateApi(newsId)
    if (response.status === 200) {
      setTranslate((prev) => [
        ...prev,
        {
          newsId,
          description: response.data.description,
          title: response.data.title,
        },
      ])
    } else if (response.status === 400) {
      setTranslate((prev) => [
        ...prev,
        {
          newsId,
          description: "no text",
          title: response.data.title,
        },
      ])
    }
  }

  const handleTranslate = (e, newsId) => {
    if (checkTransLateId(translate, newsId)) {
      setTranslate((prev) => prev.filter((item) => item.newsId !== newsId))
      return
    }
    setTrakingId({ [e.target.id]: !trakingId[e.target.id] })
    translateFetch(newsId)
  }

  const getTranslatedData = (newsId, key) => {
    if (checkTransLateId(translate, newsId)) {
      return translate.find((item) => item.newsId === newsId)[key]
    } else {
      return null
    }
  }
  return (
    <>
      {newsList.length > 0 ? (
        newsList.map((news, idx) => {
          const translatedTitle = getTranslatedData(news.newsId, "title")
          const translatedDescription = getTranslatedData(news.newsId, "description")
          return (
            <Card key={news.newsId} ref={lastElementRef}>
              <MainContent viewType={apply ? view : viewType}>
                <ImageContent
                  src={news.imageUrl ? news.imageUrl : globalMOYAPremiumSvg}
                  viewType={apply ? view : viewType}
                />
                <CardHeader viewType={apply ? view : viewType}>
                  {translatedTitle ? <h2>{translatedTitle}</h2> : <h2> {news.title}</h2>}
                </CardHeader>
              </MainContent>

              <Abstract>
                {translatedDescription ? (
                  <p>{translatedDescription}</p>
                ) : (
                  <p> {news.description ? news.description : "no text"}</p>
                )}
              </Abstract>

              <SubContent>
                <div className="time">
                  {news.brandName} | {differenceDayFuncTwo(news.publishTime)}
                </div>
                <div className="iconGroup">
                  {checkTransLateId(translate, news.newsId) ? (
                    <TranslateIconEn
                      id={news.newsId}
                      onClick={(e) => {
                        handleTranslate(e, news.newsId)
                      }}
                    />
                  ) : (
                    <TranslateIconKo
                      id={news.newsId}
                      onClick={(e) => {
                        handleTranslate(e, news.newsId)
                      }}
                    />
                  )}
                  <ShareIcon />
                  <ScrapIcon />
                </div>
              </SubContent>
              {news.assetTags ? (
                <CardFooterComp assetTags={news.assetTags} idx={idx} nluLabels={news.nluLabels} />
              ) : (
                <NoResultTickers />
              )}
            </Card>
          )
        })
      ) : (
        <ErrorMsg errorMsg={errorMsg} />
      )}
    </>
  )
}

export default NewsCard
