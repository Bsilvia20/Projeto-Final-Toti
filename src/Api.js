import React, { useEffect, useState } from "react";
import Cards from "./Container/Cards";

function Api() {

    const [datos, obtenerDatos] = useState([]);
    
    console.log(datos);
    const url = 'http://localhost:3000/carro';

    const cardApi = async() => {
        const data = await fetch (url)
            .then(response => response.json());
            obtenerDatos(data);
    }

    useEffect(() => {
       cardApi();
    }, []);
    
    return(
        <div>
            <Cards datos={datos} />
        </div>
    );
};

export default Api;

