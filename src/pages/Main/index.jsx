import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container, Form, Logo, Title, Input, Button } from "./styles";
import githubLogo from "../../assets/images/github-logo.svg";

function Main() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <Logo src={githubLogo} alt="logo github" />
      <Title>API Github</Title>
      <Form>
        <Input
          placeholder="Usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default Main;
