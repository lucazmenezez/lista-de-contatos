import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inter, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  html, body {
    height: 100%;
    overflow-y: auto;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    height: 100%;
    overflow: hidden;
  }
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.corCinza4};
  border: 2px solid ${variaveis.preto2};
  outline: none;
  width: 100%;

  @media (max-width: 767px) {
    padding: 16px 12px;
    font-size: 18px;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`


export default EstiloGlobal
