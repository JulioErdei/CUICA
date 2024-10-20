import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './LojaMoeda.css';
import ReturnIcon from '/public/assets/imagens/icones/ReturnIcon';
import ModalCompraMoeda from '/src/componentes/modals/compras/moedas/compraMoedas.jsx';
import useAuthConta from '/src/hooks/AuthConta';
import LojaMoedaService from '/src/services/LojaMoedasService';
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';

function LojaMoeda() {
    const navigate = useNavigate()
    const { user } = useAuthConta();

    const compraMoeda = (event) => {
        let idMoeda = parseInt(event.target.value)
        let qtdeMoeda, tipoMoeda;

        switch (idMoeda) {
            case 1:
                qtdeMoeda = 100;
                tipoMoeda = 2;
                break;
            case 2:
                qtdeMoeda = 500;
                tipoMoeda = 2;
                break;
            case 3:
                qtdeMoeda = 1000;
                tipoMoeda = 2;
                break;
            case 4:
                qtdeMoeda = 100;
                tipoMoeda = 1;
                break;
            case 5:
                qtdeMoeda = 1000;
                tipoMoeda = 1;
                break;
            case 6:
                qtdeMoeda = 10000;
                tipoMoeda = 1;
                break;
            default:
                qtdeMoeda;
                tipoMoeda;
                break;
        } 

        const compraMoedas = async (id, moeda, quantidade) => {
            try {
                const response = await LojaMoedaService.sendCoins(id, moeda, quantidade);
                (response && response.status === 200) ? navigate(`/compras/moedas/${idMoeda}`) : toast.error('Erro ao efetuar a compra! Tente novamente em breve');

            } 
            catch (error) {
                toast.error('Erro ao enviar informações!');
            }
        };

        compraMoedas(user.jogador.id, tipoMoeda, qtdeMoeda);

    }
    
    return(
        <section className="bg-loja-moeda">
            <div className="bg-loja-moeda-container" id="bg-lojaMoeda">
                <header className="menu-loja">                  
                    <nav className="menu-options-loja">
                        <a onClick={() => {navigate("/menu")}}>
                            <img src={gameIcon} alt="Jogo da Onça" className="game-logo-loja" />
                        </a>
                        <a onClick={() => {navigate("/tutorial")}}>Regras</a>
                        <a onClick={() => {navigate("/credito")}}>Créditos</a>
                        <a onClick={() => {navigate("/Logout")}}>Log Out</a>
                    </nav>
                </header>
                <div className="form-background-loja">
                    <div className="moedas-atuais-loja-moeda">
                        <div className="item-qtde-loja-moeda moedas-loja-moeda">
                            <div className="icon-loja-moeda icon-moeda-loja-moeda"></div>
                            <div className="info-esmeralda-loja-moeda">
                                <p className="info-p-loja-moeda">{user?.jogador?.qntmoedanormal}</p>
                            </div>
                        </div>
                        <div className="loja-title">Loja</div>
                    </div>
                    <div className="loja-loja-moeda">
                        <div className="loja-moeda-loja-moeda">
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-p-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>100 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" value={4} onClick={compraMoeda}>R$5,00</button>
                            </div>
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-m-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>1.000 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" value={5} onClick={compraMoeda}>R$20,00</button>
                            </div>
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-g-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>10.000 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" value={6} onClick={compraMoeda}>R$50,00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LojaMoeda