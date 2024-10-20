import React, { useState } from "react";
import "./esqueceusenha.css"; 
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';

function Esqueceusenha() {
  const [formData, setFormData] = useState({
    email: "",
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

    <div class="Esqueceusenha-container">
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
              <div className="Esqueceusenha-title">Redefinir Senha</div>
        <label>Informe seu e-mail para redefinir a senha</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />       
        <button type="submit">Confirmar</button>
      </form>
    </div>
    </div>
  );

}

export default Esqueceusenha;
