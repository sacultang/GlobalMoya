import styled from "styled-components";

import IconCancelSvg from "@assets/icons-cancel.svg";

export const IconCancel = styled.span`
  background-image: url(${IconCancelSvg});
  background-repeat: no-repeat;
  width: 19px;
  height: 19px;
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 13px;
  cursor: pointer;
`;

export const IconText = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;


export const ShowIcon = styled.span`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
  display: inline-block;
  position: absolute;
  top: 18px;
  right: 13px;
  cursor: pointer;
  
`;
