import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";

import {
  Loading,
  Container,
  Sidebar,
  Main,
  Button,
  DivButton,
  TextButton,
} from "./styles";
import { getLangsFrom, getUser, getRepos } from "../../services/api";

function RepositoriesPages() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setLanguages(getLangsFrom(reposResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (lang) => {
    setCurrentLanguage(lang);
  };

  if (loading) {
    return (
      <DivButton minHeight="100vh" erro="true">
        <Button to="/">
          <MdArrowBack />
          <TextButton>Voltar</TextButton>
        </Button>
        <Loading>Carregando...</Loading>
      </DivButton>
    );
  }

  return (
    <Container>
      <Sidebar>
        <DivButton>
          <Button to="/">
            <MdArrowBack />
            <TextButton>Voltar</TextButton>
          </Button>
        </DivButton>
        <Profile user={user} />
        <Filter
          onClickFilter={onFilterClick}
          currentLanguage={currentLanguage}
          languages={languages}
        />
      </Sidebar>
      <Main>
        <Repositories
          currentLanguage={currentLanguage}
          repositories={repositories}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPages;
