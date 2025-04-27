import React from "react";
import "./Mapa.css";
import TextoPag from "../../components/TextoPag";
import BarraNav from "../../components/BarraNav";
import Rodape from "../../components/Rodape";
import pin from "../../assets/green_pin.png";
import pin2 from "../../assets/pink_pin.png";

const Mapa = () => {
    return(
        <>
            <BarraNav></BarraNav>
            <TextoPag>
                <h1 className="pagina">Mapa Interativo</h1>
            </TextoPag>
            <section className="container--mapa--lojas">
                <iframe className="mapa"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.406760487908!2d-46.633309!3d-23.55052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1612197844180!5m2!1spt-BR!2sbr"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa Google"
                ></iframe>
                <div className="loja">
                    <li className="lista--loja">
                        <ul>
                            <div className="container--loja">
                                <div className="container--pin">
                                    <h3>Loja 1</h3>
                                    <img src={pin} alt="Pin"/>
                                </div>
                                <h4 className="loja--proxima">Esta loja está a 3 Km de você e possui o produto <strong className="loja--nome">Produto</strong></h4>
                                <button className="botao--visitar">Visite a Loja</button>
                            </div>
                        </ul>
                        <ul>
                            <div className="container--loja">
                                <div className="container--pin">
                                    <h3>Loja 2</h3>
                                    <img src={pin2} alt="Pin"/>
                                </div>
                                <h4 className="loja--proxima">Esta loja está a 3 Km de você e possui o produto <strong className="loja--nome">Produto</strong></h4>
                                <button className="botao--visitar">Visite a Loja</button>
                            </div>
                        </ul>
                    </li>
                </div>
            </section>
            <Rodape></Rodape>
        </>
    )
}

export default Mapa;