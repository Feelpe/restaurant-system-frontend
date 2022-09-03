import { useEffect, useState } from "react";

import { Container, Content, FoodBank } from "./styles";

export const Header = () => {
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
        <div>
          {logged ? (
            <>
              <a href="/profile">Usuário</a>
              <a href="/sair">Sair</a>
              <a href="/menu">Menu</a>
              <a href="/mesa">Mesas</a>
            </>
          ) : (
            <>
              <a href="/profile">Entre</a>
              <a href="/register">Cadastre-se</a>
            </>
          )}
        </div>
      </Content>
    </Container>
  );
};
