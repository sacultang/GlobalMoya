import clientServer from "./baseUrl";
//뉴스 북마크 CRUD
//search/news에서 가져온 뉴스 newsId를 바인딩한 뉴스를 내 특정 폴더 내로 저장한다.
export const bookmarkSave = async (json) => {
  console.log(json);
  try {
    const response = await clientServer({
      url: "/bookmark/save",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(json),
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    if (error.response.status === 400) {
      return error.response.status;
    }
  }
};

//내가 등록한 폴더별로 폴더내 저장된 모든 뉴스 리스트를 반환한다.
export const bookmarkAll = async () => {
  try {
    const response = await clientServer({
      url: "/bookmark/reportsAll",

      method: "get",
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (error) {
    if (error.response.status === 400) {
      return error.response.status;
    }
  }
};
// 내가 만든 폴더groupId 내에 저장된 뉴스 리스트를 반환한다.
export const bookmarkOne = async (groupId) => {
  try {
    const response = await clientServer({
      url: `/bookmark/reportsOne/${groupId}`,
      method: "get",
    });

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (error) {
    if (error.response.status === 400) {
      return error.response.status;
    }
  }
};

// 내가 등록한 특정 폴더내의 newsId 리스트를 최대 10건까지 한번에 삭제한다.
export const bookmarkDelete = async (json) => {
  console.log(json);
  try {
    const response = await clientServer({
      url: "/bookmark/delete",
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(json),
    });
    console.log(response);
    if (response.status === 200) {
      return response;
    }
  } catch (e) {
    console.log(e);
  }
};
//기존에 스크랩한 뉴스리스트를 최대 10건까지 다른 폴더로 이동시킨다.
export const bookmarkMove = async () => {
  try {
    const response = await clientServer({
      url: "/bookmark/move",
      method: "post",
      data: json,
    });

    if (response.status === 200) {
    }
  } catch (error) {
    if (error.response.status === 400) {
      return error.response.status;
    }
  }
};
