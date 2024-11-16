import React from "react";
import { useNavigate } from 'react-router';
import "./Logout.css";
import { useUser } from "../../axios/userContext";


function Logout() {

  const userLocal = localStorage.getItem('email');

  const {user, setUser} = useUser();
  const navigate = useNavigate();

  const handleSubmit = () => {
    setUser(null);
    localStorage.clear();
    navigate("/menu");
  };

  return (
    <div className="Logout-container">
      <div className="form-background">
      <div className="Plano-de-Fundo">
        <form onSubmit={handleSubmit}>
          <div className="Logout-title">
            <h1>Deseja mesmo encerrar sessão?</h1>
          </div>
            {userLocal && (
                <div className="button-container">
                  <button className="button1" onClick={() => {handleSubmit}}>Sim</button>
                  <button className="button2" onClick={() => navigate('/menuLogado')}>Não</button>
                </div>
            )}
            
        </form>
        </div>
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
