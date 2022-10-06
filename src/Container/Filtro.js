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
                    </div>
    )
}

export default Filtro;