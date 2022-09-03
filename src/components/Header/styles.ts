import styled from "styled-components";

import { MdOutlineFoodBank } from 'react-icons/md';

export const Container = styled.header`
  background: var(--backHeader);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 1rem 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #f2d974;
    margin-left: 0.5rem;
    text-decoration: none;
  }

  button {
    background-color: #965d62;
    :hover {
      background-color: #c7956d;
    }
  }
`;

export const FoodBank = styled(MdOutlineFoodBank)`
  font-size: 3rem;
`;
