export const changeCase = (str) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
};
