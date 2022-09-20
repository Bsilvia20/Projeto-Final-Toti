import React from 'react';
import '../CSS/Formulario.css'
import whatsapp from '../Imgs/whatsapp.jpg'


function Formulario() {
    return(

        <div id='footer'>
            <div id='contatos'>
                <h2>Alguma dúvida?</h2><br/>
                <p>Pode entrar em contato consoco<br/>
                atraves do numero abaixo ou<br/>
                deixar uma mensagem que a gente responde.</p>

                <div id='number'>
                    <img id='whatsapp' src={whatsapp}/>
                    <h4>(21)00000000000</h4>
                </div><br/>

                <div>
                    <h5>Segue a gente</h5>

                </div>
            </div>

            
            <div id='contatos-form'>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type='text'/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type='email'/>
                    </div>
                        
                    <div>
                        <label>Assunto</label>
                        <input type='text'/>

                        <span><label>Nome</label></span>
                        <textarea cols='30'/>
                    </div>

                        
                </form>
            </div>
        </div>
        
        
    )
}

export default Formulario;