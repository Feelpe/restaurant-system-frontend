import axios from "axios";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Container, Form, Input, Label, Title } from "./styles";

export const Update = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [user, setUser] = useState({});

  const [logged, setLogged] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const updatedUser = {
      email,
      firstName,
      lastName,
    };

    const token = localStorage.token;

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .patch("/user", updatedUser, config)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
      });
  };

  useEffect(() => {
    const token = localStorage.token;

    if (!token) {
      setLogged(false);
      setShowError(true);
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.get("/auth", config).then((response) => {
      setLogged(true);
      setUser(response.data);
    });
  }, [logged]);

  return (
    <Container>
      <Card>
        <Title>Editar Conta</Title>
      </Card>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            // placeholder={`${user.email}`}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Label>Nome</Label>
          <Input
            type="text"
            // placeholder={`${user.firstName}`}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Label>Sobrenome</Label>
          <Input
            type="text"
            // placeholder={`${user.lastName}`}
            onChange={(event) => setLastName(event.target.value)}
          />
          <button type="submit">Editar</button>
        </Form>
      </Card>
    </Container>
  );
};
