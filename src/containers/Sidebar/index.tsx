import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCard"
import { Campo } from "../../styles"
import * as S from './styles'
import { RootReducer } from "../../store"
import { alterarTermo } from "../../store/reducers/filtro"
import * as enums from '../../utils/enums/contato'

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
          <FiltroCard legenda="Pessoal" criterio="pessoal" valor={enums.Contato.PESSOAL} />
          <FiltroCard legenda="Família" criterio="pessoal" valor={enums.Contato.FAMILIA} />
          <FiltroCard legenda="Trabalho" criterio="trabalho" valor={enums.Contato.TRABALHO} />
          <FiltroCard legenda="Todos" criterio="todos"  />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}




export default Sidebar
