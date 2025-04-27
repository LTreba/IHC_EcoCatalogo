import React from "react";
import usuario from "../../assets/usuario.png";
import "./TextoPag.css";
import { NavLink } from "react-router";

const TextoPag = ({ children }) => {
    return (
        <section className="container--texto">
            <div className="container--children">
                {children}
            </div>
            <div className="container--usuario">
                <NavLink to="/usuario" className="botao--perfil">
                    <img className="img--usuario" src={usuario} alt="Usuário Icon" />
                    <small>Perfil</small>
                </NavLink>
            </div>
        </section>
    );
};

export default TextoPag;
