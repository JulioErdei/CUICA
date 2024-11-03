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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmacaoSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5166/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeCompleto: formData.nomeCompleto,
          dataNascimento: formData.dataNascimento,
          email: formData.email,
          senha: formData.senha,
        }),
      });

      if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        navigate("/login");  // Navegar para a página de login após o cadastro bem-sucedido
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || "Não foi possível realizar o cadastro"}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Ocorreu um erro ao tentar realizar o cadastro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="cadastro-container">
      <header className="menu-cadastro">                  
        <nav className="menu-options-cadastro">
          <a onClick={() => {navigate("/menu")}}>
            <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
          </a>
          <a onClick={() => {navigate("/login")}}>Login</a>
          <a onClick={() => {navigate("/cadastro")}} className="amarelo">Cadastrar</a>
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
