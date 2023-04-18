import React, { useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Departamentos*/

const CreateDepartment = (props) => {

    const [nome, setNome] = useState('')
    const [org, setOrg] = useState('')

    function handleClose() {
        props.handleClose()
    }

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Departamento
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Departamento" type="text" variant="outlined" fullWidth
                        value={nome} sx={{ marginTop: 4 }}
                        onChange={e => setNome(e.target.value)}
                    />
                    <TextField
                        id="org" label="Organização" type="text" variant="outlined" fullWidth
                        value={org} sx={{ marginTop: 4 }}
                        onChange={e => setOrg(e.target.value)}
                    />
                    
                </DialogContent>
                <DialogActions style={{ justifyContent: "space-around" }}>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton handleClose={handleClose} btnName='Adicionar'/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CreateDepartment