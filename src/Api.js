import React from "react";

fetch ("https://parallelum.com.br/fipe/api/v1/carros/marcas")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
