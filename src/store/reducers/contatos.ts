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
      tel: '41987654321',
      id: 1
    },
    {
      etiqueta: enums.Contato.PESSOAL,
      nome: 'Marcio',
      email: 'contatodomarcio@gmail.com',
      tel: '41987654321',
      id: 2
    },
    {
      etiqueta: enums.Contato.FAMILIA,
      nome: 'Ana',
      email: 'contatodaana@gmail.com',
      tel: '41987654321',
      id: 3
    },
    {
      etiqueta: enums.Contato.PESSOAL,
      nome: 'Carla',
      email: 'carladasilva@gmail.com',
      tel: '41987654321',
      id: 4
    },
    {
      etiqueta: enums.Contato.FAMILIA,
      nome: 'Edmilton',
      email: '21211edmilton@gmail.com',
      tel: '41987654321',
      id: 5
    }
  ]
}

const SliceContatos = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(tarefa => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexTarefa = state.itens.findIndex((t) => t.id === action.payload.id)

      if (indexTarefa >= 0) {
        state.itens[indexTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.nome.toLowerCase() === action.payload.nome.toLowerCase())

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(tarefaNova)
      }
    }
  }
})

export const {remover, editar, cadastrar} = SliceContatos.actions
export default SliceContatos.reducer
