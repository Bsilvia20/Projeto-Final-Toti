import React from 'react';
import Navbar from './Container/Navbar';
import Filtro from './Container/Filtro';
import Cards from './Container/Cards';
import Api from "./Api";
import Formulario from './Container/Formulario';
import "./App.css";

function App(){
  return (
    <div>
      <Navbar />
      <Filtro />
      <Cards />
      <Formulario />
    </div>
  );
}

export default App;