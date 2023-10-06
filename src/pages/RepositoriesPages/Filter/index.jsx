import React from "react";
import PropTypes from "prop-types";

import { Container, Cleaner, Selector } from "./styles";

function Filter({ languages, currentLanguage, onClickFilter }) {
  const selectors = languages.map(({ nome, count, color }) => (
    <Selector
      onClick={() => onClickFilter(nome)}
      className={currentLanguage === nome ? "selected" : ""}
      color={color}
      key={nome.toLowerCase()}
    >
      <span>{nome}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClickFilter && onClickFilter(undefined)}>Limpar</Cleaner>
    </Container>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClickFilter: null,
};

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClickFilter: PropTypes.func,
};

export default Filter;
