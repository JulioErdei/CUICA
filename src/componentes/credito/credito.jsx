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
                <div className='subtitle'>
                  <p>Este jogo foi realizado como parte do curso de Análise e
                  Desenvolvimento de Tecnologia na FATEC São Paulo.</p>
                </div>
                <div className='texto'>
                  {/* <dl>
                    <dt>Desenvolvimento Jogo e fucionalidades:</dt>
                    <dd>Renato Caetité</dd>
                    <dd>Guilherme Santo</dd>
                    <dd>Isabela Ramos</dd>
                    <dt>Desenvolvimento site:</dt>
                    <dd>Julio Cezar Erdei</dd>
                    <dd>Sofia de Mello</dd>
                    <dd>Tamires Barboza</dd>
                    <dd>Rodrigo Marcato </dd>
                    <dd>Pedro Henrique</dd>
                    <dd>Diogo Souza </dd>
                    <dt>Arte e Design: </dt>
                    <dd>Isabela Ramos</dd>
                  </dl> */}
                  <ul>
                    <li className='list-title'>Desenvolvimento Jogo e fucionalidades:</li>
                    <li className='list-text'>Renato Caetité</li>
                    <li className='list-text'>Guilherme Santo</li>
                    <li className='list-text'>Isabela Ramos</li>
                    <li className='list-title'>Desenvolvimento site:</li>
                    <li className='list-text'>Julio Cezar Erdei</li>
                    <li className='list-text'>Sofia de Mello</li>
                    <li className='list-text'>Tamires Barboza</li>
                    <li className='list-text'>Rodrigo Marcato </li>
                    <li className='list-text'>Pedro Henrique</li>
                    <li className='list-text'>Diogo Souza </li>
                    <li className='list-title'>Arte e Design: </li>
                    <li className='list-text'>Isabela Ramos</li>
                  </ul>
                </div>
              <button type="submit">Fechar</button>
            </div>
        </div>
    </div>
  );
}

export default Credito;