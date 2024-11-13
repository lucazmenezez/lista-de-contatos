import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'

type FiltroState = {
  termo?: string
  criterio: 'todos' | 'pessoal' | 'familia' | 'trabalho'
  valor?: enums.Contato
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})

export const {alterarTermo, alterarFiltro} = filtroSlice.actions
export default filtroSlice.reducer
