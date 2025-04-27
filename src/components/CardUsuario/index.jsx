import React from "react";
import "./CardUsuario.css";
import usuario from "../../assets/usuario.png"
import Rodape from "../Rodape";

const CardUsuario = () => {
    return(
        <>
        <section className="container--usuario">
            <img className="img--login" src={usuario} />
            <h1 className="nome--usuario">Nome do usuario</h1>
            <button>Configurações da conta</button>
            <h2 className="titulo--tags">Suas competências:</h2>
            <div>
                <li className="lista--tags">
                    <ul>
                        <h3 className="botao--visitar">Reciclagem</h3>
                    </ul>
                    <ul>
                        <h3 className="botao--visitar">Consumo Responsável</h3>
                    </ul>
                    <ul>
                        <h3 className="botao--visitar">Economia de Energia</h3>
                    </ul>
                    <ul>
                        <h3 className="botao--visitar">Economia de Água</h3>
                    </ul>
                    <ul>
                        <h3 className="botao--visitar">Descarte Ecológico</h3>
                    </ul>
                </li>
            </div>
            <h3 className="dica">Continue adicionando informações sobre seus hábitos na calculadora para ganhar novas tags!</h3>
        </section>
        <Rodape></Rodape>
        </>
    )
}

export default CardUsuario;