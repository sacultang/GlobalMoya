import { lazy, useState, Suspense, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import QuickGuideHeader from "../QuickGuideHeader";
import CategoryButton from "./CategoryButton";
import Spinner from "@components/common/Spinner";
const HiglightKeyword = lazy(() => import("./HiglightKeyword"));
const LvKeywordList = lazy(() => import("./LvKeywordList"));

import QuickInfiniteHook from "../../../hooks/QuickInfiniteHook";

import { DefaultContainer } from "@styles/common/container";

import { isLoading, searchKeyword } from "@redux/categorySlice";
import { getCategoryList } from "@api/masterApi";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import { set } from "lodash";

const CategoryMain = () => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [reports, setReports] = useState([]);
  const [clipKeyword, setClipKeyword] = useState([]);
  const params = useParams();
  const category = params.id;
  const keyword = useSelector((state) => state.categorySlice.keyword);
  const loading = useSelector((state) => state.categorySlice.loading);
  const inputRef = useRef(null);
  const { lastElementRef } = QuickInfiniteHook(setPage);
  const dispatch = useDispatch();
  // getKeywords().then((res) => setReports(res.reports))
  const fetch = async () => {
    try {
      const response = await getCategoryList(category);
      if (response.details.length > 0) {
        setDataList(response.details);
        const reports = await getKeywords();
        if (reports.reports.length > 0) {
          dispatch(isLoading(false));
          setReports(reports.reports);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(isLoading(false));
    }

    // .then(dispatch(isLoading(false)))
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch();
    inputRef.current.value = "";
    inputRef.current.focus();
    dispatch(searchKeyword(""));
  }, [category]);

  useEffect(() => {
    setClipKeyword(reports.filter((item) => item.keyType === category));
  }, [category, reports]);

  /*  
  
    1. keyword가 있으면
    2. datalist에서 keyword를 필터 한 리스트를 보여준다

  */
  const renderLoader = () => <Spinner />;
  return (
    <DefaultContainer>
      <CategoryButton />
      <QuickGuideHeader inputRef={inputRef} keyword={keyword} />
      {keyword ? (
        <Suspense fallback={renderLoader()}>
          <HiglightKeyword
            dataList={dataList}
            keyword={keyword}
            loading={loading}
            clipKeyword={clipKeyword}
          />
        </Suspense>
      ) : (
        <Suspense fallback={renderLoader()}>
          <LvKeywordList
            dataList={dataList}
            myRef={lastElementRef}
            page={page}
            loading={loading}
            category={category}
            clipKeyword={clipKeyword}
          />
        </Suspense>
      )}
    </DefaultContainer>
  );
};

export default CategoryMain;
