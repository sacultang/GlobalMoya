import clientServer from "./baseUrl";

export const getMasterData = async () => {
  try {
    const response = await clientServer({
      url: "/master/all",
    });
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    return err.message;
  }
};

export const getCategoryList = async (category) => {
  try {
    const response = await clientServer({
      url: `/master/lv-2/${category}`,
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
