import styled from "styled-components";

import { BiEdit } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';
import { BsDoorOpenFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const OptionBar = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 3rem;
`;

export const NavButton = styled.button``;

export const Button = styled.button``;

export const Edit = styled(BiEdit)`
  color: #c7956d;
  font-size: 2rem;

  :hover{
    transform: scale(1.1);
    color: #f2d974;
  }
`;

export const Trash = styled(GoTrashcan)`
  color: #700006;
  font-size: 2rem;

  :hover{
    transform: scale(1.1);
    color: #9a0e24;
  }
`;

export const Exit = styled(BsDoorOpenFill)`
  color: #700006;
  font-size: 1.7rem;

  :hover{
    transform: scale(1.1);
    color: #9a0e24;
  }
`;

export const UserInfo = styled.div`
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 3rem;
`;

export const Text = styled.p``;
