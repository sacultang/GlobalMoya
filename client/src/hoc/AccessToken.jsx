import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCookieToken } from "@util/settingSessions";
import { refreshTokenFunc } from "@api/loginApi";
import { setAccessTokenAction } from "@redux/user/userSlice";

const AccessToken = (SpecificComponent) => {
  const AccessToken = (props) => {
    const accessToken = useSelector((state) => state.user.accessToken);
    const userLogin = useSelector((state) => state.user.userLogin);

    const dispatch = useDispatch();

    const getCookie = useCallback(async () => {
      const refresh = await getCookieToken();
      const access_token = await refreshTokenFunc(refresh);
      await dispatch(setAccessTokenAction(access_token));
    }, [userLogin]);

    useEffect(() => {
      if (userLogin) {
        getCookie();
      }
    }, []);
    return (
      <SpecificComponent
        {...props}
        accessToken={accessToken}
        userLogin={userLogin}
      />
    );
  };
  return AccessToken;
};

export default AccessToken;
