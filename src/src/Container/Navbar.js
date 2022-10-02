import React from "react";
import '../CSS/Navbar.css';
import logo from'../Imgs/logo.png';
import Header from'../Imgs/Header-img.jpg';

const Navbar = () => {
 return (
    <div id="header">
      <div className="Navbar">
        <div><img id="logo" src={logo}/></div>
        <div>
          <ul>
            <li>Inicio</li>
            <li>Carros Novos</li>
            <li>Carrinho</li>
          </ul>
        </div>
      </div>
        <div id="header-content">
          <span id="propaganda">
          <h1>Encontre aqui<br/>seu próximo carro</h1>
          <p>Escolhe seu carro aqui e a gente leva até você.<br/>E se pensar em financiamento,<br/>faça tudo online simples e rápido.</p>
          </span>
          <img id="header-img" src={Header}/>
        </div> 
    </div>
 )
}

export default Navbar;