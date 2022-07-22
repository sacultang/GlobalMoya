//스크랩뉴스 카테고리
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { allFolder } from "@api/scrapFolderApi";
import { QuickButtonWrap } from "@styles/scrap/scrapcate";
import { RadiusBlackButton } from "@styles/common/button/button";
import { ScrapFolderChoose } from "@redux/scrapFolderSlice";

const ScrapCategory = ({ black }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [folder, setFolder] = useState([]);
  const getDatas = async () => {
    const response = await allFolder();
    setFolder(response.reports);
    console.log("올폴더 반환", response.reports);
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <QuickButtonWrap id="scroll-container">
        <Link to="/scrap">
          <RadiusBlackButton className="all" black={black}>
            전체
          </RadiusBlackButton>
        </Link>
        {folder &&
          folder.map((group) => (
            <Link
              to={`/scrap/${group.groupId}`}
              key={group.groupId}
              id={group.groupId}
            >
              <RadiusBlackButton
                black={params.id == group.groupId}
                name={group.groupName}
                seq={group.groupSeq}
                id={group.groupId}
                onClick={() => {
                  dispatch(
                    ScrapFolderChoose({
                      groupId: group.groupId,
                      groupName: group.groupName,
                    })
                  );
                }}
              >
                {group.groupName}
              </RadiusBlackButton>
            </Link>
          ))}
      </QuickButtonWrap>
    </>
  );
};
export default ScrapCategory;
