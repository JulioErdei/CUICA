import React from "react";
import { useNavigate } from 'react-router';
import "./Logout.css";
import { useUser } from "../../axios/userContext";


function Logout() {

  const {user, setUser} = useUser();
  const navigate = useNavigate();

  console.log(user);

  const handleSubmit = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate("/menu");
  };

  if(!user){
    return (
      <div>
        <h1>Você precisa fazer Login</h1>
        <p onClick={() => navigate('/login')}>Clique aqui</p>
      </div>
    )
  }

  return (
    <div className="Logout-container">
      <div className="form-background">
        <form onSubmit={handleSubmit}>
          <div className="Logout-title">
            <h1>Deseja mesmo encerrar sessão?</h1>
          </div>
          <div className="button-container">
            <button className="button1">Sim</button>
            <button className="button2" onClick={() => navigate('/menu')}>Não</button>
          </div>
          <div className="Plano-de-Fundo"></div>
        </form>
      </div>
    </div>

  );

}

export default Logout;





// import React, { useState } from "react";
// import { useNavigate } from 'react-router';
// import "./Logout.css";
// import { useUser } from "../../axios/userContext";


// function Logout() {

//   const navigate = useNavigate();

//   const {user, setUser} = useUser(); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(user){
//       console.log('Logout: ', user.name);
//     }
//     setUser(null);
//     navigate("/menu");
//   };

//   return (
//     <div className="Logout-container">
//       <div className="form-background">
//         <form onSubmit={handleSubmit}>
//           <div className="Logout-title">
//             <h1>Deseja mesmo encerrar sessão?</h1>
//           </div>
//           <div className="button-container">
//             <button className="button1">Sim</button>
//             <button className="button2" onClick={() => navigate('/tutorial')}>Não</button>
//           </div>
//           <div className="Plano-de-Fundo"></div>
//         </form>
//       </div>
//     </div>

//   );

// }

// export default Logout;
