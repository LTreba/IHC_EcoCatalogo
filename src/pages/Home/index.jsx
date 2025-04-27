import React from "react";
import BarraNav from "../../components/BarraNav";
import TextoPag from "../../components/TextoPag";
import lupa from "../../assets/lupa.png";
import "./Home.css";
import Produtos from "../../components/Produtos";
import Rodape from "../../components/Rodape";


const Home = () => {
    return(
        <>
            <BarraNav></BarraNav>
            <TextoPag>
                <img className="lupa" src={lupa}/>
                <input className="busca" type="text" placeholder="Buscar produto sustentável..."/>
            </TextoPag>
            <h1 className="ajuda--produtos">Recomendações de hoje para você!</h1>
            <Produtos></Produtos>
            <Rodape></Rodape>
        </>
    )
}

export default Home;