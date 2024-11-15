import styled from "styled-components";

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 767px) {
    height: 100%;
    padding: 20px;
  }
`

export const ListaDeContatos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
