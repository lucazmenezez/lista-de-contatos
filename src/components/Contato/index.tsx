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
    <S.Etiqueta>{etiqueta}</S.Etiqueta>
    <div>
      <S.CampoContato value={nome} disabled type='text' placeholder='João' />
      <S.CampoEmail value={email} disabled type='email' placeholder='contatodojoao@gmail.com' />
      <S.CampoTel value={tel} disabled type='tel' placeholder='41 92182-1821' />
    </div>
    <S.BarraAcoes>
      {editando ? (
        <>
          <S.Botao>Salvar</S.Botao>
          <S.Botao onClick={() => setEditando(false)}>Cancelar</S.Botao>
        </>
      ) : (
        <>
          <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
          <S.Botao>Remover</S.Botao>
        </>
      )}
    </S.BarraAcoes>
  </S.CardContato>
)
}

export default Contato
