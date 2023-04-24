import React, { useState, useEffect } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Usuários*/

const InputUser = (props) => {

    const [name, setName] = useState(props.name)
    const [profile, setProfile] = useState(props.email)
    const [department, setDepartment] = useState(props.empresa)

    function handleClose() {
        props.handleClose()
    }

    useEffect(() => {
        setName(props.name)
        setProfile(props.profile)
        setDepartment(props.department)
    }, [props.open])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Usuário
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Usuário" type="text" variant="outlined" fullWidth
                        value={name} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="profile" label="Perfil" type="text" variant="outlined" fullWidth
                        value={profile} sx={{ marginTop: 4 }}
                        onChange={e => setProfile(e.target.value)}
                    />
                    <TextField
                        id="org" label="Organização" type="text" variant="outlined" fullWidth
                        value={department} sx={{ marginTop: 4 }}
                        onChange={e => setDepartment(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, marginRight: 24, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton handleClose={handleClose} btnName={props.btnName}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputUser