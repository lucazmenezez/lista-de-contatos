import { FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Titulo } from "../../styles"
import * as S from "./styles"
import * as enums from '../../utils/enums/contato'
import { cadastrar } from "../../store/reducers/contatos"

const Formulario = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [contatos, setContatos] = useState(enums.Contato.FAMILIA)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    if (nome.trim().split(" ").length < 2) {
      alert("Por favor, insira o nome completo.");
      return;
    }

    const telValido = /^\d{8,}$/.test(tel.trim());
    if (!telValido) {
      alert("O telefone deve conter pelo menos 8 dígitos e apenas números.");
      return;
    }

    dispatch(cadastrar({
      etiqueta: contatos,
      nome,
      email,
      tel
    }))
    navigate('/')
  }

  return (
    <S.ContainerForm>
      <form onSubmit={cadastrarTarefa}>
        <Titulo>Novo Contato</Titulo>
        <S.CampoTexto
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Insira o nome completo"
        />
        <S.CampoTexto
        type="email"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        placeholder="exemplo@gmail.com"
        />
        <S.CampoTexto
        type="tel"
        value={tel}
        onChange={({target}) => setTel(target.value)}
        placeholder="00 0000-0000"
        />
        <p>Escolha uma Categoria</p>
        <S.ContainerRadio>
          {Object.values(enums.Contato).map((contatos) => (
            <div key={contatos}>
              <input
              type="radio"
              name="categoria"
              id={contatos}
              value={contatos}
              defaultChecked={contatos === enums.Contato.TRABALHO}
              onChange={(evento) => setContatos(evento.target.value as enums.Contato)}
              />
              <S.RadioLabel htmlFor={contatos}>{contatos}</S.RadioLabel>
            </div>
          )
          )}
        </S.ContainerRadio>
        <S.ContainerBotao>
          <S.Botao type="submit">Cadastrar Novo Contato</S.Botao>
        </S.ContainerBotao>
      </form>
    </S.ContainerForm>
  )
}


export default Formulario
