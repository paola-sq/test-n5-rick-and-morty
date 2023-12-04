import styled from "styled-components";

const LabelText = styled.label`
  font-size: 12px;
  color: #aaa;
  padding: 2px 4px;

`;

function Label({ text }) {
  return <LabelText>{text}</LabelText>;
}

export default Label;
