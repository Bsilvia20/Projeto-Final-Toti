import React from "react";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from'../Imgs/logo.png';
import Home from "../Home";
import CadastrarCarros from "./CadastrarCarros";
import home from '../Imgs/Home.jpg'
import add from '../Imgs/Add.jpg'

const Navbar = () => {
 return (
    <div id="header">
      <div className="Navbar">
        <div><img id="logo" src={logo}/></div>
        <div>
          <ul>
            <li><Link to="/"><img className="Home" src={home}></img></Link></li>
            <li><Link to="/CadastrarCarros"><img className="car" src={add}></img></Link></li>
          </ul>
        </div>
      </div> 
    </div>
 )
}

export default Navbar;