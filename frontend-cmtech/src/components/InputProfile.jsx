import React, { useEffect, useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton"

/* Área de criar Perfis*/

const InputProfile = (props) => {
 
    const [name, setName] = useState(props.name)
    const [department, setDepartment] = useState(props.department)
    const [org, setOrg] = useState(props.org)

    function handleClose() {
        props.handleClose()
    }

    useEffect(() => {
        setName(props.name)
        setDepartment(props.department)
        setOrg(props.org)
    }, [props.open])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Perfil
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Perfil" type="text" variant="outlined" fullWidth
                        value={name} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="department" label="Departamento" type="text" variant="outlined" fullWidth
                        value={department} sx={{ marginTop: 4 }}
                        onChange={e => setDepartment(e.target.value)}
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
                    <InputButton handleClose={handleClose} btnName={"Adicionar"}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputProfile