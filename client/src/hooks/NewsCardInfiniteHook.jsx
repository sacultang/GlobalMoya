import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getSearchData } from "@api/searchApi";
const NewsCardInfiniteHook = (
  setPage,
  page,
  location,
  searchType,
  accessToken
) => {
  const [newsList, setNewsList] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoaidng] = useState(true);
  const observer = useRef(null);
  const { timeFilter, mediaType, language, orderBy } = useSelector(
    (state) => state.searchFilterSlice
  );
  const QueryParams = {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType: `${location.category}`,
    paramValue: `${location.paramValue}`,
    exchange: `${location.exchange ? location.exchange : null}`,
  };

  const nextQueryParams = {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType: `${location.category}`,
    paramValue: `${location.paramValue}`,
    exchange: `${location.exchange ? location.exchange : null}`,
    nextPageToken: `${pageToken}`,
  };

  const getMoreNews = async () => {
    const res = await getSearchData(
      page > 1 ? nextQueryParams : QueryParams,
      accessToken
    );
    console.log(res);
    if (res.newsList.length > 0) {
      setLoaidng(false);
      setNewsList((prev) => [...prev, ...res.newsList]);
      setPageToken(res.nextPageToken);
    }
  };

  useEffect(() => {
    getMoreNews();
  }, [page]);

  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
        setLoaidng(true);
      }
    });
    if (node) observer.current.observe(node);
  }, []);
  return { lastElementRef, newsList, loading, errorMsg };
};

export default NewsCardInfiniteHook;
