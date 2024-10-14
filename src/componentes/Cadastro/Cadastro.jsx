import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./Cadastro.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';

function Cadastro() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
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
    <div className="cadastro-container">
      <header className="menu-cadastro"> 
        <div className="menu-icon-cadastro">
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
        </div>
        <nav className="menu-options-cadastro">
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/moedas")}}>Loja</a>
          <a onClick={toggleSound}>
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
          </a>
        </nav>
      </header>
      <div className="form-background-cadastro">
        <div className="div-form">
          <form onSubmit={handleSubmit}>
            <div className="cadastro-title">Cadastro</div>
            <label>Nome Completo</label>
            <input
              type="text"
              name="nomeCompleto"
              value={formData.nomeCompleto}
              onChange={handleChange}
            />
            <label>Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
            />
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
            <label>Confirmação de Senha</label>
            <input
              type="password"
              name="confirmacaoSenha"
              value={formData.confirmacaoSenha}
              onChange={handleChange}
            />
            <button type="submit">AVANÇAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
