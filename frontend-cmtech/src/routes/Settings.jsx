import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import { TokenContext } from '../token/TokenContext';

/* Página Configurações */

const Settings = () => {
    const { token, deleteToken } = useContext(TokenContext)
    const navigate = useNavigate()

    function logout() {
        deleteToken()
        navigate("/")
    }

    return (
        <div>
            <Header title="Settings" />
            <h1>Perfil</h1>
            <h1>Notificações</h1>
            <h1>Ajuda</h1>
            <h1>Sobre</h1>
            <Link to={token? "../": "/"}> 
                    <div className='Options'>
                    <h1 onClick={logout}>Sair ou trocar de conta</h1>
                    </div>
                </Link> 
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Settings