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


    render(){
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Ano</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.carros.map((carro) =>
                    <tr key={carro.id}>
                        <td>{carro.ano}</td>
                        <td>{carro.marca}</td>
                        <td>{carro.modelo}</td>
                        <td>{carro.preco}</td>
                        <td>
                        <button /*onClick={() => this.Atualizar(id)}*/ className="btn-uptade">Atualizar</button>
                        <button onClick={() => this.removerCarro(carro.id)} className="btn-delete" >Remover</button>
                        </td>
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