import React, {useState, useEffect} from "react";
import Episodio from "../Episodio/Episodio";
import api from "../../services/api"

// import kotlin_logo from "../../assets/kotlin/kotlin_logo.png"
// import v_logo from "../../assets/v_logo.png"

const ModalFilm = () => {

    const [film, setFilm] = useState({})
    const [episodios, setEpisodios] = useState([])


    const selectFilmListener = () => {
        window.addEventListener('selectFilm', (data) => {
            setFilm(data.detail)
        })
    }
    
    const getEpisodios = async(temporada_id) => {
        try {
            const response = await api.get(`/episodio/temporada/${temporada_id}`)
            const res = response.data

            if(res.error) {
                alert(res.message)
                return false
            }

            setEpisodios(res.episodios)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        selectFilmListener()
    }, [])

    useEffect(() => {
        if(film.tipo === 'Série'){
            getEpisodios(film.temporadas[0]?._id)
        }
    }, [film])

    return(
        <div class="modal fade" id="modal-filme">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="modal-hero" style={{ backgroundImage: `url(${film.capa})` }}>
                            {/* <p>
                                <img className="logo_v" src={v_logo} alt="V logo"/>
                                Cursos
                            </p> */}
                            <img src={film.logo} alt="Kotlin logo"/>
                            <div class="col-12 modal-hero-infos">
                                <button class="btn btn-lg btn-custom-white">
                                    <span class="mdi mdi-play"></span>Assistir
                                </button>
                                <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                                    <span class="mdi mdi-thumb-up text-white"></span>
                                </a>
                                <a href="#" class="btn-custom-round border-white btn btn-lg rounded-circle opacity-50">
                                    <span class="mdi mdi-thumb-down text-white"></span>
                                </a>
                            </div>
                        </div>    
                        <div class="modal-infos">
                            <div class="container">
                                <div class="row">
                                    <div class="col-7">
                                        <p class="filme-descricao">{film.descricao}<br/>
                                        </p>
                                    </div>
                                    <div class="col-5">
                                        <p class="filme-elenco">
                                            Mentor: <text>{film.elenco?.join(', ')}</text>
                                            <br/><br/>
                                            Tipo: <text>{film.generos?.join(', ')}</text>
                                            <br/><br/>
                                            Características: <text>{film.cenas_momentos?.join(', ')}</text>
                                        </p>
                                    </div>
                                </div>
                                <br/>
                                {film.tipo === 'Série' && <>
                                    <div class="row">
                                        <div class="col-7">
                                            <h3 class="text-white">Episódios</h3>
                                        </div>
                                        <div class="col-5 text-right">
                                            <select class="form-control" onChange={(e) =>{
                                                getEpisodios(e.target.value)
                                            }}>
                                                {film.temporadas?.map(temporada => <option value={temporada._id}>{temporada.titulo}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <ul id="lista-episodios">
                                            {episodios.map(episodio =>(
                                                console.log(episodio),
                                                <Episodio episodio={episodio} />
                                            ))}
                                        </ul>
                                    </div>
                                </>}
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFilm