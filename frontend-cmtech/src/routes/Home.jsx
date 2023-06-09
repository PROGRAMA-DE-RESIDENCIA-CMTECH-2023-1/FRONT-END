import './Home.css'

import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from "../components/Header";
import Copyright from "../components/Copyright";
import { useNavigate } from 'react-router-dom';

const sx = {
    height: '8vh',
    width: '8vh',
    margin: '1vh'
}

/* Página Início */

const Home = () => {

    return (
        <div className='Home'>
            <Header title="Home" />
            <div className='right-div'>
                <AccountCircleIcon sx={sx} />
                <h3 className='text' >Olá Nome usuário</h3>
            </div>
            <div className='copy'>
                <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Home; 