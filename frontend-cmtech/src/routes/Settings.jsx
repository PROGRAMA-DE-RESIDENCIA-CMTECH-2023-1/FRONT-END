import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import { TokenContext } from '../token/TokenContext';

/* Página Configurações */

const Settings = () => {
    const {token} = useContext(TokenContext)

    return (
        <div>
            <Header title="Settings" />
            <h1>Perfil</h1>
            <h1>Notificações</h1>
            <h1>Ajuda</h1>
            <h1>Sobre</h1>
            <Link to={token? "../Login": "/"}> 
                    <div className='Options'>
                    <h1>Sair ou trocar de conta</h1>
                    </div>
                </Link> 
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Settings