import { FormEvent, useState } from "react";

import { Container, Card, Title, Input, Form } from "./styles";

import { api } from "../../services/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const inputLogin = {
      email,
      password,
    };

    api
      .post("/auth", inputLogin)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        // window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
      </Card>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Form>
            <Form>Email</Form>
            <Input
              type="email"
              placeholder="Digite o email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form>
          <Form>
            <Form>Senha</Form>
            <Input
              type="password"
              placeholder="Digite a senha"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </Form>
          <button type="submit">Entrar</button>
        </Form>
      </Card>
    </Container>
  );
};
