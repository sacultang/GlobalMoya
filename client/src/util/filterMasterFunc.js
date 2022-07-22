import _ from "lodash";
export const filterValue = (dataArr, searchWord) => {
  const regex = new RegExp(`\s(${searchWord})+|(${searchWord})+`, "im");
  let filtered = _.filter(dataArr, (item) => {
    return regex.test(item.name) || regex.test(item.paramValue);
  });
  return filtered;
};
export const checkClip = (list, id) => {
  const result = _.some(list, (item) => item._id === id);
  return result;
};
export default checkClip;
