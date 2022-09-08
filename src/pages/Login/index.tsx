import { FormEvent, useState } from "react";

import { Container, Title, Form, Label, Input, Button } from "./styles";

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
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>Email</Label>
        <Input
          type="email"
          placeholder="Digite o email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <Label>Senha</Label>
        <Input
          type="password"
          placeholder="Digite a senha"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};
