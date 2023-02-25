import React from "react";
import './Index.css'
import Header_image from "../../header.png"
import Body_image from "../../body.png"

function Pagina_Inicial(){
    return(
        <div>
            <header>
                <img src={Header_image} />
            </header>
            <body>
                <img className="image_corpo" src={Body_image} />
                <div className="textos">
                    <p className="txt_left">
                        Saiba mais sobre nossos cursos. Clique no botão abaixo
                    </p>
                    <p className="txt_right">
                        Conheça os nossos serviços. Clique no botão abaixo
                    </p>
                </div>
            </body>
        </div>
    )}

export default Pagina_Inicial;