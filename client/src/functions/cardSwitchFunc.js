export const cardSwitchFunc = (tagName, viewType) => {
  switch (viewType) {
    case `textOnly`:
      return tagName.textOnly;
    case `mediumImg`:
      return tagName.mediumImg;
    case `largeImg`:
      return tagName.largeImg;
    default:
      return tagName.textOnly;
  }
};
