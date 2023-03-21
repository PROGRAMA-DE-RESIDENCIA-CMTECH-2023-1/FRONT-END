import './EsqueciSenha.css'

import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

const EsqueciSenha = () => {
    return(
        <div className='EsqueciSenha'>
            <div className='Dados'>
                <h2>Recuperar Senha</h2>
                <form action="">
                <TextField className='imput' id="outlined-basic" label="E-mail de recuperação" variant="outlined"  sx={{width:395 , marginTop: 4}}/>
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