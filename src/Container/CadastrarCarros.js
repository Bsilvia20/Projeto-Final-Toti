import Api from "../Api"
//import "../CSS/CadastrarCarros.css";
import React from "react";
import datos from "../Api";
import Atualizar from "./Atualizar";
import Navbar from "./Navbar";

class CadastrarCarros extends React.Component{
    constructor(props){
        super(props);

        this.state = {
        carros : []
    }
}

    componentDidMount = () => {
        this.apiCarro();
    }

    
    apiCarro = () => {
        fetch('http://localhost:3000/carro')
        .then(response => response.json())
        .then(carro => {console.log(carro)
            this.setState({carros: carro})
        })
    }

    removerCarro = (id) => {
        fetch("http://localhost:3000/carro/"+id, {method: 'DELETE'})
        .then(response => {
            if (response.ok) {
                this.apiCarro();
            }
        })
    }

    render(){
        return (
            <div>
                <Navbar />
                <Atualizar />
            <table className="table">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.carros.map((carro) =>
                    <tr key={carro.id}>
                        <td>{carro.marca}</td>
                        <td>{carro.modelo}</td>
                        <td>{carro.ano}</td>
                        <td>{carro.preco}</td>
                        <td>
                        <button /*onClick={() => this.Atualizar(id)}*/ className="btn-uptade">Atualizar</button>
                        <button onClick={() => this.removerCarro(carro.id)} className="btn-delete" >Remover</button>
                        </td>
                    </tr>)}
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default CadastrarCarros;
