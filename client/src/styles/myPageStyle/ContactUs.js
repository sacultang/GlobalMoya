import styled from "styled-components";
import { fontSize, fontWeight, colors } from "../theme";
import { DefaultContainer } from "../common/container";

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 17px;

  height: 56px;
  h3 {
    text-align: center;
    color: ${colors.gray900};
    font-weight: ${fontWeight.FontWeight600};
  }
  div {
    width: 100%;
    margin: 0 auto;
    position: relative;
    svg {
      position: absolute;
      top: -4px;
    }
  }
`;

export const ContactContainer = styled(DefaultContainer)`
  input: {
  }
  input::placeholder {
    /* padding: 0 12px; */
  }
`;
export const MessageSubject = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #c8c8c8;
  border-bottom: none;
  padding: 0 10px;
  border-radius: 2px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  &::placeholder {
    /* padding: 12px 12px; */
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;

export const Message = styled.textarea`
  box-sizing: border-box;
  resize: none;
  padding: 10px 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 199px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  line-height: 22px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;

export const Email = styled.input`
  box-sizing: border-box;
  padding: 10px 10px;
  width: 100%;
  margin-bottom: 10px;
  height: 40px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`;
export const Attachment = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #c8c8c8;
  border-radius: 2px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  label {
    padding: 0 12px;
    height: 100%;
    ${({ theme }) => theme.common.flexCenter};
    justify-content: space-between;
    input {
      display: none;
    }
  }
`;

export const AttachmentDesc = styled.div`
  width: 330px;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight400};
  letter-spacing: -0.2px;
  line-height: 22px;
  margin-top: 12px;
  margin-bottom: 136px;
`;
export const CheckBox = styled.div`
  width: 100%;
  color: ${colors.gray500};
  font-size: ${fontSize.FontSize14};
  font-weight: ${fontWeight.FontWeight500};
  label {
    display: flex;
    position: relative;
    align-items: center;
    svg {
      right: 0;
      position: absolute;
      fill: none;
      stroke: white;
      stroke-width: 2px;
    }
  }
`;

export const Complete = styled.button`
  position: relative;
  width: 100%;
  height: 52px;
  padding-left: 16px;
  color: ${colors.white};
  font-weight: ${fontWeight.FontWeight600};
  line-height: 22px;
  background: #b7b7b7;
  border-radius: 2px;
  margin-top: 37px;
  border: 1px solid #e8e8e8;
`;
