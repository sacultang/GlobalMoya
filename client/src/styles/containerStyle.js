import styled from "styled-components";
export const CustomContainer = styled.div`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
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
export const MainContainer = styled(DefaultContainer)`
  padding: 224px 16px 305px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
