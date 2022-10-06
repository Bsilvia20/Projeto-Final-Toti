import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from'../Imgs/logo.png';
import Header from'../Imgs/Header-img.jpg';
import Home from "../Home";
import CadastrarCarros from "./CadastrarCarros";
import Carrinho from "./Carrinho";

const Navbar = () => {
 return (
    <div id="header">
      <div className="Navbar">
        <div><img id="logo" src={logo}/></div>
        <div>
        <BrowserRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Cadastrar Carros</Link></li>
            <li><Link to="/">Carrinho</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/CadastrarCarros" element={<CadastrarCarros />} ></Route>
            <Route path="/src/Container/Carrinho.js" element={<Carrinho />} ></Route>
          </Routes>
          </BrowserRouter>
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