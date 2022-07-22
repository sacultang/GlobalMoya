import _ from "lodash";
export const filterValue = (objKey, searchWord) => {
  const regex = new RegExp(`\s(${searchWord})+|(${searchWord})+`, "im");
  let filtered = _.filter(objKey, (item) => {
    return regex.test(item.name) || regex.test(item.paramValue);
  });
  return filtered;
};
