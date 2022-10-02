import React from "react";
import "../CSS/Cards.css"

const Cards = ({ datos = [] }) => {
  return(
    <div className="row">
      {datos.map((datos,id) => (
        <div key={id} className="columnas">
          <div className="card">
            <img src={datos.imagem} alt="" />
            <div className="card-body">
              <h3 className="titulo">{datos.marca}</h3>
              <h4 className="subtitulo">{datos.modelo}</h4>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;