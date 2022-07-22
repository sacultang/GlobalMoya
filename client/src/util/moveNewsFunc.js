import { bookmarkMove } from "../api/bookmarkApi";
const moveNewsFunc = async (fromGroupId, toGroupId, newsId) => {
  const data = {
    fromGroupId,
    toGroupId,
    newsIdList: { ...newsId },
  };
  const res = await bookmarkMove(data);
  return res;
};
export default moveNewsFunc;
