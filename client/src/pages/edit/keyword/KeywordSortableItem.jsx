import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Hamburger from "@components/common/Hamburger";
import Checkbox from "@components/common/Checkbox";
import { colors } from "@styles/theme";

import {
  EditItemWrap,
  EditItemTextWrap,
  EditHamburgerWrap,
  EditTextKeyword,
} from "@styles/edit/editKeyword";

// const KeywordSortableItem = forwardRef((props, ref) => {
const KeywordSortableItem = ({ item, handleDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    backgroundColor: isDragging ? `${colors.gray350}` : "",
  };

  return (
    <EditItemWrap style={style} {...attributes}>
      <Checkbox key={item.id} item={item} handleDelete={handleDelete} />
      <EditItemTextWrap>
        <EditTextKeyword>{item.name}</EditTextKeyword>
      </EditItemTextWrap>
      <EditHamburgerWrap ref={setNodeRef} {...listeners}>
        <Hamburger />
      </EditHamburgerWrap>
    </EditItemWrap>
  );
};

export default KeywordSortableItem;
