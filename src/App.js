import React from 'react';
//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CadastrarCarros from './Container/CadastrarCarros';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/CadastrarCarros" element={<CadastrarCarros/>}>Cadastrar Carros</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;


//url Api https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos   
//http://localhost:3000/carro