import styled from "styled-components";

export const Loading = styled.div`
  border: 4px solid hsla(100, 100%, 10%, 0.5);
  border-top-color: #000;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;