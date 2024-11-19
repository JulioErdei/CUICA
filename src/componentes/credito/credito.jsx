
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './credito.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';
import Header from "../header/header";


function Credito() {
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

  const userLocal = localStorage.getItem('username');

  const navigate = useNavigate();
  return (
  <div className="container">
      <Header />
        <div className="quadro">
            <div className='quadro-container'>
              <div className="title">Créditos</div>
                <div className='subtitle'>
                  <br></br><p>Este jogo foi realizado como parte do curso de Análise e
                  Desenvolvimento de Tecnologia na FATEC São Paulo.</p>
                </div>
                <div className='texto'>
                  <ul>
                    <li className='list-title'>Desenvolvimento Jogo e fucionalidades:</li>
                    <li className='list-text'>Renato Caetité</li>
                    <li className='list-text'>Guilherme Santos</li>
                    <li className='list-text'>Isabela Ramos</li>
                    <li className='list-title'>Desenvolvimento site:</li>
                    <li className='list-text'>Julio Cezar Erdei</li>
                    <li className='list-text'>Sofia de Mello</li>
                    <li className='list-text'>Tamires Barboza</li>
                    <li className='list-text'>Rodrigo Marcato </li>
                    <li className='list-text'>Pedro Henrique</li>
                    <li className='list-text'>Diogo Souza </li>
                    <li className='list-title'>Arte e Design: </li>
                    <li className='list-text'>Isabela Ramos</li>
                  </ul>
                </div>
                {userLocal ? (
                  <button type="submit" onClick={() => {navigate("/menuLogado")}}>Fechar</button>
                ):(
                  <button type="submit" onClick={() => {navigate("/menu")}}>Fechar</button>
                )}
            </div>
        </div>
    </div>
  );
}

export default Credito;