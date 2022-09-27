import React from "react";
import "../CSS/Cards.css"

const Cards = ({ modelos }) => {
  let card;
  console.log(modelos);

    if (modelos) {
      card = modelos.map((x) => {
        let { nome, codigo } = x;
        return (
          <div key={codigo} className="columnas">
              <p className="carro">{nome}</p>
              <p>{codigo}</p>
          </div>
        );
      });
    } else {
    card = "No se encuentra";
    };

  return <>{card}</>;
};
export default Cards;