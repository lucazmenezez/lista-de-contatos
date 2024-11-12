import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/classe";
import * as enums from '../../utils/enums/contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      etiqueta: enums.Contato.TRABALHO,
      nome: 'João',
      email: 'contatodojoao@gmail.com',
      tel: 41987654321,
      id: 1
    },
    {
      etiqueta: enums.Contato.PESSOAL,
      nome: 'Marcio',
      email: 'contatodomarcio@gmail.com',
      tel: 41987654321,
      id: 2
    },
    {
      etiqueta: enums.Contato.FAMILIA,
      nome: 'Ana',
      email: 'contatodaana@gmail.com',
      tel: 41987654321,
      id: 3
    }
  ]
}

const SliceContatos = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
    }
  }
})

export const {remover} = SliceContatos.actions
export default SliceContatos.reducer
