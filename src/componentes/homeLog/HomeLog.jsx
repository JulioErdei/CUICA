import React from "react";
import { useNavigate } from 'react-router';
import "./HomeLog.css";
import Header from "../header/header";

function Home() {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/tabuleiro')
  }

  return (
    <div className="HomeLog-container">
      <Header />
      <div className="Formhome">
        <div className="logo-homeLog">
          <div className="buton-jogar">
            <button type="submit" onClick={handleNavigate}>JOGAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;