import clientServer from "./baseUrl";
import { stepPayServer } from "./baseUrl";

export const registerFunc = async (form) => {
  try {
    const res = await clientServer({
      url: "/auth/register",
      method: "post",
      data: form,
    });

    if (res.status === 200) {
      console.log("회원가입 성공");
      return res.status;
    }
  } catch (err) {
    return res.status;
  }
};

export const stepPayFunc = async (data) => {
  try {
    const res = await stepPayServer({
      url: "/v1/customers",
      method: "post",
      data: data,
    });

    if (res.status === 200) {
      console.log("스텝페이 등록 성공");
    }
  } catch (err) {
    console.log("스텝페이 등록 실패");
    return res.status;
  }
};
