import React, { useEffect, useState } from "react";
import Cards from "./Container/Cards";
import Filtro from "./Container/Filtro";

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
