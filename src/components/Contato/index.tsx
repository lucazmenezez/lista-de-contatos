import { useState } from 'react'
import * as S from './styles'

type Props = {
  etiqueta: string
  nome: string
  email: string
  tel: number
}

const Contato = ({ etiqueta, nome, email, tel }: Props) => {

  const [editando, setEditando ] = useState(false)

  return (
  <S.CardContato>
    <S.Etiqueta valorEtiqueta={etiqueta as 'Trabalho' | 'Pessoal' | 'Família'}>{etiqueta}</S.Etiqueta>
    <div>
      <S.CampoContato value={nome} disabled type='text' placeholder='João' />
      <S.CampoEmail value={email} disabled type='email' placeholder='contatodojoao@gmail.com' />
      <S.CampoTel value={tel} disabled type='tel' placeholder='41 92182-1821' />
    </div>
    <S.BarraAcoes>
      {editando ? (
        <>
          <S.BotaoSalvar>Salvar</S.BotaoSalvar>
          <S.BotaoRemoverCancelar onClick={() => setEditando(false)}>Cancelar</S.BotaoRemoverCancelar>
        </>
      ) : (
        <>
          <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
          <S.BotaoRemoverCancelar>Remover</S.BotaoRemoverCancelar>
        </>
      )}
    </S.BarraAcoes>
  </S.CardContato>
)
}

export default Contato
