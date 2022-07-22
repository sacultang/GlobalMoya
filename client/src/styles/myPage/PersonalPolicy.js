import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";

export const Policy = styled.div`
  width: 100%;
  h3 {
    height: 56px;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  background: ${colors.gray150};
  border-radius: 2px;
  left: 15px;
  margin: 20px;
  padding: 15px 15px 15px 15px;
  font-size: ${fontSize.FontSize12};
  font-weight: ${fontWeight.FontWeight400};
  line-height: 18px;
  letter-spacing: -0.2px;
  color: ${colors.gray650};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  height: 56px;

  height: 56px;
  h3 {
    text-align: center;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    width: 100%;
    margin: 0 auto;
    svg {
      position: absolute;
      padding: 20px;
    }
  }
`;
