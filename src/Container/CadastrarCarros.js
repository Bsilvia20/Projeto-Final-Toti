import Api from "../Api"
//import "../CSS/CadastrarCarros.css";
import React from "react";

class CadastrarCarros extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        carros : []
    }
}

    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Ano</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.carros.map((carro) =>
                    <tr>
                        <td>{carro.Modelo}</td>
                        <td>{carro.Marca}</td>
                        <td>{carro.Ano}</td>
                        <td>{carro.Preco}</td>
                        <td>Atualizar Remover</td>
                    </tr>)}
                    
                </tbody>
            </table>
        );
    }
}

export default CadastrarCarros;

/*const CadastrarCarros = () => {
    const [carros, setCarros] = useState();

    const cadastro =() => {
        fetch('http://localhost:3000/carro')
        .then(response => response.json())
        .then(dados => {
            this.setCarros({dados})
        })
    }


    return(
        <div>
            cadastrofff
        </div>
    )
}

export default CadastrarCarros;*/