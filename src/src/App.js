import React, { useEffect } from 'react';
import Navbar from './Container/Navbar';
import Filtro from './Container/Filtro';
import Cards from './Container/Cards';
import Api from "./Api";
import Formulario from './Container/Formulario';
import "./App.css";
import teste from './teste';

function App(){

  useEffect (() => {
    teste()
  }, []) 

  return (
    <div>
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