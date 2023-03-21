import './Login.css'

import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

const Login = () => {
    return(
        <div className='Login'> 
            <div className='Data'>
                <h2>Acesso</h2>
                <form action="">
                    <TextField className='imput' id="outlined-basic" label="E-mail" variant="outlined"  sx={{width:395 , marginTop: 4}}/>
                    <TextField className='imput'id="outlined-basic" label="Senha" variant="outlined" margin="normal" sx={{width:395 , marginTop: 4}} type="password"/>                    
                    <Link to="/EsqueciSenha" className='Sublink'><p>Esqueci minha senha</p></Link>
                    <Button variant='contained' color='secondary' sx={{background: '#4B0054', marginTop: 4,width:395}}>Entrar</Button>
                </form>
            </div> 
        </div>
    )
}

export default Login;