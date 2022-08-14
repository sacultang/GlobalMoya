import { bookmarkDelete } from "../api/bookmarkApi";
const deleteNewsFunc = async (groupId, newsIdList) => {
  const data = {
    groupId,
    newsIdList: { newsIdList },
  };
  const res = await bookmarkDelete(data);
  return res;
};
export default deleteNewsFunc;
