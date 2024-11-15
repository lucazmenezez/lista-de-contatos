import styled from "styled-components";
import variaveis from "../../styles/variaveis";

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? variaveis.corAzul : variaveis.corCinza3 )};
  background-color: ${(props) => (props.ativo ? variaveis.branco : variaveis.branco2 )};
  color: ${(props) => (props.ativo ? variaveis.corAzul : variaveis.corCinza5 )};;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
  cursor: pointer;
  transition: transform .3s ease, background-color .3s ease, color .3s ease;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 767px) {
    padding: 24px 8px;
    text-align: center;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`
