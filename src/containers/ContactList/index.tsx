import Contato from "../../components/Contato"
import { ListaDeContatos, Main } from "./styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"

const ContactList = () => {

  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Main>
      <p>
        2 contatos marcados como: "categoria" e "termo"
      </p>
      <ListaDeContatos>
        {itens.map(t => (
          <li key={t.nome}>
            <Contato etiqueta={t.etiqueta} nome={t.nome} email={t.email} tel={t.tel} id={t.id} />
          </li>
        ))}
      </ListaDeContatos>
    </Main>
  )
}

export default ContactList
