import './Home.css'

import React, { useContext } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import { TokenContext } from '../token/TokenContext';
import { useNavigate } from 'react-router';

const sx = {
    height: '8vh',
    width: '8vh',
    margin: '1vh'
}

/* Página Início */

const Home = () => {
    const { deleteToken } = useContext(TokenContext)
    const navigate = useNavigate()

    function logout() {
        deleteToken()
        navigate("/")
    }
    return (
        <div className='Home'>
            <Header title="Home" />
            <div className='right-div'>
                <AccountCircleIcon sx={sx} />
                <h3 className='text' onClick={logout}>Olá Nome usuário, tudo bem?</h3>
            </div>
            <div className='copy'>
                <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Home; 