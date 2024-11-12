import Contato from "../../components/Contato"
import { ListaDeContatos, Main } from "./styles"
import * as enums from '../../utils/enums/contato'

const contatos = [
  {
    etiqueta: enums.Contato.TRABALHO,
    nome: 'João',
    email: 'contatodojoao@gmail.com',
    tel: 41919191919
  },
  {
    etiqueta: enums.Contato.PESSOAL,
    nome: 'Marcio',
    email: 'contatodomarcio@gmail.com',
    tel: 55919191919
  },
  {
    etiqueta: enums.Contato.FAMILIA,
    nome: 'Ana',
    email: 'contatodaana@gmail.com',
    tel: 41919191919
  }
]

const ContactList = () => (
  <Main>
    <p>
      2 contatos marcados como: "categoria" e "termo"
    </p>
    <ListaDeContatos>
      {contatos.map(t => (
        <li key={t.nome}>
          <Contato etiqueta={t.etiqueta} nome={t.nome} email={t.email} tel={t.tel} />
        </li>
      ))}
    </ListaDeContatos>
  </Main>
)

export default ContactList
