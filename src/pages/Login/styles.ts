import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem;
  border-radius: 1rem;

  background: var(--shape);
  
  width: 50%;

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
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  padding: 10px 5px 0rem;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 5rem;
  margin-top: 1rem;
  padding: 0.5rem;
`;
