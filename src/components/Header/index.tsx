import { useEffect, useState } from "react";

import { Container, Content, FoodBank, Nav } from "./styles";

interface HeaderProps {
  onOpenExitUserModal: () => void;
}

export const Header = ({ onOpenExitUserModal }: HeaderProps) => {
  const token = localStorage.token;
  const [logged, setLogged] = useState(Boolean);
  
  useEffect(() => {
    if (!token) {
      setLogged(false);
    }
    else {
      setLogged(true);
    }
  }, [token]);

  return (
    <Container>
      <Content>
        <a href="/"><FoodBank /></a>
        <Nav>
          {logged ? (
            <>
              <a href="/profile">Usuário</a>
              <a href="/menu">Menu</a>
              <button 
                onClick={onOpenExitUserModal}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <a href="/login">Entre</a>
              <a href="/cadastro">Cadastre-se</a>
            </>
          )}
        </Nav>
      </Content>
    </Container>
  );
};
