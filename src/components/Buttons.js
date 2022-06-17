import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

const Buttons = () => {
  return (
    <Wrapper>
      <PrimaryBtn>Submit</PrimaryBtn>
      <SecondaryBtn>Submit</SecondaryBtn>
    </Wrapper>
  );
};

export default Buttons;

const Wrapper = styled.section`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 1.9rem 7.1rem;
  border-radius: 1rem;
  font-size: ${typeScale.paragraph};
  width: 20rem;
  height: 6rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

const PrimaryBtn = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: #fff;
  border: none;
`;

const SecondaryBtn = styled(Button)`
  background-color: #fff;
  color: ${defaultTheme.primaryColor};
  border: 1px solid ${defaultTheme.primaryColor};
`;
