import React, { useEffect, useState } from "react";
import CadastrarCarros from "./Container/CadastrarCarros";
import Cards from "./Container/Cards";

function Api() {

    const [datos, obtenerDatos] = useState([]);
    
    console.log(datos);
    const url = 'http://localhost:3000/carro';

    const peticionGet = async() => {
        const data = await fetch (url)
            .then(response => response.json());
            obtenerDatos(data);
            
    }

    useEffect(() => {
       peticionGet();
    }, []);
    
    return(
        <div>
            <Cards datos={datos} />
        </div>
    );
};

export default Api;

