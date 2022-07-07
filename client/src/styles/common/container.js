import styled from "styled-components";
export const CustomContainer = styled.div`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.labtop} {
  } ;
`;

export const DefaultContainer = styled.div`
  padding: 12px 16px 16px;
  position: relative;
`;
