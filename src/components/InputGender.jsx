import styled from "styled-components";

const GenderContainer = styled.p`
  border-radius: 50px;
  background-color: ${(props) => props.background || ""};
  color: ${(props) => props.color || ""};
  font-size: 12px;
  justify-content: center;
  padding: 2px 8px;
  width: 45px;
`;

function InputGender({ text, background, color }) {
  return (
    <GenderContainer background={background} color={color}>
      {text}
    </GenderContainer>
  );
}

export default InputGender;
