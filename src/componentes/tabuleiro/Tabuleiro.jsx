import React from "react";
import './Tabuleiro.css';  // Importando o CSS
import Header from "../header/header";

function Tabuleiro() {
    return (
        <div className="container">
            <Header />
            <iframe frameborder="0" src="https://itch.io/embed-upload/12015941?color=333333" allowfullscreen="" width="1920" height="1100"><a href="https://renatoccz.itch.io/jogo-da-onca">Play Jogo da Onça on itch.io</a></iframe>
        </div>
    );
}

export default Tabuleiro;