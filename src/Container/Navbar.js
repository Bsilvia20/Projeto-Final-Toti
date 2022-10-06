import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from'../Imgs/logo.png';
import Home from "../Home";
import CadastrarCarros from "./CadastrarCarros";


const Navbar = () => {
 return (
    <div id="header">
      <div className="Navbar">
        <div><img id="logo" src={logo}/></div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/CadastrarCarros">Cadastrar Carros</Link></li>
          </ul>
        </div>
      </div> 
    </div>
 )
}

export default Navbar;