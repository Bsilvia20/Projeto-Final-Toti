import React from "react";

function Navbar () {
 return (
    <div>
      <div className="App">
        <h3>CRUD Carro</h3>

        <h1 className="title">Concessionario de Sonhos</h1>

      <div className="container">
      <div>
        <img src=""/>
        </div>

        <div id="filter-bar">
            <form>
                <label for="search-bar">O que está procurando?</label>
                <input type="text" placeholder="pesquisa" id="search-bar"/>

                <label for="preço">Preço:</label>
                <input type="text" placeholder="R$1000" id="preço"/>

                <label for="marca">Ano:</label>
                <input type="text" placeholder="2022" id="ano"/>
                
                <label for="marca">Marca:</label>
                <input type="text" placeholder="marca do carro" id="marca"/>
            </form>
        </div>
      </div>

        </div>
    </div>
 )
}

export default Navbar;