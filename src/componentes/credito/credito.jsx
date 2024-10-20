import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import './credito.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/sound-on.png';

// import soundOn from './images/sound-on.png';
// import soundOff from './images/sound-on.png';
// import audio from '../../../public/assets/sons/ambiente/ambiente1.wav'

function Credito() {
  const navigate = useNavigate();
  // const [sound, setSound] = useState(true);
  
  // const soundControl = () => {
  //   setSound(!sound);
  //     if(sound) {
  //       console.log("Som desligado");
  //       audio.play().catch(error => console.error("Erro ao tocar a música:", error));
  //     } else {
  //       console.log("Som ligado");
  //       audio.pause();
  //     }
  // }

  return (
  <div className="container">
      <header className="menu"> 
        <div className="menu-icon">
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo" />
        </div>
        <nav className="menu-options">
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/Cadastro")}}>Cadastrar</a>
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/skin")}}>Loja</a>
          <a href="#som">
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon" />
          </a>
           {/* <a onClick={soundControl}>
            <img src={sound ? soundOn : soundOff} alt="Som do Jogo" className="sound-icon" />
          </a> */}
        </nav>
      </header>
        <div className="quadro">
            <div className='quadro-container'>
              <div className="title">Créditos</div>
                <div className='subtitle'>
                  <p>Este jogo foi realizado como parte do curso de Análise e
                  Desenvolvimento de Tecnologia na FATEC São Paulo.</p>
                </div>
                <div className='texto'>
                  <ul>
                    <li className='list-title'>Desenvolvimento Jogo e fucionalidades:</li>
                    <li className='list-text'>Renato Caetité</li>
                    <li className='list-text'>Guilherme Santo</li>
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
              <button type="submit" onClick={() => {navigate("/menu")}}>Fechar</button>
            </div>
        </div>
    </div>
  );
}

export default Credito;