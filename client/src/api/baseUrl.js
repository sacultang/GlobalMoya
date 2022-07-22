import axios from "axios";
import { getCookieToken } from "../util/settingSessions";
import { refreshTokenFunc } from "./loginApi";

const clientServer = axios.create({
  baseURL:
    "http://cityfalcon-web-797905939.ap-northeast-2.elb.amazonaws.com:3002",
  headers: { "Access-Control-Allow-Origin": "*" },
});
export default clientServer;

clientServer.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;
    if (status === 401) {
      if (
        error.response.data.msg === "Token has expired" ||
        error.response.data.msg === "Missing Authorization Header"
      ) {
        const originalRequest = config;
        const refreshToken = await getCookieToken();
        const access_token = await refreshTokenFunc(refreshToken);

        clientServer.defaults.headers.common.Authorization = `Bearer ${access_token}`;
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

// const SECRET_KEY = import.meta.env.VITE_SECRET_TOKEN;
const SECRET_KEY =
  "7eef25e8a3274b4b8b4a261bac872c963ce88c738a0e1d61ee5f639319d413ed";
// secret_key db에 저장?
export const stepPayServer = axios.create({
  baseURL: "https://api.steppay.kr/api",
  headers: {
    Accept: "*/*",
    "Secret-Token": `${SECRET_KEY}`,
  },
});
