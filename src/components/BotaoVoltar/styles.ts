import styled from "styled-components";
import { Link } from "react-router-dom";
import variaveis from "../../styles/variaveis";

export const EstiloBotaoVoltar = styled(Link)`
  display: flex;
  background-color: ${variaveis.corVermelho};
  color: #fff;
  position: fixed;
  top: 8px;
  left: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`
