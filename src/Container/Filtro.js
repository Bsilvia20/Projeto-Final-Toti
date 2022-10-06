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
                    <div className='Register'>
                    <div className='cadastro'>
                        CADASTRAR CARRO
                    </div>
                    <button className='btn2'>
                    +
                    </button>
                </div>
            </div>
           
    )
}

export default Filtro;