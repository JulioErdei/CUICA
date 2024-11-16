import React, {useState, useRef, useEffect} from 'react';
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

  //recuperando dados da localStorage

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

  //recuperando LocalStorage
  const userLocal = localStorage.getItem('username');
  // var cont = 1
  // if(user !== null & cont === 1) {
  //   console.log(userLocal);
  //   cont = 2;
  // }

  return (
    <header className="menu-cadastro">
      

        {/* Exibindo o nome do usuário no canto direito */}
        {userLocal ? (
          <nav className="menu-options-cadastro">
          <a onClick={() => { navigate("/menuLogado"); }}>
            <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
          </a>
          <a onClick={() => { navigate("/tutorial"); }}>Regras</a>
          <a onClick={() => { navigate("/credito"); }}>Créditos</a>
          <a onClick={() => { navigate("/loja/moedas"); }}>Loja</a>
          <div className="user-info-cadastro" onClick={() => navigate("/conta")}>
              {/* <p>{user.username}</p> Nome do usuário, clicável */}
              <p>{userLocal}</p>
            </div>
            <a onClick={() => {navigate("/Logout")}}>Logout</a>
          <a onClick={toggleSound}>
            <img src={isSoundOn ? soundIcon : soundOffIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
        </nav>
        ): (
          <nav className="menu-options-cadastro">
        <a onClick={() => { navigate("/menu"); }}>
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
        </a>
        <a onClick={() => { navigate("/cadastro"); }}>Cadastro</a>
        <a onClick={() => { navigate("/login"); }}>Login</a>
        <a onClick={() => { navigate("/tutorial"); }}>Regras</a>
        <a onClick={() => { navigate("/credito"); }}>Créditos</a>
        <a onClick={toggleSound}>
          <img src={isSoundOn ? soundIcon : soundOffIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
        </a>
      </nav>
        )}
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