import React from "react";
    
function Buttons(){
  var url = 'http://localhost:3000/create';
  
  
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(Buttons()), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => {
    console.log("Foi criado com sucesso", response)
    window.location.href = '/galery.html'
  });
  
}
  
export default Buttons;