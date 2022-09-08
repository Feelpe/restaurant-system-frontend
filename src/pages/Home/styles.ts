import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 80%;

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
