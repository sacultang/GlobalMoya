import styled from "styled-components";
import { DefaultContainer } from "@styles/common/container";
import { colors } from "@styles/theme";
export const MainPageContainer = styled(DefaultContainer)`
  padding-bottom: 0;
  border-bottom: 1px solid ${colors.gray250};
  /* for Edit */
  position: relative;
`;
