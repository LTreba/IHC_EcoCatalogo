import React from "react";
import logo from "../../assets/logo.png"
import title from "../../assets/title.png"
import "./BarraNav.css";
import { NavLink } from "react-router";


const BarraNav = () => {
    return(
        <>
            <header className="cabecalho">
                <div className="container--logo">
                    <img src={logo} alt="Logo"/>
                    <img src={title} alt="EcoCatalogo"/>
                </div>
                <div className="container--nav">
                    <nav className="container--botoes">
                        <div className="div--botao">
                            <NavLink to="/" className="botao">Recomendações</NavLink>
                        </div>
                        <div className="div--botao">
                            <NavLink to="/calculadora" className="botao">Calculadora ECO</NavLink>
                        </div>
                        <div className="div--botao">
                            <NavLink to="/mapa" className="botao">Mapa Interativo</NavLink>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default BarraNav;