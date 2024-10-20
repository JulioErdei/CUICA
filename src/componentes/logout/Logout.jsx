import React, { useState } from "react";
import { useNavigate } from 'react-router';
import "./Logout.css";


function Logout() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // chamada para o backend
    console.log(formData);
  };

  return (
    <div class="Logout-container">
      <div className="form-background">
        <form onSubmit={handleSubmit}>
          <div className="Logout-title">
            <h1>Deseja mesmo encerrar sessão?</h1>
          </div>
          <div class="button-container">
            <button className="button1">Sim</button>
            <button className="button2">Não</button>
          </div>
          <div className="Plano-de-Fundo"></div>
        </form>
      </div>
    </div>

  );

}

export default Logout;
