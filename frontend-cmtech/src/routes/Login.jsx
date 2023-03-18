import './Login.css'

import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"

const Login = () => {
    return(
        <div className='Login'>
            <Header title="Login"/>
            <div className='Data'>
                <h2>Acesso</h2>
                <form action="">
                    <label htmlFor="Login">Login</label>
                    <input type="text" id="Login" placeholder="Digite seu login"/>
                    <label htmlFor="Senha">Senha</label>
                    <input type="password" id="Senha" placeholder='Digite sua senha'/>
                </form>
                <Link to="/EsqueciSenha" className='Sublink'><p>Esqueci minha senha</p></Link>
                <Button variant='contained' color='secondary' sx={{background: '#4B0054', marginTop: 4}}>Entrar</Button>
            </div>
        </div>
    )
}

export default Login;