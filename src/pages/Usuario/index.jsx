import React from "react";
import BarraNav from "../../components/BarraNav";
import TextoPag from "../../components/TextoPag";
import CardUsuario from "../../components/CardUsuario";

const Usuario = () => {
    return(
        <>
            <BarraNav></BarraNav>
            <TextoPag>
                <h1 className="pagina">Dados Pessoais</h1>
            </TextoPag>
            <CardUsuario></CardUsuario>
        </>
    )
}

export default Usuario;