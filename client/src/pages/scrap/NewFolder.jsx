// 새 스크랩 폴더 추가
import React, { useState, useRef, useInput } from "react";
import { useNavigate } from "react-router-dom";
import {
  FixedHeader,
  CompleteBtn,
  BtnWrap,
  NewGroupInput,
  NewGroupInputWrap,
  HeightContainer,
  GroupNamelengthWrap,
  Wrap,
} from "@styles/scrap/scrap";
import { BackArrow } from "@styles/svgIcon";
const NewFolder = () => {
  const navigate = useNavigate();
  const nameInput = useRef();
  const [black, setBlack] = useState();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);

  const handleChangeName = (e) => {
    setName(e.target.value);
    nameInput.current.focus();
  };
  return (
    <>
      <HeightContainer>
        <FixedHeader>
          <div>
            <div onClick={() => navigate(-1)}>
              <BackArrow />
            </div>
            <h3>새 그룹 추가</h3>
          </div>
        </FixedHeader>
        <NewGroupInputWrap>
          <Wrap>
            <NewGroupInput
              type="text"
              name="id"
              ref={nameInput}
              value={name.value}
              onChange={handleChangeName}
              placeholder="그룹 이름을 입력해주세요."
            />
            <GroupNamelengthWrap>
              <p>{name.length}/20</p>
            </GroupNamelengthWrap>
          </Wrap>
        </NewGroupInputWrap>

        <BtnWrap>
          <CompleteBtn onClick={() => navigate(-1)} black={name.length > 0}>
            완료
          </CompleteBtn>
        </BtnWrap>
      </HeightContainer>
    </>
  );
};
export default NewFolder;
