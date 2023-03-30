import React, { useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

/* Área de criar Organizações*/

const CreateOrg = (props) => {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [segmento, setSegmento] = useState('')
    const [grupo, setGrupo] = useState('')

    function handleClose() {
        props.handleClose()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Organização
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome da Organização" type="text" variant="outlined" fullWidth
                        value={nome} sx={{ marginTop: 4 }}
                        onChange={e => setNome(e.target.value)}
                    />
                    <TextField
                        id="telefone" label="Telefone" type="" variant="outlined" fullWidth
                        value={telefone} sx={{ marginTop: 4 }}
                        onChange={e => setTelefone(e.target.value)}
                    />
                    <TextField
                        id="segmento" label="Segmento" type="text" variant="outlined" fullWidth
                        value={segmento} sx={{ marginTop: 4 }}
                        onChange={e => setSegmento(e.target.value)}
                    />  
                    <TextField
                        id="grupo" label="Grupo" type="text" variant="outlined" fullWidth
                        value={grupo} sx={{ marginTop: 4 }}
                        onChange={e => setGrupo(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, marginRight: 12, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <Button
                        variant='contained' color='secondary'
                        sx={{ background: '#4B0054', marginTop: 4, marginRight: 12, width: 150 }}
                        onClick={handleClose}
                    >
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateOrg