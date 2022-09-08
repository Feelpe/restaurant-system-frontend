import styled from "styled-components";

export const Container = styled.div`
  padding-top: 1rem;

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

export const Summary = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;

  width: 25vh;
  height: 25vh;

  padding: 1rem;
  margin: 1rem;

  background-color: #fff;
  border-radius: 0.5rem;

  color: #000;
  text-decoration: underline;
  text-decoration-color: black;

  img {
    max-height: 15vh;
    border-radius: 0.5rem;
  }

  :hover {
    transition: all linear 0.1s;
    transform: scale(1.01)
  }
`;

export const Title = styled.h2`
  
`;

export const Form = styled.form`
  width: 100%;
  padding-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Button = styled.button`

`;
