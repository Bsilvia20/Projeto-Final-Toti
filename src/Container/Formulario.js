import React from 'react';
import '../CSS/Formulario.css';
import whatsapp from '../Imgs/whatsapp.jpg';


function Formulario() {
    return (
        <div id='footer'>
            <div id='contatos'>
                <h2>Alguma duvida?</h2>
                <h3 className='contato'>Quer entrar em contato conosco?</h3>
                <p className='parrafo'>Pode entrar em contato conosco atraves do numero abaixo <br />
                    ou precha o formulário ao lado e entrarei em contato o <br />
                    mais rápido possível. Você também pode nos encontrar nas <br />
                    seguintes redes sociais:</p>
                <div id='number'>
                    <img id='whatsapp' src={whatsapp} />
                    <h4>(21)00000000000</h4>
                </div><br />
                <div>
                    <h5>Segue a gente</h5>
                </div>
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
                        <button className='button'>Enviar Mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario;