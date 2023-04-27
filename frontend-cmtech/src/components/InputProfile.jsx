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

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)

    function handleClose() {
        props.handleClose()
    }

    function handleConfirm() {
        const newProfile = {
            id: id,
            name: name
        }
        props.handleConfirm(newProfile)
        props.handleClose()
    }

    useEffect(() => {
        setName(props.name)
        setId(props.id)
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
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, marginRight: 18, marginLeft: 6, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton
                        handleConfirm={handleConfirm}
                        btnName={props.btnName}
                    />
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputProfile