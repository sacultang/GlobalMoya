import { stepPayServer } from "./baseUrl"

export const searchUserList = async (userMail) => {
  try {
    const response = await stepPayServer({
      url: "/v1/customers",
      method: "GET",
      params: {
        keyword: `${userMail}`,
      },
    })
    if (response.status === 200) {
      const subsUser = await customerSearch(response.data.content[0].id)
      return { userCode: response.data, subsUser: subsUser.data }
    }
  } catch (e) {
    throw new Error(`${e}`)
  }
}

export const createOrder = async (userCode) => {
  try {
    const response = await stepPayServer({
      url: "/v1/orders",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        items: [
          {
            currency: "KRW",
            minimumQuantity: 1,
            productCode: "product_W9gLQy9ac",
            priceCode: "price_kanX9egTB",
          },
        ],
        customerId: `${userCode}`,
      },
    })
    if (response.status === 200) {
      redirectPay(response.data.orderCode)
      return response
    }
  } catch (e) {
    throw new Error(`${e}`)
  }
}

/* 
  결제창 띄는 함수
*/
function redirectPay(orderCode) {
  var url = `https://api.steppay.kr/api/public/orders/${orderCode}/pay?successUrl=http://121.135.232.105:3000/mypagemain&errorUrl=http://121.135.232.105:3000/&cancelUrl=http://121.135.232.105:3000/`
  window.location.href = url
}

/* 
  고객 상세 조회
*/

export const customerSearch = async (userCode) => {
  try {
    const response = await stepPayServer({
      url: `/v1/customers/${userCode}`,
      method: "GET",
    })
    console.log(response)
    if (response.status === 200) {
      return response
    }
  } catch (e) {
    throw new Error(`${e}`)
  }
}

export const subsCancel = async (subsId) => {
  try {
    const response = await stepPayServer({
      url: `v1/subscriptions/${subsId}/cancel`,
      method: "POST",
      data: {
        whenToCancel: "NOW",
      },
    })
    return response
  } catch (e) {
    return e.response
  }
}
