import styled from "styled-components";
import { Link } from "react-router-dom";
import variaveis from "../../styles/variaveis";

export const EstiloBotaoAdicionar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.corVerde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-size: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-3px);
    background-color: ${variaveis.corVerdeEscuro};
  }

  @media (max-width: 767px) {
    bottom: 20px;
    right: 20px;
  }
`
