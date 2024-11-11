import React, {useState, useRef} from 'react';
import './header.css'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../axios/userContext'; // Importa o hook do contexto
import gameIcon from './images/icon2.png'; // Importe seu ícone de jogo (ajuste o caminho conforme necessário)
import soundIcon from './images/soundicon.png'; // Importe o ícone de som (ajuste o caminho conforme necessário)
import soundOffIcon from './images/icon-sound-off.png'
import backgroundMusic from './sons/ambiente2.wav';

const Header = () => {
  const navigate = useNavigate(); // Função de navegação
  const { user } = useUser(); // Acesso ao usuário do contexto

  const [isSoundOn, setIsSoundOn] = useState(true);
  const audioRef = useRef(new Audio(backgroundMusic)); // Refs para controlar o áudio

  // Função para alternar o som (exemplo)
  const toggleSound = () => {
    if (isSoundOn) {
      audioRef.current.pause(); // Pausa a música
    } else {
      audioRef.current.play(); // Começa a música
    }
    setIsSoundOn(!isSoundOn);
  };

  return (
    <header className="menu-cadastro">
      <nav className="menu-options-cadastro">
        <a onClick={() => { navigate("/menu"); }}>
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
        </a>
        <a onClick={() => { navigate("/login"); }}>Login</a>
        <a onClick={() => { navigate("/tutorial"); }}>Regras</a>
        <a onClick={() => { navigate("/credito"); }}>Créditos</a>
        <a onClick={() => { navigate("/loja/moedas"); }}>Loja</a>
        <a onClick={() => {navigate("/Logout")}}>Log Out</a>

        {/* Exibindo o nome do usuário no canto direito */}
        {user && (
          <div className="user-info-cadastro" onClick={() => navigate("/perfil")}>
            <p>{user.username}</p> {/* Nome do usuário, clicável */}
          </div>
        )}

        <a onClick={toggleSound}>
          <img src={isSoundOn ? soundIcon : soundOffIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
        </a>
      </nav>
    </header>
  );
};

export default Header;