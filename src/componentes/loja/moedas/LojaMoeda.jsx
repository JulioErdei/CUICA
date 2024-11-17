import React, { useEffect, useState } from 'react';
import './LojaMoeda.css';
import Header from '../../header/header';
import api from '../../../axios/config';

function LojaMoeda() {

    const userLocalEmail =localStorage.getItem('email');
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        const userLocalCoins = localStorage.getItem('coins');
        setCoins(userLocalCoins ? parseFloat(userLocalCoins, 10) : 0) 
    }, []);

    const saveCoins = async (coins) => {
        try {
            await api.put('/user', {'email': userLocalEmail, coins});
        }catch(error){
            console.log('Não foi possivel realizar a compra',error);
        }
    }

    const handleBuy = async (qtd) => {
        const sumCoins = coins + qtd;
        setCoins(sumCoins);
        localStorage.setItem('coins', sumCoins);
        await saveCoins(sumCoins);
    };
    
    return(
        <section className="bg-loja-moeda">
            <div className="bg-loja-moeda-container" id="bg-lojaMoeda">
                <Header />
                <div className="form-background-loja">
                    <div className="moedas-atuais-loja-moeda">
                        <div className="exibe-container">
                            <p className='icon-moeda' />
                            <p className='moeda'>{coins}</p>
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
                                <button className="valor-loja-moeda" onClick={()=>handleBuy(100)}>R$5,00</button>
                            </div>
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-m-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>500 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" onClick={()=>handleBuy(500)}>R$20,00</button>
                            </div>
                            <div className="loja-moeda-item-loja-moeda">
                                <div className="foto-item-loja-moeda moeda-g-loja-moeda">
                                </div>
                                <div className="nome-item-loja-moeda">
                                    <h1>1.000 MOEDAS</h1>
                                </div>
                                <button className="valor-loja-moeda" onClick={()=>handleBuy(1000)}>R$50,00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LojaMoeda