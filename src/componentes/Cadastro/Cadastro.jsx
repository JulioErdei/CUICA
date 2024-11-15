import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import "./Cadastro.css";
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';
import backgroundMusic from './sons/ambiente2.wav';
import api from "../../axios/config";
import Header from "../header/header";

function Cadastro(){
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !email || !passwordHash){
      setErro('Preencha todos os campos');
      return;
    }
    setErro('');
    setLoading(true);
    const userData = {username, email, birthday, passwordHash};
    try{

      //validar inputs ---------------------------------

      const response = await api.post('/user', userData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(passwordHash === confirmPassword){
        if(response.status === 200) {
          console.log('Cadastro realizado com sucesso! Informações enviadas: ' + userData.username);
          navigate('/login');
          setUsername('');
          setEmail('');
          setBirthday('');
          setPasswordHash('');
          setConfirmPassword('');
        } else {
          throw new Error ('Erro ao cadastrar, tente novamente.');
        }
      } else {
        throw new Error ('Senhas diferentes.');
      }
    } catch (error) {
      console.log('Erro na requisição: ' , error)
      setErro('Erro ao cadastrar, tente novamente.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="cadastro-container">
      {/* <header className="menu-cadastro">                  
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
      </header> */}
      <Header />
      <div className="form-background-cadastro">
        <div className="div-form">
          <form onSubmit={handleSubmit}>
            <div className="cadastro-title">Cadastro</div>
            <label htmlFor="username">Nome Completo</label>
            <input
              type="text"
              name="nomeCompleto"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="birthday">Data de Nascimento</label>
            <input
              type="date"
              name="dataNascimento"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
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
            <label htmlFor="confirmPassword">Confirmação de Senha</label>
            <input
              type="password"
              name="confirmacaoSenha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {erro && <p style={{color: 'red'}}>{erro}</p>}
            {loading && <p>Carregando...</p>}

            <button type="submit" disabled={loading}>
              {loading? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
