import React from "react";

// import python_thumb from "../../assets/python/python-thumb2.png"
// import java_thumb from "../../assets/java/java-thumb.gif"
// import aem_thumb from "../../assets/aem/aem_thumb.png"
// import kotlin_thumb from "../../assets/kotlin/kotlin_thumb.png"

const Film = ({ film }) => {

    const selectFilm = () => {
        const event = new CustomEvent('selectFilm', {
            detail: film
        })

        window.dispatchEvent(event)
    }

    return (
        <li className="filme" onClick={selectFilm} data-bs-toggle="modal" data-bs-target="#modal-filme">
            <img className="img-fluid" src={film.capa} alt="Capa do curso"/>
            <div className="filme-info">
                <div className="col-12">
                    <a href="#" className="btn-custom-round btn btn-light rounded-circle">
                        <span className="mdi mdi-play"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-up text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-thumb-down text-white"></span>
                    </a>
                    <a href="#" className="btn-custom-round border-white btn rounded-circle opacity-50">
                        <span className="mdi mdi-plus text-white"></span>
                    </a>
                </div>
                <p>T3:EP8 <text>"Meu Episódio"</text></p>
            </div>
        </li>
    )
}

export default Film