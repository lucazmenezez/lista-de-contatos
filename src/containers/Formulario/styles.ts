import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const ContainerForm = styled.div`
  background-color: ${variaveis.corCinza2};
  padding: 50px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;

  h2 {
    font-size: 28px;
    text-align: center;
    color: ${variaveis.preto2};
    margin-bottom: 24px;
  }

  form {
    border: 2px solid ${variaveis.corCinza3};
    border-radius: 12px;
    padding: 24px;
  }

  p {
    text-align: center;
    margin: 24px 0;
    font-size: 20px;
    color: ${variaveis.preto2};
  }
`

export const CampoTexto = styled.input`
  padding: 12px;
  width: 50%;
  margin: 0 auto 16px;
  border: 1px solid ${variaveis.corCinza};
  border-radius: 12px;
  font-size: 16px;
  color: ${variaveis.preto};
  display: block;

  &:focus {
    outline: none;
    border-color: ${variaveis.corCinza4};
    box-shadow: 0px 0px 4px ${variaveis.corCinza4};
  }
`

export const ContainerRadio = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input[type="radio"] {
    margin-right: 6px;
  }
`

export const RadioLabel = styled.label`
  font-size: 16px;
  color: ${variaveis.preto};
  margin-right: 8px;
  cursor: pointer;
  text-transform: capitalize;
`

export const ContainerBotao = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const Botao = styled.button`
  padding: 12px 18px;
  margin: 0 auto;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: ${variaveis.corVerde};
  border: 2px solid ${variaveis.corVerde};
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.4s ease, color .4s ease ;

  &:hover {
    background-color: transparent;
    color: ${variaveis.corVerde};
  }
`
