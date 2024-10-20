import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./Login2.css"; 
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';

function Login() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    esqueceuaSenha: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // chamada para o backend
    console.log(formData);
  };

  return (

    <div class="Login-container">
      <header className="menu-cadastro">                  
        <nav className="menu-options-cadastro">
          <a onClick={() => {navigate("/menu")}}>
            <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
          </a>
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/moedas")}}>Loja</a>
          <a onClick={toggleSound}>
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
        </nav>
      </header>
      <div className="form-background">
            <form onSubmit={handleSubmit}>
              <div className="Login-title">Login</div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />

        <label><a href="#">Esqueceu a senha?</a></label> 
         
        <button type="submit">Jogar</button>
      </form>
    </div>
    </div>
  );

}

export default Login;
