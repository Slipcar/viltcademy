import React from "react";

import v_logo from "../../assets/v_logo.png"
import kotlin_logo from "../../assets/kotlin/kotlin_logo.png"

const Hero = ({ filme }) => {

    return (
        <div 
            id="hero" 
            className="container-fluid"
            style={{
                backgroundImage: `url(${ filme.capa })`
            }}
        >
            <div className="container">
                <div className="row" id="hero_infos">
                    <div className="col-6">
                        <p className="text-white">
                            <img className="logo_v" src={v_logo} alt="V logo"/>
                            Cursos
                        </p>
                        <p><img className="logo" src={filme.logo} /></p>
                        <h1 className="text-white">Top 1 em Cursos hoje na Vilt</h1>
                        <p className="text-white">{filme.descricao?.substr(0, 190)} ...</p>
                        <br/>
                        <button className="btn btn-lg btn-custom-white">
                            <span className="mdi mdi-play"></span>
                            Assistir
                        </button>
                        <button className="btn btn-lg btn-custom-translucent">
                            <span className="mdi mdi-information-outline"></span>
                            Mais Informações
                        </button>
                    </div>
                </div>
            </div>
            <div className="img-gradient"></div>
        </div>
    )
}

export default Hero