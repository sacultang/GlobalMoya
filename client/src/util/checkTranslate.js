export const checkTransLateId = (transLateArr, newsId) => {
  return transLateArr.some((title) => title.newsId === newsId)
}
