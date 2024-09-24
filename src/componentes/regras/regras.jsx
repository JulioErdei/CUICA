import './regras.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';

function Regras() {
  return (
  <div className="container">
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
        <div className="quadro">
            <div className='quadro-container'>
              <div className="title">Regras</div>
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
              <button type="submit">Fechar</button>
            </div>
        </div>
    </div>
  );
}

export default Regras;
