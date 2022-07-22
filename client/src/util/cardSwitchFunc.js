export const cardSwitchFunc = (tagName, viewType) => {
  switch (viewType) {
    case `TextOnly`:
      return tagName.TextOnly;
    case `Magazine`:
      return tagName.Magazine;
    case `CardType`:
      return tagName.CardType;
    default:
      return tagName.TextOnly;
  }
};
