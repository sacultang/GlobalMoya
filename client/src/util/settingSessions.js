import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const setAccessToken = (accessToken) => {
  const now = new Date();
  const hours = now.setMinutes(now.getMinutes() + 15);

  return cookies.set("access_token", accessToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(hours),
  });
};

export const getAccessToken = () => {
  return cookies.get("access_token");
};

export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set("refresh_token", refreshToken, {
    sameSite: "strict",
    path: "/",
    expires: new Date(expireDate),
  });
};
export const getCookieToken = () => {
  return cookies.get("refresh_token");
};

export const removeCookieToken = () => {
  return cookies.remove("refresh_token", { sameSite: "strict", path: "/" });
};
