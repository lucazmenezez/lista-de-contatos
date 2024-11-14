import BotaoAdicionar from "../../components/BotaoAdicionar"
import ContactList from "../../containers/ContactList"
import Sidebar from "../../containers/Sidebar"

const Home = () => {

  return (
    <>
      <Sidebar />
      <ContactList />
      <BotaoAdicionar />
    </>
  )
}

export default Home
