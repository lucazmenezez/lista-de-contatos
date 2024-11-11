import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Props } from ".";

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? variaveis.corAzul : variaveis.corCinza3 )};
  background-color: ${(props) => (props.ativo ? variaveis.branco : variaveis.branco2 )};
  color: ${(props) => (props.ativo ? variaveis.corAzul : variaveis.corCinza5 )};;
  border-radius: 8px;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
