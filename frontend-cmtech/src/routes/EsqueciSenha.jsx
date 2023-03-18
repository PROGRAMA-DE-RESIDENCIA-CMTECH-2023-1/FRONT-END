import './EsqueciSenha.css'

import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"

const EsqueciSenha = () => {
    return(
        <div className='EsqueciSenha'>
            <Header title="Esqueci a senha"/>
            <div className='Dados'>
                <h2>Recuperar Senha</h2>
                <form action="">
                    <label htmlFor="email">Email de recuperação</label>
                    <input type="text" name="email" id="email" placeholder='nome@email.com.br'/>
                </form>
                <div className='Btns'>
                    <Link to='/'>Cancelar</Link>
                    <Button variant='contained'color='secondary' sx={{background: '#4B0054'}}>Enviar</Button>
                </div>
            </div>
        </div>
    )
}

export default EsqueciSenha;