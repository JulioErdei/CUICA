import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./Home.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';
import Header from "../header/header";

function Home() {

  const [isPlaying, setIsPlaying] = useState(false);  // Estado para controlar o som
  const [audio] = useState(new Audio(backgroundMusic));  // Instância do áudio

  // Efeito para controlar o início/parada da música quando o estado mudar
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  // Alternar o estado do som (ativar/desativar)
  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };


  const navigate = useNavigate();

  return (
    <div className="cadastro-container">
      {/* <header className="menu-cadastro">                  
        <nav className="menu-options-cadastro">
          <a onClick={() => {navigate("/menu")}}>
            <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
          </a>
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/cadastro")}}>Cadastrar</a>
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/moedas")}}>Loja</a>
          <a onClick={toggleSound}>
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
        </nav>
      </header> */}
      <Header />
      <div className="Formhome1">
        <div className="logo-home">
        </div>
      </div>
    </div>
  );
}

export default Home;