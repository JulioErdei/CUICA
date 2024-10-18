import React, { useState } from "react";
import "./novasenha.css";
import gameIcon from './img/icon2.png';
import soundIcon from './img/soundicon.png';

function Novasenha() {
  const [formData, setFormData] = useState({
    novasenha: "",
    confirmenovasenha: "",
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

        <div class="Novasenha-container">
        <div className="form-background">
            <form onSubmit={handleSubmit}>
              <div className="Novasenha-title">Nova Senha</div>
        <label>Nova Senha</label>
        <input
          type="password"
          name="novasenha"
          value={formData.novasenha}
          onChange={handleChange}
        />

        <label>Confirme a nova senha</label>
        <input
          type="confirmenovasenha"
          name="confirmenovasenha"
          value={formData.confirmenovasenha}
          onChange={handleChange}
        />       
        <button type="submit">Alterar</button>
      </form>
    </div>
    </div>
  );

}

export default Novasenha;
