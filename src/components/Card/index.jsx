import React from "react";
import product from "../../assets/product_placeholder.png";
import { NavLink } from "react-router";
import "./Card.css"

const Card = () => {
    return(
        <>
        <div className="container--card">
            <NavLink className="botao--produto">
                <h1 className="nome--produto"><strong>Nome do Produto</strong></h1>
                <img className="img--produto" src={product} alt="Produto"/>
                <h2 className="desc--produto">Descrição Produto</h2>
            </NavLink>
        </div>
        </>
    )
}

export default Card;