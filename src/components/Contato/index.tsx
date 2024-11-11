import * as S from './styles'

const Contato = () => (
  <S.CardContato>
    <S.Etiqueta>Trabalho</S.Etiqueta>
    <div>
      <S.CampoContato>João</S.CampoContato>
      <S.CampoEmail>contatodojoao@gmail.com</S.CampoEmail>
      <S.CampoTel>41 92182-1821</S.CampoTel>
    </div>
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.CardContato>
)

export default Contato
