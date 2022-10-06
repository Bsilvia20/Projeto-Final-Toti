import React, {useState} from 'react';
import '../CSS/Filtro.css';
import Cards from './Cards';


const Filtro = ({ datos = [] }) => {

    const [ search, setSearch ] = useState("");

    function pesquisar(e) {
        setSearch(e.target.value);
        console.log("search: "+ e.target.value);
    }

    return(    
            <form id='form'>
                 <div id="filter-bar">
                    <div id="form-control-search">
                        <label for="search-bar" id='search-lable'>O que está procurando?</label>
                        <input type="text" placeholder="pesquisa" onChange={search} id="search-bar"/>
                        <button  className='btn-search' >Pesquisar</button>
                    </div>
                    <div id='form-control'>
                        <label for="preço">Preço:</label>
                        <input type="text" placeholder="R$1000" id="preço"/>
                    </div>
                    <div id="form-control">
                        <label for="marca">Ano:</label>
                        <input type="text" placeholder="2022" id="ano"/>
                    </div>
                    <div id="form-control">
                        <label for="marca">Marca:</label>
                        <input type="text" placeholder="marca do carro" id="marca"/>
                    </div>
                    <div id="form-control">
                        <label for="marca">Modelo:</label>
                        <input type="text" placeholder="marca do carro" id="marca"/>
                    </div>
                    <Cards datos= {datos} />
                </div>
            </form>
    )
}

export default Filtro;