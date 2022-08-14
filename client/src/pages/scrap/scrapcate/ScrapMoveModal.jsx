import React, { useState, useEffect } from "react";

import { allFolder } from "@api/scrapFolderApi";

const ScrapMoveModal = () => {
  const [folder, setFolder] = useState([]);
  const getDatas = async () => {
    const response = await allFolder();
    setFolder(response.reports);
    console.log("올폴더 반환", response.reports);
  };
  useEffect(() => {
    getDatas();
  }, []);

  return <>{folder && folder.map((group) => <div>{group.groupName}</div>)}</>;
};
export default ScrapMoveModal;
