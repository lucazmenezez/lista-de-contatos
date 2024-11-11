import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: inter, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default EstiloGlobal
