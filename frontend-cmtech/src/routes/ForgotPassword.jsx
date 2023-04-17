import './ForgotPassword.css'

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

/* Página Esqueci Senha */

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    return(
        <div className='ForgotPassword '>
            <div className='Dados'>
                <h2>Recuperar Senha</h2>
                <form action="">
                <TextField
                    className='input' id="outlined-basic" label="E-mail de recuperação" variant="outlined" fullWidth
                    sx={{ marginTop: 4}} value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </form>
                <div className='Btns'>
                    <Link to='/'>Cancelar</Link>
                    <Button variant='contained'color='secondary' sx={{background: '#4B0054'}}>Enviar</Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;