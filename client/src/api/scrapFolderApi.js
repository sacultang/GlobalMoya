import clientServer from "./baseUrl";
//나의 뉴스 폴더 생성 및 관리 API
//생성된 모든 나의 그룹 폴더를 반환
export const allFolder = async () => {
  try {
    const response = await clientServer({
      url: "/folders/reports",
      method: "get",
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

//그룹 폴더를 생성 (폴더명/시퀀스는 계정당 중복 불가)
export const createFolder = async () => {
  try {
    const response = await clientServer({
      url: "/folders/create",
      method: "post",
      data: {
        groupName,
        groupSeq,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

//그롭 폴더명을 변경
export const updateNameFolder = async () => {
  try {
    const response = await clientServer({
      url: "/folders/updateName",
      method: "put",
      data: {
        groupId,
        groupName,
        groupSeq,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

//그롭 폴더의 순서를 변경
export const updateSeqFolder = async () => {
  try {
    const response = await clientServer({
      url: "/folders/updateSeq",
      method: "put",
      data: {
        groupId,
        groupName,
        groupSeq,
      },
    });

    if (response.status === 200) {
      console.log(response);
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

//그룹 폴더를 삭제, 해당 폴더에 저장된 북마크도 동시에 전부 삭제 됨
export const deleteFolder = async () => {
  try {
    const response = await clientServer({
      url: "/folders/delete",
      method: "delete",
      data: {
        groupId,
        groupName,
        groupSeq,
      },
    });

    if (response.status === 200) {
      console.log(response);
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

//updateFlag (D->R,N,S)에 따라 벌크로 내용 변경
export const updateListFolder = async () => {
  try {
    const response = await clientServer({
      url: "/folders/updateList",
      method: "delete",
      data: {
        groupList,
      },
    });

    if (response.status === 200) {
      console.log(response);
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
