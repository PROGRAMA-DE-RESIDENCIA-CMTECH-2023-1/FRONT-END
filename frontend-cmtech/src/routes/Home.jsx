import './Home.css'

import React from "react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header from "../components/Header";
import Footer from '../components/Footer';

const sx = { 
    height: '8vh',
    width: '8vh',
    margin: '1vh'
}

const Home = () => {
    return(
        <div className='Home'>
            <Header title="Home"/>
            <div className='right-div'> 
                <AccountCircleIcon sx={sx}/>
                <h3 className='text'>Olá Nome Usuário!!</h3>
            </div>
            <Footer /> 
        </div> 
    )
} 

export default Home; 