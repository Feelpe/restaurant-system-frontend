import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Input, Label, Title } from "./styles";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputUser = {
      email,
      firstName,
      lastName,
      password,
      passwordConfirmation,
    };

    axios
      .post("/user", inputUser)
      .then((response) => {
        console.log(response.message);
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container className="d-flex flex-column mb-3 align-items-center">
      <Card className="mb-2 mt-2 p-3 shadow-sm w-50">
        <Title>Criar uma Conta</Title>
      </Card>
      <Card className="mb-3 p-3 shadow-sm w-50">
        <Form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Nome"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Label>Sobrenome</Label>
          <Input
            type="text"
            placeholder="Sobrenome"
            onChange={(event) => setLastName(event.target.value)}
          />
          <Label>Senha</Label>
          <Input
            type="password"
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Label>Confirmar Senha</Label>
          <Input
            type="password"
            placeholder="Confirmação da senha"
            onChange={(event) => setPasswordConfirmation(event.target.value)}
          />
          <button type="submit">Criar</button>
        </Form>
      </Card>
    </Container>
  );
};
