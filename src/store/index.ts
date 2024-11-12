import { configureStore } from "@reduxjs/toolkit";
import ContatosReducer from './reducers/contatos'

export const store = configureStore({
  reducer: {
    contatos: ContatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
