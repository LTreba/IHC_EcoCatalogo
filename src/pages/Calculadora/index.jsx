import React from "react";
import BarraNav from "../../components/BarraNav";
import Rodape from "../../components/Rodape";
import TextoPag from "../../components/TextoPag";
import agua from "../../assets/agua.png";
import reciclagem from "../../assets/reciclagem.png";
import "./Calculadora.css";

const Calculadora = () => {
    return(
        <>
            <BarraNav></BarraNav>
                <TextoPag>
                    <h1 className="pagina">Calculadora ECO</h1>
                </TextoPag>
                <section className="container--calculadora">
                    <h2 className="titulo--input">Adicione hábitos sustentáveis:</h2>
                    <input className="input--habitos" type="text" placeholder="Coleta seletiva, Descarte apropriado, ..."/>
                    <div>
                        <h2 className="indice--texto">Índice de sustentabilidade da conta: <strong className="indice">60%</strong></h2>
                    </div>
                </section>
                <p className="ajuda">Ao adicionar hábitos/atitudes do seu dia-a-dia, nosso sistema de recomendação se torna mais preciso e adequado para as suas necessides!</p>
                <section className="melhorias">
                    <h3>Pontos para melhorar em sua rotina atual:</h3>
                    <ul className="lista--melhorias">
                        <li>
                            <div>
                                <img className="icone--melhoria" src={agua} alt="Ícone água"/>
                                <h4>Nível Atual: <strong className="nivel">RUIM</strong></h4>
                            </div>
                        </li>
                        <li>
                            <div>
                                <img className="icone--melhoria" src={reciclagem} alt="Ícone reciclagem"/>
                                <h4>Nível Atual: <strong className="nivel">RUIM</strong></h4>
                            </div>
                        </li>
                    </ul>
                </section>
            <Rodape></Rodape>
        </>
    )
}

export default Calculadora;