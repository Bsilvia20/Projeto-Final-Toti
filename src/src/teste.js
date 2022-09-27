import React from "react";

function teste() {
    fetch('http://localhost:3000/carro')
    .then(response => response.json())
    .then(data => console.log(data));
}

export default teste;