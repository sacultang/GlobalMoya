import { createKeywords } from "../api/keywordListApi";
const createKeywordFunc = async (id, category, accessToken) => {
  const data = {
    keyType: category,
    _id: id.toString(),
    termSeq: "z",
  };

  const res = await createKeywords(data, accessToken);
  return res;
};
export default createKeywordFunc;
