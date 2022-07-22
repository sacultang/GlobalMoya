import { bookmarkSave } from "../api/bookmarkApi";
const createNewsFunc = async (groupId, newsId) => {
  const data = {
    groupId,
    newsId,
  };
  const res = await bookmarkSave(data);
  return res;
};
export default createNewsFunc;
