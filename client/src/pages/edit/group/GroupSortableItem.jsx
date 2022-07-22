import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ScrapFolderChoose } from "@redux/scrapFolderSlice";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Hamburger from "@components/common/Hamburger";
import ScrapgroupCheck from "@components/common/ScrapgroupCheck";

import {
  EditItemWrap,
  EditItemTextWrap,
  EditHamburgerWrap,
  EditInputGroup,
} from "@styles/edit/editKeyword";

// const GroupSortableItem = forwardRef((props, ref) => {
const GroupSortableItem = ({ item, type }) => {
  const dispatch = useDispatch();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.groupId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const [checked, setChecked] = useState(false);

  const handleCheckbox = (e) => {
    console.log("e", e);
    setChecked(e.target.checked);
  };

  const handleInput = (e) => {
    console.log("e", e.target.value);
  };

  return (
    <EditItemWrap style={style} {...attributes}>
      {/* <CheckInput type="checkbox" id="deleteCheck" /> */}
      {/* <CheckLabel htmlFor="deleteCheck" /> */}

      {/* <Checkbox checked={checked} onChange={handleCheckbox} /> */}
      <ScrapgroupCheck key={item.groupId} item={item} />
      <EditItemTextWrap type={type}>
        <Link to="/namechange">
          <EditInputGroup
            type="button"
            placeholder="그룹명을 바꿔주세요."
            defaultValue={item.groupName}
            onChange={handleInput}
            key={item.groupId}
            onClick={() => {
              dispatch(
                ScrapFolderChoose({
                  groupId: item.groupId,
                  groupName: item.groupName,
                })
              );
            }}
          />
        </Link>
      </EditItemTextWrap>
      <EditHamburgerWrap ref={setNodeRef} {...listeners}>
        <Hamburger />
      </EditHamburgerWrap>
    </EditItemWrap>
  );
};

export default GroupSortableItem;
