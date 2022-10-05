import React from 'react';
import Home from './Home';
import Navbar from './Container/Navbar';
import Filtro from './Container/Filtro';
import Cards from './Container/Cards';
import Api from "./Api";
import Buttons from './Container/Buttons';
import CadastrarCarros from './Container/CadastrarCarros';
import Formulario from './Container/Formulario';
import "./App.css";

function App(){

  return (
    <div>
      <Home />
      <Navbar />
      <Filtro />
      <Cards />
      <Api />
      <Formulario />
    </div>
  );
}

export default App;

//url Api https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos   
//http://localhost:3000/carro