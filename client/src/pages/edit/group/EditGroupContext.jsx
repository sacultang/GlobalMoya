import React, { useEffect, useState } from "react";
import { allFolder } from "@api/scrapFolderApi";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { useNavigate } from "react-router-dom";
import { toggleEditAction } from "@redux/buttonSlice";
import {
  EditContextWrap,
  EditContainer2,
  EditUl,
} from "@styles/edit/editKeyword";
import { BackArrow } from "@styles/svgIcon";
import GroupSortableItem from "./GroupSortableItem";

const EditGroupContext = ({}) => {
  const [items, setItems] = useState([]);
  const getDatas = async () => {
    const response = await allFolder();
    setItems(response.reports);
  };
  useEffect(() => {
    getDatas();
  }, []);
  console.log("올폴더^^ 반환", items);
  const navigate = useNavigate();

  // const showEditBtn = useSelector((state) => state.buttonSlice.showEditBtn);

  // const dispatch = useDispatch();
  // const toggleModal = () => {
  //   console.log(showEditBtn);
  //   dispatch(toggleEditAction(!showEditBtn));
  //   navigate("/main");
  // };

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = ({ active, over }) => {
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.groupId === active.id);
        const newIndex = items.findIndex((item) => item.groupId === over.id);
        // console.log("item,old,new", items, oldIndex, newIndex);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const handleDragStart = (event) => {
    // console.log("start", event);
  };
  const handleDragMove = (event) => {
    // console.log("Move", event);
  };
  const handleDragOver = (event) => {
    // console.log("Over", event);
  };
  const handleDragCancel = (event) => {
    // console.log("Cancel", event);
  };

  return (
    <EditContextWrap showEditBtn>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragCancel={handleDragCancel}
        onDragEnd={handleDragEnd}
        autoScroll={{ threshold: { x: 0, y: 0 } }}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <EditContainer2>
            <EditUl>
              {items.map((item) => (
                <GroupSortableItem key={item.groupId} item={item} />
              ))}
            </EditUl>
          </EditContainer2>
        </SortableContext>
      </DndContext>
    </EditContextWrap>
  );
};

export default EditGroupContext;
