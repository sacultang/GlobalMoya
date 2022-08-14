import React from "react";
import { FilterModalStyle } from "@styles/filterStyle/filterModal";
const FilterIconModal = ({ showBtn, children }) => {
  return <FilterModalStyle showBtn={showBtn}>{children}</FilterModalStyle>;
};

export default FilterIconModal;
