import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import * as enums from '../../utils/enums/contato'

type EtiquetaProps = {
  valorEtiqueta?: enums.Contato
}

function retornaCorFundo(props: EtiquetaProps) {
  if (props.valorEtiqueta === enums.Contato.TRABALHO) {
    return variaveis.corAmarelo;
  } else if (props.valorEtiqueta === enums.Contato.PESSOAL) {
    return variaveis.corCinza3;
  } else if (props.valorEtiqueta === enums.Contato.FAMILIA) {
    return variaveis.corAzul;
  }
}

export const CardContato = styled.div<{ editando: boolean }>`
  background-color: ${({ editando }) => (editando ? variaveis.corCinza : variaveis.branco2)};
  box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
  padding: 16px;
  border: 2px solid ${({editando}) => editando ? variaveis.preto : 'transparent'};
  border-radius: 12px;
  transition: background-color .4s ease, border .4s ease;

  &:hover {
    border: 2px solid ${({editando}) => editando ? variaveis.preto : variaveis.corAzul};
  }

  div {
    margin-top: 8px;
  }
`

export const Etiqueta = styled.span<EtiquetaProps>`
  padding: 4px 8px;
  color: ${variaveis.preto};
  background-color: ${(props) => retornaCorFundo(props)};
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
`

export const CampoContato = styled.input`
  display: block;
  padding: 8px;
  font-weight: bold;
  font-size: 18px;
  border: none;
  color: ${variaveis.preto};
  margin-bottom: 4px;
  width: 100%;
  background-color: transparent;
`

export const CampoEmail = styled(CampoContato)`
  font-weight: 400;
  font-size: 16px;
  color: ${variaveis.preto};
`

export const CampoTel = styled(CampoContato)`
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 0;
  color: ${variaveis.preto};
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

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corVerde};

  &:hover {
    background-color: ${variaveis.corVerdeEscuro};
  }
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.corVermelho};

  &:hover {
    background-color: ${variaveis.corVermelhoEscuro};
  }
`
