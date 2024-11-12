import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/classe";
import * as enums from '../../utils/enums/contato'

const SliceContatos = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(enums.Contato.TRABALHO, 'João', 'contatodojoao@gmail.com', 41987654321, 1),
    new Contato(enums.Contato.PESSOAL, 'Marcio', 'contatodomarcio@gmail.com', 41987654321, 2),
    new Contato(enums.Contato.FAMILIA, 'Ana', 'contatodaana@gmail.com', 41987654321, 3),
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter(tarefa => tarefa.id !== action.payload)
    }
  }
})

export const {remover} = SliceContatos.actions
export default SliceContatos.reducer
