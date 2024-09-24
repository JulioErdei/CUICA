import './credito.css';
import gameIcon from './images/icon2.png';
import soundIcon from './images/soundicon.png';

function Credito() {
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
              <div className="title">Créditos</div>
                <h2>Integrantes</h2>
                <p>Diogo</p>
                <p>Gabriel</p>
                <p>Guilherme</p>
                <p>Isabela</p>
                <p>Julio</p>
                <p>Pedro</p>
                <p>Renato</p>
                <p>Rodrigo</p>
                <p>Sofia</p>
                <p>Tamires</p>
                <h2>Agradecimentos</h2>
                <p>Professor Victor</p>
              <button type="submit">Fechar</button>
            </div>
        </div>
    </div>
  );
}

export default Credito;