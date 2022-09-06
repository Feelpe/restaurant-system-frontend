import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const Image = styled.img`
  height: 70vh;
  width: 100%;

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

export const Caption = styled(Carousel)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    background-color: #00000080;
    padding: 0.2rem;
    border-radius: 5%;
  }

  p {
    background-color: #00000080;
    padding: 0.2rem;
    border-radius: 5%;
  }
`;
