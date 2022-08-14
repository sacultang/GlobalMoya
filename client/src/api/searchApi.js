import clientServer from "./baseUrl";

export const getSearchData = async (queryParams, accessToken) => {
  const {
    timeFilter,
    mediaType,
    language,
    orderBy,
    keyType,
    paramValue,
    exchange,
    nextPageToken,
  } = queryParams;

  try {
    const response = await clientServer({
      url: "/news/search",
      // timeout: 3000,
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        timeFilter,
        mediaType,
        language,
        orderBy,
        keyType,
        paramValue,
        exchange,
        nextPageToken,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
    if (response.status === 400) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 401) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 2002) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 4018) {
      const message = await response.data.message;
      return message;
    }
  } catch (e) {
    console.log("error res", e);
  }
};
