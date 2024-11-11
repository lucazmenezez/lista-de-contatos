import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Props } from ".";

type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? variaveis.corAzul : variaveis.corCinza3 )};
  background-color: ${(props) => (props.ativo ? variaveis.branco : variaveis.branco2 )};
  color: ${(props) => (props.ativo ? variaveis.corAzul : variaveis.corCinza5 )};;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
