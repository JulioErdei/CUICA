import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./cadastro.css"; // criar o estilo depois
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';

function Cadastro() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    dataNascimento: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
  });

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
      <header className="menu"> 
        <div className="menu-icon">
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo" />
        </div>
        <nav className="menu-options">
          <a href="#creditos">Créditos</a>
          <a href="#regras">Regras</a>
          <a href="#jogar">Jogar</a>
          <a href="#cadastrar">Cadastrar</a>
          <a href="#shop">Shop</a>
          <a href="#som">
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon" />
          </a>
        </nav>
      </header>
        <div className="form-background">
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
  );
}

export default Cadastro;
