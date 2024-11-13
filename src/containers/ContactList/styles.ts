import styled from "styled-components";

export const Main = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const ListaDeContatos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`

export const Resultado = styled.p`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`
