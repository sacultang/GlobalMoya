export const setCookie = (token) => {
  const expires = new Date();
  expires.setDate(expires.getMinutes() + 14);
  document.cookie = `accessToken=${token}; max-age=900`;
};

export const getCookie = () => {
  const accessToken = document.cookie
    .split("; ")
    .find((row) => row.startsWith("accessToken"))
    .split("=")[1];
  return accessToken;
};

export const deleteCookie = () => {
  setCookie("accessToken");
};
