import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

const Paths = () => {

    const logado = localStorage.getItem('@user')

    return (
        <BrowserRouter>
            <Routes>
                {!logado && <Route path="/" exact element={<Login />} />}
                {logado && <Route path="/" exact element={<Home />} />}
            </Routes>
        </BrowserRouter>
    )
}

export default Paths