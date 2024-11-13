import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contato'

type FiltroState = {
  termo: string
  criterio: 'todas' | 'pessoal' | 'familia' | 'trabalho'
  valor?: enums.Contato
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const {alterarTermo} = filtroSlice.actions
export default filtroSlice.reducer
