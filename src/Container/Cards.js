import React from "react";
//import "../CSS/Cards.css";

const Cards = ({ datos = [] }) => {
  return(
    <div className="row">
      {datos.map((datos,id) => (
        <div key={id} className="col-6">
          <div className="card">
            <div className="Imagem"><img src={datos.imagem} alt="" /></div>
            <div className="card-body">
              <h3 className="titulo"> {datos.marca}</h3>
              <h4 className="subtitulo">Modelo: {datos.modelo}</h4>
              <p className="text">Ano: {datos.ano}</p>
             <p className="text-preco">Preço:R${datos.preco}</p>
            </div>          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;