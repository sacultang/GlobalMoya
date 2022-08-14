import styled from "styled-components";

export const FilterBG = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.55);
  position: fixed;
  z-index: 1;
  display: ${({ showBtn, showNavi }) =>
    showBtn || showNavi ? "block" : "none"};
`;
