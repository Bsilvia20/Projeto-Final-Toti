import React from "react";
import "../CSS/Cards.css";
import CadastrarCarros from "./CadastrarCarros";

const Cards = ({ datos = [] }) => {
  return(
    <div className="row">
      {datos.map((datos,id) => (
        <div key={id} className="col mb-4">
          <div className="card">
            <img src={datos.imagem} alt="" />
            <div className="card-body">
              <h3 className="titulo"> {datos.marca}</h3>
              <h4 className="subtitulo">Modelo: {datos.modelo}</h4>
              <p className="text">Ano: {datos.ano}</p>
              <p className="text-preco">Preço: {datos.preco}</p>
              <div className="btn">
                <button onClick={()=>this.Atualizar(id)} className="btn-uptade">Atualizar</button>
                <button onClick={()=>this.Delete(id)} className="btn-delete" >Remover</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;