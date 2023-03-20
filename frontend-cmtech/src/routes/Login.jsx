import './Login.css'

import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

const Login = () => {
    return(
        <div className='Login'>
            <Header title="Login"/>
            <div className='Data'>
                <h2>Acesso</h2>
                <form action="">
                    <TextField id="outlined-basic" label="E-mail" variant="outlined"  sx={{width:252 , marginTop: 4}}/>
                    <TextField id="outlined-basic" label="Senha" variant="outlined" margin="normal" sx={{width:252 , marginTop: 4}} type="password"/>                    
                </form>
                <Link to="/EsqueciSenha" className='Sublink'><p>Esqueci minha senha</p></Link>
                <Button variant='contained' color='secondary' sx={{background: '#4B0054', marginTop: 4}}>Entrar</Button>
            </div> 
        </div>
    )
}

export default Login;