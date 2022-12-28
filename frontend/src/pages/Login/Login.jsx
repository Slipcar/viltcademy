import React, {useState} from "react";
import api from "../../services/api";
import Header from '../../components/Header/Header';

import './login.css';
import vilt_logo from "../../assets/vilt-logo-white.png";

const Login = () => {
    
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const login = async() => {
        try {
            const response = await api.post('usuario/login',credentials)
            const res = response.data

            if (res.error) {
                alert(res.message)
                return false
            }
            console.table(credentials)
            console.table(res.usuario)
            localStorage.setItem('@user', JSON.stringify(res.usuario))
            window.location.reload()
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div 
            className="container-fluid bg_filmes"
            style={{
                position: 'fixed',
                height: '100%',
            }}
            >
            <Header hideMenu={true} />
            <div id="caixa_login" className="col-4 offset-4">
                <h1 className="text-white">Entrar</h1>
                <br/>
                <>
                    <input 
                        type="email" 
                        className="form-control form-control-lg" 
                        placeholder="Usuário Vilt" 
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                email: e.target.value
                            })
                        }}
                    />
                    <br/>
                    <input 
                        type="password" 
                        className="form-control form-control-lg" 
                        placeholder="Senha" 
                        onChange={(e) => {
                            setCredentials({
                                ...credentials,
                                password: e.target.value
                            })
                        }}
                    />
                    <br/>
                    <div className="d-grid gap-2">
                        <button className="btn btn-lg btn-block btn-danger" onClick={login}>Entrar</button>
                    </div>
                    <div className="row mt-4">
                        <div className="col text-muted">
                            <input type="checkbox"/>
                            Lembrar de mim.
                        </div>
                        <div className="col text-end">
                            <a href="#" className="text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                </>
            </div>
            <div>
                <img className="footer-img" src={vilt_logo} alt="log Vilt"/>
            </div>
        </div>
    )
}

export default Login

