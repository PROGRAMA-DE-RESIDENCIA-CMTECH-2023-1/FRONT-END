import React, { useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CreateProfile = (props) => {

    const [nome, setNome] = useState('')
    const [department, setDepartment] = useState('')
    const [org, setOrg] = useState('')

    function handleClose() {
        props.handleClose()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Perfil
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Perfil" type="text" variant="outlined" fullWidth
                        value={nome} sx={{ marginTop: 4 }}
                        onChange={e => setNome(e.target.value)}
                    />
                    <TextField
                        id="department" label="Departamento" type="" variant="outlined" fullWidth
                        value={department} sx={{ marginTop: 4 }}
                        onChange={e => setDepartamento(e.target.value)}
                    />
                    <TextField
                        id="org" label="Organização" type="text" variant="outlined" fullWidth
                        value={org} sx={{ marginTop: 4 }}
                        onChange={e => setOrg(e.target.value)}
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

export default CreateProfile