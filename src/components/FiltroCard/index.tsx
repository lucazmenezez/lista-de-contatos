import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/contato'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'todos' | 'pessoal' | 'familia' | 'trabalho'
  valor?: enums.Contato
}

const FiltroCard = ({legenda, criterio, valor}: Props) => {

  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const filtrar = () => {
    dispatch(alterarFiltro({
      criterio,
      valor
    }))
  }

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarContatos = () => {
    if (criterio === 'todos') return contatos.itens.length
    if (criterio === 'familia') {
      return contatos.itens.filter((item) => item.etiqueta === valor).length
    }
    if (criterio === 'pessoal') {
      return contatos.itens.filter((item) => item.etiqueta === valor).length
    }
    if (criterio === 'trabalho') {
      return contatos.itens.filter((item) => item.etiqueta === valor).length
    }
  }

  const ativo = verificaEstaAtivo()
  const contador = contarContatos()

  return (
  <>
    <S.Card onClick={filtrar} ativo={ativo} >
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  </>
)
}

export default FiltroCard
