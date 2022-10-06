import React from 'react';
import '../CSS/Formulario.css';
import whatsapp from '../Imgs/whatsapp.jpg';


function Formulario() {
    return (
        <div id='footer'>
            <div id='contatos'>
                <h2 className='titulo'>Quer entrar em contato conosco?</h2>
                <p className='parrafo'>Pode entrar em contato conosco atraves do numero abaixo <br />
                    ou precha o formulário ao lado e entrarei em contato o <br />
                    mais rápido possível.</p>
                <div id='number'>
                    <img id='whatsapp' src={whatsapp} />
                    <h4>(21) 0 000000-0000</h4>
                </div><br />
            </div>
            <div id='contatos-form'>
                <form>
                    <div>
                        <label>Nome</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' required />
                    </div>
                    <div>
                        <label>Assunto</label>
                        <input type='text' />
                        <span><label>Mensagem</label></span>
                        <textarea cols='30' required />
                    </div>
                    <div>
                        <button className='button'>Enviar</button>
                    </div>
                </form>
    </div>
        </div>
    )
}

export default Formulario;