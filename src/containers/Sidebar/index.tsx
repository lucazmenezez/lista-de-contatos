import FiltroCard from "../../components/FiltroCard"
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar contato..." />
      <S.Filtros>
        <FiltroCard contador={1} legenda="Pessoal" />
        <FiltroCard contador={2} legenda="Família" />
        <FiltroCard contador={3} legenda="Trabalho" />
        <FiltroCard contador={4} legenda="Todos" ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default Sidebar
