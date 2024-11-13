import Contato from "../../components/Contato"
import { ListaDeContatos, Main } from "./styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"
import * as enums from '../../utils/enums/contato'

const ContactList = () => {

  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatoFiltrados = itens
    if (termo !== undefined) {
      contatoFiltrados = contatoFiltrados.filter(
        (contato) =>
          contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'trabalho') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.etiqueta === valor
        )
      } else if (criterio === 'pessoal') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.etiqueta === valor
        )
      } else if (criterio === 'familia') {
        contatoFiltrados = contatoFiltrados.filter(
          (contato) => contato.etiqueta === valor
        )
      }

      return contatoFiltrados

    } else {
      return itens
    }
  }

  return (
    <Main>
      <p>
        2 contatos marcados como: "categoria" e "{termo}"
      </p>
      <ul>
        <li>{termo}</li>
        <li>{criterio}</li>
        <li>{valor}</li>
      </ul>
      <ListaDeContatos>
        {filtraContatos().map(t => (
          <li key={t.nome}>
            <Contato etiqueta={t.etiqueta} nome={t.nome} email={t.email} tel={t.tel} id={t.id} />
          </li>
        ))}
      </ListaDeContatos>
    </Main>
  )
}

export default ContactList
