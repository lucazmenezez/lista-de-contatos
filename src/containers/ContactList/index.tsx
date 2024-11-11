import Contato from "../../components/Contato"
import { ListaDeContatos, Main } from "./styles"

const contatos = [
  {
    etiqueta: 'Trabalho',
    nome: 'João',
    email: 'contatodojoao@gmail.com',
    tel: 41919191919
  },
  {
    etiqueta: 'Pessoal',
    nome: 'Marcio',
    email: 'contatodomarcio@gmail.com',
    tel: 55919191919
  },
  {
    etiqueta: 'Família',
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
