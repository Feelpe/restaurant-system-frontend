import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Card, Title, Form, Button, Container, Summary, Input } from "./styles";

interface Prato {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  options: string;
}

export const Menu = () => {
  const [menu, setMenu] = useState<Prato[]>([]);
  const [logged, setLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/menu/add");
  };

  const getMenu = async () => {
    await api.get("/menu").then((response) => {
      setMenu(response.data);
    });
    setIsLoading(false);
  };

  const filteredMenus =
    search.length > 0 ? menu.filter((item) => item.title.includes(search)) : [];

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
    } else {
      setLogged(true);
    }

    getMenu();
  }, []);

  return (
    <Container>
      <Form>
        <Input
          type="search"
          placeholder="Encontre um Item do Cardápio"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      {logged && <Button onClick={handleNavigate} />}
      <Summary>
        <>
          {
            search.length > 0
              ? filteredMenus.map((item) => {
                  <a href={`/menu/${item.id}`} key={item.id}>
                    <Card>
                      <img alt="imagem" src={item.imageUrl} />
                      <Title>{item.title}</Title>
                    </Card>
                  </a>;
                })
              : menu.map((item) => (
                  <a href={`/menu/${item.id}`} key={item.id}>
                    <Card>
                      <img alt="imagem" src={item.imageUrl} />
                      <Title>{item.title}</Title>
                    </Card>
                  </a>
                ))
            // {isLoading && (<Card><Loading /></Card>)}
          }
        </>
      </Summary>
    </Container>
  );
};
