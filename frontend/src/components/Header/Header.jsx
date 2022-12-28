import React, {useState, useEffect} from "react";

import viltcademy from "../../assets/viltcademy.png"

const Header = ({ hideMenu }) => {
    const [user, setUser] = useState({})

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')))
    }, []) 

    return (
        <header className="row">
            <div className="col-4">
                <img src={viltcademy} alt="log viltcademy"/>
            </div>
            { !hideMenu && (<div className="col-6">
                <ul className="menu_list">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Trilhas</a></li>
                    <li><a href="#">Minha lista</a></li>
                </ul>
            </div> )}
            <div className="col-2 text-right user">
                <a onClick={logout} className="text-white">Olá {user?.nome}. Sair</a>
            </div>
        </header>
    )
}

export default Header