import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { editar, remover } from '../../store/reducers/contatos'
import ContatoClasse from '../../models/classe'

type Props = ContatoClasse

const Contato = ({ etiqueta, nome: nomeOriginal, email: emailOriginal, tel: telOriginal, id }: Props) => {

  const dispatch = useDispatch()

  const [editando, setEditando ] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telOriginal.length > 0) {
      setTel(telOriginal);
    }
  }, [telOriginal]);

  function cancelarEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTel(telOriginal)
  }


  return (
  <S.CardContato editando={editando}>
    <S.Etiqueta valorEtiqueta={etiqueta}>{etiqueta}</S.Etiqueta>
    <div>
      <S.CampoContato
      value={nome}
      onChange={(evento) => setNome(evento.target.value)}
      disabled={!editando}
      type='text'
      placeholder='Digite um Nome'
      />
      <S.CampoEmail
      value={email}
      onChange={(evento) => setEmail(evento.target.value)}
      disabled={!editando}
      type='email'
      placeholder='Digite um Email'
      />
      <S.CampoTel
      value={tel}
      onChange={(evento) => setTel(evento.target.value)}
      disabled={!editando}
      type='tel'
      placeholder='Digite um Telefone'
      />
    </div>
    <S.BarraAcoes>
      {editando ? (
        <>
          <S.BotaoSalvar onClick={() => {dispatch(editar({etiqueta, nome, email, tel, id})) ;setEditando(false)}}>Salvar</S.BotaoSalvar>
          <S.BotaoRemoverCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoRemoverCancelar>
        </>
      ) : (
        <>
          <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
          <S.BotaoRemoverCancelar onClick={() => dispatch(remover(id))}>Remover</S.BotaoRemoverCancelar>
        </>
      )}
    </S.BarraAcoes>
  </S.CardContato>
)
}

export default Contato
