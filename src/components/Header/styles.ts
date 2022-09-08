import styled from "styled-components";

import { MdOutlineFoodBank } from 'react-icons/md';

export const Container = styled.header`
  background: var(--backHeader);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 3em 1rem;

  a {
    color: var(--yellow);
    text-decoration: none;
  }

  button {
    background-color: var(--beige);
    :hover {
      background-color: var(--backHeader);
    }
  }
`;

export const Nav = styled.nav`
  padding: 0rem 1rem;

  a {
    padding-left: 1rem;
  }
`;

export const FoodBank = styled(MdOutlineFoodBank)`
  height: 3rem;
  width: 3rem;
`;
