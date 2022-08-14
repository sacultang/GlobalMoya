import styled from "styled-components";
import { DefaultHeader } from "@styles/common/DefaultHeader";

export const MainHeader = styled(DefaultHeader)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: relative;
`;
export const SideHeader = styled(DefaultHeader)`
  margin: 0 16px;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  position: relative;
`;
