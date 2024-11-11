import React, { useState } from "react";
import "./Confirmarcompra.css";
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';
import coinImage from "./img/Bastante.png";
import Header from "../header/header";

function Confirmarcompra() {
  const [formData, setFormData] = useState({
    novasenha: "",
    confirmenovasenha: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // chamada para o backend
    console.log(formData);
  };

  return (

        <div class="Confirmarcompra-container">
          {/* <header className="menu">
        <div className="menu-icon">
        <img src={gameIcon} alt="Jogo da Onça" className="game-logo" />
        </div>
        <nav className="menu-options">
          <a href="#creditos">Créditos</a>
          <a href="#regras">Regras</a>
          <a href="#jogar">Jogar</a>
          <a href="#cadastrar">Cadastrar</a>
          <a href="#shop">Shop</a>
          <a href="#som">
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon" />
          </a>
        </nav>
      </header> */}
      <Header />
        <div className="form-background">
            <form onSubmit={handleSubmit}>
              <div className="Confirmarcompra-title">Adquirir Moedas?</div>
              <div className="image-container">
              <img src={coinImage} alt="Imagem de Moeda" className="coin-image" />
              </div>
              <div className="nome-item-loja-moeda">
              <h1>Descrição: 1.000 MOEDAS</h1>
              <h1>Total: R$20,00</h1>
              </div>
        <button onClick={onclick} className="close-button">
          X
        </button>
        <button type="submit">Finalizar compra</button>
      </form>
    </div>
    </div>
  );

}

export default Confirmarcompra;
