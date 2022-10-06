import React from "react";
import "../CSS/Cards.css";
import CadastrarCarros from "./CadastrarCarros";


const handeDelete=(id) => {
var Cards = Cards.map(function(e){
  return e.id
}).index(id)
}


const Cards = ({ datos = [] }) => {
  return(
    <div className="row">
      {datos.map((datos,id) => (
        <div key={id} className="col mb-4">
          <div className="card">
            <div className="Imagem"><img src={datos.imagem} alt="" /></div>
            <div className="card-body">
              <h3 className="titulo"> {datos.marca}</h3>
              <h4 className="subtitulo">Modelo: {datos.modelo}</h4>
              <p className="text">Ano: {datos.ano}</p>
             <p className="text-preco">Preço:R${datos.preco}</p>
              <div className="btn">
                <button onClick={() => this.Atualizar(id)} className="btn-uptade">Atualizar</button>
                <button onClick={()=>handeDelete(id)} className="btn-delete" >Remover</button>
              </div>
            </div>          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;