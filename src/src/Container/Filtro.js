import React from 'react';
import '../CSS/Filtro.css';


function Filtro() {
    return(    
            <form id='form'>
                 <div id="filter-bar">
                    <div id="form-control-search">
                        <label for="search-bar" id='search-lable'>O que está procurando?</label>
                        <input type="text" placeholder="pesquisa" id="search-bar"/>
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
                </div>
            </form>
    )
}

export default Filtro;