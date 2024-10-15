import React, { useState } from "react";
import "./Login2.css"; 
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    esqueceuaSenha: "",
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

    <div class="Login-container">
      <header className="menu">
        <div className="menu-icon">
        <img src={gameIcon} alt="Jogo da Onça" className="game-logo" />
        </div>
        <nav className="menu-options">
          <a onClick={() => {navigate("/Cadastro")}}>Cadastrar</a>
          <a onClick={() => {navigate("/tutorial")}}>Regras</a>
          <a onClick={() => {navigate("/credito")}}>Créditos</a>
          <a onClick={() => {navigate("/loja/skin")}}>Loja</a>
          <a href="#som">
            <img src={soundIcon} alt="Som do Jogo" className="sound-icon" />
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
