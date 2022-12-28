import React from "react";

import kotlin_thumb from "../../assets/kotlin/kotlin_thumb.png"

const Episodio = ( {episodio} ) => {

    return (
        <li>
            <div class="row">
                <div class="col-1 my-auto text">
                    <h3 class="text-white">{episodio.numero}</h3>
                </div>
                <div class="col-4">
                    <img class="img-fluid" src={episodio.capa} alt="Kotlin thumbnail"/>
                </div>
                <div class="col-7">
                    <h6 class="text-white">{episodio.titulo}</h6>
                    <p class="text-muted">{episodio.descricao}</p>
                </div>
            </div>
        </li>
    )
}

export default Episodio