import { createKeywords } from "../api/keywordListApi";
import { createTermSeq } from "./createTermSeq";

const createKeywordFunc = async (id, category, clipKeyword) => {
  // console.log(createTermSeq(clipKeyword.length +1));
  const termSeq = createTermSeq(clipKeyword.length + 1);
  console.log(termSeq);
  const data = {
    keyType: category,
    _id: id.toString(),
    termSeq: "z",
  };

  const res = await createKeywords(data);
  return res;
};
export default createKeywordFunc;
