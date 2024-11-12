import * as enums from '../utils/enums/contato'

class ContatoClasse {
  etiqueta: enums.Contato
  nome: string
  email: string
  tel: number
  id: number

  constructor(etiqueta: enums.Contato, nome: string, email: string, tel: number, id: number) {
    this.etiqueta = etiqueta
    this.nome = nome
    this.email = email
    this.tel = tel
    this.id = id
  }
}

export default ContatoClasse
