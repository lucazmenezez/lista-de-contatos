import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCard"
import { Campo } from "../../styles"
import * as S from './styles'
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"

const Sidebar = () => {

  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
        value={termo}
        onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        type="text"
        placeholder="Buscar contato..."
        />
        <S.Filtros>
          <FiltroCard contador={1} legenda="Pessoal" />
          <FiltroCard contador={2} legenda="Família" />
          <FiltroCard contador={3} legenda="Trabalho" />
          <FiltroCard contador={4} legenda="Todos" ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}




export default Sidebar
