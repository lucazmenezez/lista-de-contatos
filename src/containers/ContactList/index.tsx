import Contato from "../../components/Contato"
import { ListaDeContatos, Main } from "./styles"

const ContactList = () => (
  <Main>
    <p>
      2 contatos marcados como: "categoria" e "termo"
    </p>
    <ListaDeContatos>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ListaDeContatos>
  </Main>
)

export default ContactList
