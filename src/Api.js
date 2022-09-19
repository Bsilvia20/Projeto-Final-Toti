import React, { useEffect, useState } from "react";
import Cards from "./Container/Cards";

function Api() {

    const [datos, obtenerDatos] = useState([]);
    const {anos, modelos} = datos

    const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';

    useEffect(() => {
        (async function(){
            const data = await fetch(url).then(response => response.json());
            obtenerDatos(data);
        })();
    }, [url]);

    return (
        <div>
            <Cards modelos={modelos} />
        </div>
    )
}


export default Api;
