import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Campo } from "../../styles";

export const CardContato = styled.div`
  background-color: ${variaveis.branco2};
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
  padding: 16px;
  border: 2px solid transparent;
  border-radius: 12px;
  transition: background-color .4s ease;

  &:hover {
    border: 2px solid ${variaveis.corAzul};
  }
`

export const Etiqueta = styled.span`
  padding: 4px 8px;
  color: ${variaveis.preto};
  background-color: ${variaveis.corCinza3};
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
`

export const CampoContato = styled.span`
  display: block;
  padding: 8px;
  font-weight: bold;
  font-size: 18px;
`

export const CampoEmail = styled(CampoContato)`
  font-weight: 400;
  font-size: 16px;
  color: ${variaveis.corCinza3};
`

export const CampoTel = styled(CampoContato)`
  font-weight: 400;
  font-size: 16px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: ${variaveis.branco};
  padding: 8px 12px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${variaveis.preto2};
  margin-right: 8px;
  transition: background-color .4s ease;

  &:hover {
    background-color: ${variaveis.preto};
    transform: scale(1.05);
  }
`