import React, {useEffect} from "react";
import ModalFIlmes from "../../components/ModalFilmes/ModalFilm"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Section from "../../components/Section/Section"

import './home.css'
import api from "../../services/api";
import { useState } from "react";

const Home = () => {
    
    const [principal, setPrincipal] = useState({})
    const [sections, setSections] = useState([])

    const getHome = async() => {
        try {
            const response = await api.get('/home')
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }

            setPrincipal(res.principal)
            setSections(res.secoes)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        getHome()
    }, [])

    return (
        <>
            <ModalFIlmes />

            <Header hideMenu={false} />

            <Hero filme={principal}/>

            {sections.map(section => (
                <Section section={section} />
            ))}
        </>  
    )
}

export default Home