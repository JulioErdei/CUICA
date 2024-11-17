import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import './Conta.css';
import backgroundMusic from './sons/ambiente2.wav';
import Header from "../header/header";
import api from "../../axios/config";
import { useUser } from "../../axios/userContext";

function Conta() {

    const navigate = useNavigate();

    const userLocalName =localStorage.getItem('username');
    const userLocalEmail =localStorage.getItem('email');
    const userLocalPassword =localStorage.getItem('passwordHash');

    const [username, setUserName] = useState();

    const [passwordHash, setPasswordHash] = useState();


    const handleChange = async e => {
        e.preventDefault();
        console.log('foi')
        try {
            console.log(username);
            console.log(passwordHash);
          const response = await api.put('/user', {'email': userLocalEmail, username, passwordHash});
          if(response.status == 200) {
 
            if(passwordHash !== undefined){
                localStorage.setItem('passwordHash', passwordHash);
            }
            if(username !== undefined){
                localStorage.setItem('username', username);
            }
          }
        }catch(err) {
          console.log('credenciais inválidas', err);
        }
      };
    
    return (
        <section className="bg-conta">
            <div className="bg-conta-container">
                
            <div className="menu-superior-conta">
      <Header />
                </div>
                <div className="content-main-conta">
                
                    <div className="content-main-superior-conta">
                        <form className="infos-user-conta" onSubmit={handleChange}>
                            <div className="info-conta info-nome-conta">
                                <label htmlFor="userName">Nome: </label>
                                <input type="text" id="userName" name="userName" defaultValue={userLocalName} onChange={(e)=> setUserName(e.target.value)} />
                            </div>
                            <div className="info-conta info-nome-conta">
                                <label htmlFor="passwordHash">Senha: </label>
                                <input type="text" id="passwordHash" name="passwordHash" minLength="3" defaultValue={userLocalPassword} onChange={(e)=> setPasswordHash(e.target.value)} />
                            </div>
                                <button className="btn-atualiza" type="submit">Alterar</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Conta





// import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
// import ContaService from '../../services/ContaService';
// import './Conta.css';
// import VisibilityIcon from '/public/assets/imagens/icones/VisibilityIcon';
// import VisibilityOffIcon from '/public/assets/imagens/icones/VisibilityOffIcon';
// import useAuthConta from '/src/hooks/AuthConta';
// import { validatePassword } from '/src/utils/Regex.jsx';
// import gameIcon from '/public/assets/imagens/icones/icon2.png';
// import soundIcon from '/public/assets/imagens/icones/soundicon.png';
// import backgroundMusic from './sons/ambiente2.wav';
// import Header from "../header/header";

// function Conta() {
//     const [isPlaying, setIsPlaying] = useState(false);  // Estado para controlar o som
//     const [audio] = useState(new Audio(backgroundMusic));  // Instância do áudio
  
//     // Efeito para controlar o início/parada da música quando o estado mudar
//     useEffect(() => {
//       if (isPlaying) {
//         audio.play();
//       } else {
//         audio.pause();
//       }
//     }, [isPlaying, audio]);
  
//     // Alternar o estado do som (ativar/desativar)
//     const toggleSound = () => {
//       setIsPlaying(!isPlaying);
//     };

//     const navigate = useNavigate();
//     const [visibilityStatus, setVisibilityStatus] = useState(false);
//     const { user } = useAuthConta();
    
//     useEffect(()=>{
//         setEmail(user?.jogador?.email)
//         setNome(user?.jogador?.nome)
//         setUserName(user?.jogador?.username)
//     },[user])

//     const [email, setEmail] = useState(user?.jogador?.email);
// 	const [nome, setNome] = useState(user?.jogador?.nome);
// 	const [senha, setSenha] = useState("");
// 	const [senhaErr, setSenhaErr] = useState(false);
// 	const [userName, setUserName] = useState(user?.jogador?.username);

//     const handleFieldChange = (e, setStateFunction) => {
//         setStateFunction(e.target.value);
//     };

//     const validaSenha = () => {
//         // se a senha não for válida, seta o erro como true
// 		validatePassword.test(senha) ? setSenhaErr(false) : setSenhaErr(true);
// 	}

//     const toggleVisibility = (e) => {
// 		e.preventDefault();
// 		setVisibilityStatus(!visibilityStatus);
// 	}

//     const atualizaUser = async (e) => {
// 		e.preventDefault();
// 		validaSenha();
//         if (!senhaErr) {
//             await ContaService.atualizaConta(nome, userName, email, senha);
//             toast.success("Informações atualizadas com sucesso!");
//             return
//         }
//         toast.error("Erro ao atualizar informações!\nTente novamente!");
//     }
    
//     return (
//         <section className="bg-conta">
//             <div className="bg-conta-container">
                
//             <div className="menu-superior-conta">
//             {/* <header className="menu-cadastro">                  
//         <nav className="menu-options-cadastro">
//           <a onClick={() => {navigate("/menu")}}>
//             <img src={gameIcon} alt="Jogo da Onça" className="game-logo-cadastro" />
//           </a>
//           <a className="amarelo" onClick={() => {navigate("/conta")}}>Perfil </a>
//           <a onClick={() => {navigate("/tutorial")}}>Regras</a>
//           <a onClick={() => {navigate("/credito")}}>Créditos</a>
//           <a onClick={() => {navigate("/loja/moedas")}}>Loja</a>
//           <a onClick={() => {navigate("/logout")}}>Logout</a>
//           <a onClick={toggleSound}>
//             <img src={soundIcon} alt="Som do Jogo" className="sound-icon-cadastro" />
//           </a>
//         </nav>
//       </header> */}
//       <Header />
//                 </div>
//                 <div className="content-main-conta">
//                     <div className="content-main-superior-conta">
//                         <form className="infos-user-conta" onSubmit={atualizaUser}>
//                             <div className="info-conta info-nome-conta">
//                                 <label htmlFor="">NOME:</label>
//                                 <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required/>
//                             </div>
//                             <div className="info-conta info-user-conta">
//                                 <label htmlFor="">USER:</label>
//                                 <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
//                             </div>
//                             <div className="info-conta info-email-conta">
//                                 <label htmlFor="">EMAIL:</label>
//                                 <input type="email" value={email} pattern="^\w.{2,}\u0040[a-z]{2,}.[a-z]{2,}\S"
//                                 title="Formato esperado: seuemail@email.com"
//                                 disabled
//                                 />
//                             </div>

//                             <div className="info-conta info-senha-conta">
//                                 <label htmlFor="">SENHA:</label>
//                                 <input type={visibilityStatus ? "text" : "password"} className='inp-senha' onChange={(e) => setSenha(e.target.value)} required/>
//                                 <button className="btn-visibility btn-senha-conta" onClick={toggleVisibility}>{visibilityStatus ? <VisibilityIcon /> : <VisibilityOffIcon />}</button>
//                             </div>
//                             <div className="info-conta atualiza-info-conta">
//                                 <label htmlFor="">&nbsp;</label>
//                                 <button className="btn-atualiza">ATUALIZAR</button>
//                             </div>
//                         </form>
//                     </div>
                    
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Conta