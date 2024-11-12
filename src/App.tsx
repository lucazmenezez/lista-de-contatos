import { Provider } from "react-redux";
import ContactList from "./containers/ContactList";
import Sidebar from "./containers/Sidebar";
import EstiloGlobal, { Container } from "./styles";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
