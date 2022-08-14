import styled from "styled-components";
export const CustomContainer = styled.div`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  /* position: relative; */
  @media ${({ theme }) => theme.device.labtop} {
    margin: 0 auto;
    max-width: 1023px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 0 auto;
    max-width: 767px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin: 0 auto;
    max-width: 479px;
  }
`;

export const DefaultContainer = styled.div`
  padding: 12px 16px;
  position: relative;
`;
