import React, { useEffect, useState } from "react";
import { allFolder } from "../../api/scrapFolderApi";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ButtonWrapDiv, ApplyBtn } from "@styles/filterStyle/filterStyle";
import { toggleScrapMoveBtn } from "@redux/modalSlice";
import { bookmarkSave } from "../../api/bookmarkApi";
import { colors, pxToRem } from "@styles/theme";
const GroupChooseModal = ({ showScrapMoveBtn }) => {
  const [groupList, setGroupList] = useState([]);
  const [curGroupId, setCurGroupId] = useState("");
  const [success, setSuccess] = useState(true);
  const dispatch = useDispatch();
  const newsId = useSelector((state) => state.scrapNewsSlice.newsId);
  const getFolder = async () => {
    const res = await allFolder();

    setGroupList(res.reports);
  };
  useEffect(() => {
    getFolder();
    // console.log(newsId);
  }, []);
  const handleBG = () => {
    dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
    setSuccess(true);
  };
  useEffect(() => {
    setCurGroupId(groupList.length > 0 && groupList[0].groupId);
  }, [groupList]);

  useEffect(() => {
    // console.log(curGroupId);
  }, [curGroupId]);

  const checkGroup = (groupId) => {
    setCurGroupId(groupId);
  };

  const setBookmarkNewsFunc = async () => {
    const json = {
      groupId: curGroupId,
      newsId,
    };
    const res = await bookmarkSave(json);
    console.log(res);
    if (res.status === 200) {
      dispatch(toggleScrapMoveBtn(!showScrapMoveBtn));
      setSuccess(true);
    } else if (res === 400) {
      setSuccess(false);
    }
  };
  return (
    <>
      {success ? (
        <GroupWarp showScrapMoveBtn={showScrapMoveBtn}>
          <HeaderDiv>새 그룹 추가</HeaderDiv>
          {groupList.length > 0 &&
            groupList.map((item, idx) => (
              <>
                <GroupLabel key={item.groupId} htmlFor={item.groupId}>
                  {item.groupName}
                  <input
                    type="radio"
                    id={item.groupId}
                    name="groupInput"
                    onChange={() => checkGroup(item.groupId)}
                    defaultChecked={false}
                  />
                </GroupLabel>
              </>
            ))}
          <ButtonWrapDiv>
            <ApplyBtn>취소</ApplyBtn>
            <ApplyBtn apply onClick={setBookmarkNewsFunc}>
              완료
            </ApplyBtn>
          </ButtonWrapDiv>{" "}
        </GroupWarp>
      ) : (
        <SuccessDiv>이미 추가된 뉴스 입니다</SuccessDiv>
      )}
      <FilterBG showScrapMoveBtn={showScrapMoveBtn} onClick={handleBG} />
    </>
  );
};

export default GroupChooseModal;

const GroupWarp = styled.div`
  position: fixed;
  bottom: ${({ showScrapMoveBtn }) => (showScrapMoveBtn ? 0 : "-150vh")};
  width: 100%;
  background-color: #fff;
  padding: 20px 16px 14px 16px;
  box-sizing: border-box;
  z-index: 3;
  transition: all 0.3s ease;
`;
const HeaderDiv = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
`;
const GroupLabel = styled.label`
  padding: 20px 0;
  font-size: 16px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  &:last-child {
    border-bottom: none;
  }
`;
export const FilterBG = styled.div`
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  z-index: 2;
  display: ${({ showScrapMoveBtn }) => (showScrapMoveBtn ? "block" : "none")};
`;

const SuccessDiv = styled.div`
  width: 90%;
  height: 50px;
  background-color: ${colors.gray750};
  position: fixed;
  color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  margin: auto;
  border-radius: 4px;
  align-items: center;
  padding-left: 16px;
  box-sizing: border-box;
  font-size: ${pxToRem(12)};
  text-align: center;
  line-height: 50px;
`;
