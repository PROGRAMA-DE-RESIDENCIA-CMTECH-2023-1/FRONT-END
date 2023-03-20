import './EsqueciSenha.css'

import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';

const EsqueciSenha = () => {
    return(
        <div className='EsqueciSenha'>
            <Header title="Esqueci a senha"/>
            <div className='Dados'>
                <h2>Recuperar Senha</h2>
                <form action="">
                <TextField id="outlined-basic" label="Email de recuperação" variant="outlined"  sx={{width:252 , marginTop: 4}}/>
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