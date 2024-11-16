import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../axios/userContext'; // Importa o hook do contexto
import './header.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import soundOffIcon from './images/icon-sound-off2.png';
import backgroundMusic from './sons/ambiente2.wav';

const Header = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isSoundOn, setIsSoundOn] = useState(false);
  const audioRef = useRef(null);

  // Controle de áudio
  useEffect(() => {
    audioRef.current = new Audio(backgroundMusic);
    if (isSoundOn) {
      audioRef.current.play().catch(err => console.error("Erro ao reproduzir áudio:", err));
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isSoundOn]);

  const toggleSound = () => {
    if (isSoundOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error("Erro ao reproduzir áudio:", err));
    }
    setIsSoundOn(!isSoundOn);
  };

  const userLocal = localStorage.getItem('username');

  return (
    <header className="menu-cadastro">
      <nav className="menu-options-cadastro">
        {userLocal ? (
          <>
            <Link to="/menuLogado">
              <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
            </Link>
            <Link to="/tutorial">Regras</Link>
            <Link to="/credito">Créditos</Link>
            <Link to="/loja/moedas">Loja</Link>
            <div className="user-info-cadastro" onClick={() => navigate("/conta")}>
              <p>{userLocal}</p>
            </div>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/menu">
              <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
            </Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/login">Login</Link>
            <Link to="/tutorial">Regras</Link>
            <Link to="/credito">Créditos</Link>
          </>
        )}
        <a onClick={toggleSound} >
          <img src={isSoundOn ? soundIcon : soundOffIcon} alt="Som do Jogo" className="sound-icon-cadastro"/>
        </a>
      </nav>
    </header>
  );
};

export default Header;





// import React, {useState, useRef, useEffect} from 'react';
// import './header.css'
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../../axios/userContext'; // Importa o hook do contexto
// import gameIcon from './images/icon2.png'; // Importe seu ícone de jogo (ajuste o caminho conforme necessário)
// import soundIcon from './images/soundicon.png'; // Importe o ícone de som (ajuste o caminho conforme necessário)
// import soundOffIcon from './images/icon-sound-off.png'
// import backgroundMusic from './sons/ambiente2.wav';

// const Header = () => {
//   const navigate = useNavigate(); // Função de navegação
//   const { user } = useUser(); // Acesso ao usuário do contexto

//   const [isSoundOn, setIsSoundOn] = useState(true);
//   const audioRef = useRef(new Audio(backgroundMusic)); // Refs para controlar o áudio

//   // Função para alternar o som (exemplo)
//   const toggleSound = () => {
//     if (isSoundOn) {
//       audioRef.current.pause(); // Pausa a música
//     } else {
//       audioRef.current.play(); // Começa a música
//     }
//     setIsSoundOn(!isSoundOn);
//   };

//   //dividir header para quem esta logado e quem não está =============================
//   return (
//     <header className="menu-cadastro">
//       <nav className="menu-options-cadastro">
//         <a onClick={() => {localStorage.clear()}}>limpa</a>
//         <a onClick={() => { navigate("/menu"); }}>
//           <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
//         </a>
//         <a onClick={() => { navigate("/cadastro"); }}>Cadastro</a>
//         <a onClick={() => { navigate("/login"); }}>Login</a>
//         <a onClick={() => { navigate("/tutorial"); }}>Regras</a>
//         <a onClick={() => { navigate("/credito"); }}>Créditos</a>
//         <a onClick={() => { navigate("/loja/moedas"); }}>Loja</a>
//         <a onClick={() => {navigate("/Logout")}}>Logout</a>

//         {/* Exibindo o nome do usuário no canto direito */}
//         {user && (
//           <div className="user-info-cadastro" onClick={() => navigate("/perfil")}>
//             <p>{user.username}</p> {/* Nome do usuário, clicável */}
//           </div>
//         )}

//         <a onClick={toggleSound}>
//           <img src={isSoundOn ? soundIcon : soundOffIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
//         </a>
//       </nav>
//     </header>
//   );
// };

// export default Header;