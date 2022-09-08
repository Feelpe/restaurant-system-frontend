import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70%;

  @media (max-width: 1200px) {
    height: 30rem;
  }
  @media (max-width: 1024px) {
    height: 25rem;
  }
  @media (max-width: 600px) {
    height: 20rem;
  }
  @media (max-width: 480px) {
    height: 16rem;
  }
  @media (max-width: 320px) {
    height: 13rem;
  }
`;

export const Title = styled.h1`
`;

export const Form = styled.form`
`;

export const Input = styled.input`
`;

export const Label = styled.label`
`;

export const Button = styled.button`
`;
