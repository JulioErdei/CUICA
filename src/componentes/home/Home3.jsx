import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import './Home.css';
import Carrossel from './carrossel/carrossel';
import HelpIcon from '/public/assets/imagens/icones/HelpIcon';
import LogOutIcon from '/public/assets/imagens/icones/LogOutIcon';
import UsuarioIcon from '/public/assets/imagens/icones/UsuarioIcon';
import VolumeOffIcon from '/public/assets/imagens/icones/VolumeOffIcon';
import VolumeOnIcon from '/public/assets/imagens/icones/VolumeOnIcon';
import useAuthConta from '/src/hooks/AuthConta';
import useSomAmbiente from '/src/hooks/SomAmbienteHook';
import useTabuleiro from '/src/hooks/TabuleiroHook';
import Header from '../header/header';

function Home() {
    const navigate = useNavigate();
    const { criarPartida } = useTabuleiro();
    const { user, atualizaUser, signout } = useAuthConta();
    const { toggleMusica, musicaStatus } = useSomAmbiente();

    useEffect(() => {
        if (user?.jogador?.id) atualizaUser(user?.jogador?.id)
        localStorage.removeItem("partidaSession")
    },[])
	
    const logout = () => {
        signout()
        navigate("/login")
    }

    const jogar = async (tipo) => {
        const responsePartida = await criarPartida(tipo.toUpperCase());
        responsePartida ? navigate("/fila") : navigate("/fila") /*: navigate("/menu")*/
    }
    const meta = () => {
        switch (user?.jogador?.nivelatual) {
            case 1:
                return 100;
            case 2:
                return 300;
            case 3:
                return 600;
            case 4:
                return 1000;
            case 5:
                return 'Máx.';
            default:
                return 1;
        }
    }

    return (
    <div className="bg-home">
    <div className="bg-home-container">
      {/* <header className="menu-superior">  */}
        {/*<div className="menu-icon-cadastro">
          <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
        </div>*/}
        {/* <nav className="menu-infos-user">
            <button className="btn menu-item" onClick={() => {navigate("/login")}}><p className="texto-p">JOGAR</p></button>
            <button className="btn menu-item" onClick={() => {navigate("/Cadastro")}}><p className="texto-p">CADASTRAR</p></button>
            <button className="btn menu-item" onClick={() => {navigate("/loja/skins")}}><p className="texto-p">SHOP</p></button>
            <button className="btn menu-item" onClick={() => {navigate("/tutorial")}}><p className="texto-p">SOBRE O JOGO</p></button>
        </nav>
        <div className="menu-itens-config">
            <button className="item-config" onClick={toggleMusica}>
                {musicaStatus ? <VolumeOnIcon /> : <VolumeOffIcon />}
            </button>
        </div>
      </header> */}
      <Header />
        <div className="main">
            <div className="TITULO">
                <h1 className="Texto-Tit">JOGO DA ONÇA</h1>
            </div>
        </div>
    </div>
    </div>

        /*<section className="bg-home">
            <div className="bg-home-container">
                <div className="menu-superior">
                    <div className="menu-infos-user">
                        <button className="btn menu-item" onClick={() => {navigate("/login")}}><p className="texto-p">JOGAR</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/Cadastro")}}><p className="texto-p">CADASTRAR</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/loja/skins")}}><p className="texto-p">SHOP</p></button>
                        <button className="btn menu-item" onClick={() => {navigate("/tutorial")}}><p className="texto-p">SOBRE O JOGO</p></button>
                    </div>
                    <div className="menu-itens-config">
                        <button className="item-config" onClick={toggleMusica}>
                            {musicaStatus ? <VolumeOnIcon /> : <VolumeOffIcon />}
                        </button>
                    </div>
                </div>
                <div className="main">
                    <div className="TITULO">
                        <h1 className="Texto-Tit">JOGO DA ONÇA</h1>
                    </div>
                </div>
            </div>
        </section>*/
    )
}

export default Home