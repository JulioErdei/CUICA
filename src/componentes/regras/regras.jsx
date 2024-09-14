import './regras.css';
import { useState } from 'react';

function Regras() {

  const [somLigado, setSomLigado] = useState(true);
  const [menuAberto, setMenuAberto] = useState(false);

   // Função para alternar o estado do som
   const toggleSom = () => {
    setSomLigado(!somLigado);
    //  adicionar lógica para controlar o áudio da aplicação
  };
  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
   <div className='App'>
    {/* <section className='cabecalho'>
      <Cabecalho />
    </section> */}
    <header className="cabeçalho">
      <div className="logo">
        <h1>Jogo da Onça</h1>
      </div>

      <button className="menu-hamburguer" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navegacao ${menuAberto ? 'aberto' : ''}`}>
        <ul>
          <li><a href="#creditos">Créditos</a></li>
          <li><a href="#regras">Regras</a></li>
          <li><a href="#shop">Loja</a></li>
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#logout">Sair</a></li>
        </ul>
      </nav>
      <div className="controle-som">
        <button onClick={toggleSom} className="botao-som">
          {somLigado ? '🔊' : '🔇'}
        </button>
      </div>
      </header>
      <div className="placa-madeira">
        <h2 className="titulo">Regras</h2>
      </div>
      <div className="borda-madeira">
        <div className="conteudo-madeira">
          <p className="texto">
            Tabuleiro: O tabuleiro é composto por um conjunto de linhas cruzadas 
                    formando ma espécie de estrela ou teia, com 24 interseções ao todo. A 
                    "onça" começa posicionada no ponto central do tabuleiro.
                </p>
                <p className="texto">
                    Peças principais: Peça da onça (movida por um jogador) e 14 peças de 
                    cachorro: movidas pelo outro jogador.
                </p>
                <p className="texto">
                    Objetivo: A onça deve capturar 5 cachorros para vencer.
                    <br />
                    Os cachorros devem encurralar a onça, de modo que ela não consiga mais 
                    se mover, para vender.
                </p>
                <p className="texto">
                    Captura: A onça captura um cachorro ao pular sobre ele, mas só pode 
                    fazer isso se houver uma casa vazia imediatamente após a peça do 
                    cachorro.
                    <br />
                    Os cachorros não têm a capacidade de capturar a onça. Eles precisam 
                    encurralá-la estrategicamente.
                </p>
                <p className="texto">
                    Enceramento do jogo: O jogo termina qunado a onça captura 5 
                    cachorros (vitória da onça) ou quando os cachorros conseguem 
                    encurralar a onça, impedindo seus movimentos (vitória dos cachorros).
          </p>
        </div>
      </div>
      <a href="#" class="botao-madeira">Fechar</a>
    </div>
  );
}

export default Regras;
