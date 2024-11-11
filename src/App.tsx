import ContactList from "./containers/ContactList";
import Sidebar from "./containers/Sidebar";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </>
  )
}

export default App
