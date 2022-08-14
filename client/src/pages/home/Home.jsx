import React, { useEffect, useRef } from "react";
import { getKeywords } from "@api/keywordListApi";
import { useSelector, useDispatch } from "react-redux";
import { addKeywordListAction } from "@redux/keywordConnectedSlice";
import { keywordContentRequest } from "@redux/searchFilterSlice";
import HomeContent from "./HomeContent";
import HomeFooter from "./HomeFooter";
import AccessToken from "@hoc/AccessToken";

const Home = ({ accessToken }) => {
  const { keyTypeList, paramValueList, exchangeList } = useSelector(
    (state) => state.keywordConnectedSlice
  );
  const { userLogin } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getDatas = async () => {
  //     const response = await getKeywords(accessToken);
  //     await dispatch(addKeywordListAction(response));
  //   };
  // }, []);

  useEffect(() => {
    const getDatas = async () => {
      const response = await getKeywords(accessToken);
      await dispatch(addKeywordListAction(response));
    };
    const getFirstKeyword = async () => {
      await dispatch(
        keywordContentRequest([
          keyTypeList[0],
          paramValueList[0],
          exchangeList[0],
        ])
      );
    };

    if (userLogin) {
      getDatas();
      getFirstKeyword();
    }

    return () => {
      console.log("unMounted");
    };
  }, []);

  useEffect(() => {
    if (userLogin === false) {
      const getDatas = async () => {
        const response = await getKeywords();
        await dispatch(addKeywordListAction(response));
      };
      getDatas();

      return () => {
        console.log("unMounted");
      };
    }
  }, []);

  return (
    <>
      <HomeContent />
      <HomeFooter />
    </>
  );
};

export default AccessToken(Home);
