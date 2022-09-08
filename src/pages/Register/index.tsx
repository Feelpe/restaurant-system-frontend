import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Form, Label, Input, Button  } from "./styles";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event: FormEvent) => {
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
        navigate("/profile");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <Container>
      <Title>Criar uma Conta</Title>
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
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};
