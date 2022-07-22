import clientServer from "./baseUrl";
// import { retryAxios } from "@api/baseUrl";

export const getKeywords = async () => {
  try {
    const response = await clientServer({
      url: "preferTerms/reports",
      transformResponse: [
        function (data) {
          const transformedData = JSON.parse(data);
          // console.log("transformedData", transformedData);
          return transformedData.reports.map((item, id) => {
            item.id = id;
            return item;
          });
        },
      ],
      timeout: 3000,
      // withCredentials: true,
    });

    // if (response === undefined) {
    //   retryAxios(3, 1000);
    // }

    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (e) {
    console.log(e);

    // if (e.config.url === "/preferTerms/reports") {
    //   console.log("에러여기");

    //   // const token = e.config.headers.Authorization.split(" ")[1];
    //   getKeywords(accessToken);
    // }
  }
};

/**
 * 키워드 생성 처리 단계 중 발생될 수 있는 예외코드**
클라이언트 요청 자체를 잘못했을경우 (오타, 잘못된 데이터바인딩 등등) = 401
유져벌로 키워드 생성 제한 예외 코드 = 2002
유저가 이미 생성된 키워드를 등록할 경우 = 4018
 */

export const createKeywords = async (json) => {
  try {
    const response = await clientServer({
      url: "preferTerms/create",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(json),
    });
    // console.log(response);
    if (response.status === 200) {
      // console.log(data);
      return response;
    }
    if (response.status === 400) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 401) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 2002) {
      const message = await response.data.message;
      return message;
    }
    if (response.data.code === 4018) {
      const message = await response.data.message;
      return message;
    }
  } catch (e) {
    // 401, 2002, 4018 에러처리 필요
    console.log(e);
    return e.response.data;
  }
};

// updateFlag
// "termList" : keyType, _id, termSeq, updateFlag: R: Remove, S: Seq, D: Default
// 순서변경, 삭제 한꺼번에 처리 가능
// ! mutiple update / delete
export const updateListKeywords = async (json, accessToken) => {
  try {
    await clientServer({
      url: "preferTerms/updateList",
      headers: {
        "Content-Type": `application/json`,
        Authorization: `Bearer ${accessToken}`,
      },
      method: "post",
      data: json,
      transformRequest: [
        function (data) {
          const transformedData = data;
          let temp = [];
          temp = transformedData.termList.map((item) => {
            delete item.id;
            delete item.name;
            delete item.paramValue;
            delete item.exchange;
            temp.push(item);
            return item;
          });
          const sendJson = { termList: temp };
          data = JSON.stringify(sendJson);
          return data;
        },
      ],
    });
  } catch (e) {
    console.log(e);
  }
};

// ! update 1개
export const updateKeywords = async (json) => {
  try {
    const response = await clientServer({
      url: "preferTerms/updateSeq",
      method: "put",
      data: json,
    });
    if (response.status === 200) {
      const data = await response.data;
      console.log(data);
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

// ! delete 1개
export const deleteKeywords = async (json) => {
  try {
    const response = await clientServer({
      url: "preferTerms/delete",
      method: "delete",
      data: json,
    });
    if (response.status === 200) {
      const data = await response.data;
      console.log("deleted", data);
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

// const a = {
//   "termList": [
//     { "_id": 1, "keyType": "sectors", "termSeq": "a", "updateFlag": "S" },
//     { "_id": 2, "keyType": "sectors", "termSeq": "b", "updateFlag": "S" },
//     { "_id": 3084, "keyType": "tickers", "termSeq": "bg", "updateFlag": "S" },
//     { "_id": 1, "keyType": "category", "termSeq": "bu", "updateFlag": "S" },
//     { "_id": 96, "keyType": "events", "termSeq": "bx", "updateFlag": "S" },
//     { "_id": 42, "keyType": "commodities", "termSeq": "c", "updateFlag": "S" },
//   ],
// };
