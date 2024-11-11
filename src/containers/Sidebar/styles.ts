import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.corCinza};
  height: 100vh;
`

export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.corCinza4};
  border-color: ${variaveis.corCinza4};
  width: 100%;
`
