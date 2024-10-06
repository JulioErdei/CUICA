import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./Home.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';

function Home() {

  const navigate = useNavigate();
  const { toggleMusica, musicaStatus } = useSomAmbiente();

  return (
    <div className="cadastro-container">
      <header className="menu-cadastro"> 
        <div className="menu-icon-cadastro">
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
        </div>
        <nav className="menu-options-cadastro">
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/Cadastro")}}>Cadastrar</a>
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/skin")}}>Loja</a>
          <a href="#som">
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
          </nav>
      </header>
      <div className="logo-home">
        
      </div>
    </div>
  );
}

export default Home;