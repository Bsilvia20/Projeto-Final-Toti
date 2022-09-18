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






/*export default class Api extends React.Component {
  constructor() {
      super()
      this.state = {
          carros: ''
      }
  }

  componentDidMount() {
    fetch ("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then(response => response.json())
      .then(carros => console.log(carros))
  }
  render() {
      return(
          <div>teste</div>
      )
  }
}*/

/*import React from "react";

fetch ("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));*/

/*export const nomeCarro = async () => {
    const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
    return await axios.get(url)
}
export const codigoCarro = async () => {
    const url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'
    return await axios.get(url)
}*/