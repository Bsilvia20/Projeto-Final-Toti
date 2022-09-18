import React, { useEffect, useState } from "react";
import "../CSS/Cards.css"

const Cards = ({ modelos }) => {
  let card;
  console.log(modelos);

    if (modelos) {
      card = modelos.map((x) => {
        let { nome, codigo, id } = x;
        return (
          <div key={nome} className="columnas">
            <div className="">
              {nome}
            </div>
          </div>
        );
      });
    } else {
    card = "No se encuentra";
    };

  return <>{card}</>;
};
export default Cards;