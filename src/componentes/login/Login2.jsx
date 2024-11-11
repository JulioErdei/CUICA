import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./Login2.css"; 
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';
import api from '../../axios/config';
import { useUser } from "../../axios/userContext";
import Header from "../header/header";

function Login() {
  const navigate = useNavigate();
  
  const {user, setUser} = useUser();
  const [email, setEmail] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [error, setError] = useState(null);

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

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api.post('/login/enter', { email, passwordHash });
      if(response.status == 200) {
        console.log('Login com sucesso');
        const loggedInUser = response.data;
        setUser(loggedInUser);
        console.log(loggedInUser.username);
        console.log(user)
        navigate('/menu');
      }
    }catch(err) {
      setError('credenciais inválidas');
    }
  };

  return (

    <div className="Login-container">
      <Header />
      <div className="form-background">
            <form onSubmit={handleSubmit}>
              <div className="Login-title">Login</div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="passwordHash">Senha</label>
        <input
          type="password"
          name="senha"
          value={passwordHash}
          onChange={(e) => setPasswordHash(e.target.value)}
        />
        {error&&<p>{error}</p>}
        <label><a href="#">Esqueceu a senha?</a></label> 
         
        <button type="submit">Jogar</button>
      </form>
    </div>
    </div>
  );

}

export default Login;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router';
// import "./Login2.css"; 
// import gameIcon from './img/icon2.png';
// import soundIcon from './img/soundicon.png';
// import backgroundMusic from './sons/ambiente2.wav';
// import api from '../../axios/config';
// import { useUser } from "../../axios/userContext";

// function Login() {
//   const navigate = useNavigate();
  
//   const {user, setUser} = useUser();
//   const [email, setEmail] = useState('');
//   const [passwordHash, setPasswordHash] = useState('');
//   const [error, setError] = useState(null);

//   const [isPlaying, setIsPlaying] = useState(false);  // Estado para controlar o som
//   const [audio] = useState(new Audio(backgroundMusic));  // Instância do áudio

//   // Efeito para controlar o início/parada da música quando o estado mudar
//   useEffect(() => {
//     if (isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying, audio]);

//   // Alternar o estado do som (ativar/desativar)
//   const toggleSound = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await api.post('/login/enter', { email, passwordHash });
//       if(response.status == 200) {
//         console.log('Login com sucesso');
//         const loggedInUser = response.data;
//         setUser(loggedInUser);
//         console.log(loggedInUser.username);
//         // navigate('/tutorial');
//       }
//     }catch(err) {
//       setError('credenciais inválidas');
//     }
//   };

//   return (

//     <div className="Login-container">
//       <header className="menu-cadastro">                  
//         <nav className="menu-options-cadastro">
//           <a onClick={() => {navigate("/menu")}}>
//             <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
//           </a>
//           <a onClick={() => {navigate("/login")}}>Login</a>
//           <a onClick={() => {navigate("/tutorial")}}>Regras</a>
//           <a onClick={() => {navigate("/credito")}}>Créditos</a>
//           <a onClick={() => {navigate("/loja/moedas")}}>Loja</a>
//           <a onClick={toggleSound}>
//             <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
//           </a>
//         </nav>
//         {/* {user && (
//           <div>
//             <p>Bem vindo, {user.name}</p>
//           </div>
//         )} */}
//       </header>
//       <div className="form-background">
//             <form onSubmit={handleSubmit}>
//               <div className="Login-title">Login</div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="passwordHash">Senha</label>
//         <input
//           type="password"
//           name="senha"
//           value={passwordHash}
//           onChange={(e) => setPasswordHash(e.target.value)}
//         />
//         {error&&<p>{error}</p>}
//         <label><a href="#">Esqueceu a senha?</a></label> 
         
//         <button type="submit">Jogar</button>
//       </form>
//     </div>
//     {user && (
//             console.log('Bem vindo', user.username)
//         )}
//     </div>
//   );

// }

// export default Login;