import './Login.css'

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

/* Página Login */

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return(
        <div className='Login'> 
            <div className='Data'>
                <h2>Acesso</h2>
                <form action="">
                    <TextField
                        className='input' id="email" label="E-mail" type="email" variant="outlined" fullWidth
                        value={email} sx={{marginTop: 4}}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        className='input'id="senha" label="Senha" variant="outlined" margin="normal" fullWidth
                        value={senha} sx={{marginTop: 4}} type="password"
                        onChange={e => setSenha(e.target.value)}
                    />                    
                    <Link to="/EsqueciSenha" className='Sublink'><p>Esqueci minha senha</p></Link>
                    <Button variant='contained' color='secondary' sx={{background: '#4B0054', marginTop: 4,width:395}}>Entrar</Button>
                </form>
            </div> 
        </div>
    )
}

export default Login;