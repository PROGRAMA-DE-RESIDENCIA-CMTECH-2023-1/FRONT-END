import React, { useState, useEffect } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions'; 
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Departamentos*/

const InputDepartment = (props) => {

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [org, setOrg] = useState(props.org)
    const [org_id, setOrgId] = useState(props.org_id)

    function handleClose() {
        props.handleClose()
    }

    function handleConfirm() {
        const newDepartment = {
            id: id,
            name: name,
            org: org,
            org_id: org_id
        }
        props.handleConfirm(newDepartment)
        props.handleClose()
    }

    useEffect(() => {
        setId(props.id)
        setName(props.name)
        setOrg(props.org)
        setOrgId(props.org_id)
    }, [props.open])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Departamento
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome do Departamento" type="text" variant="outlined" fullWidth
                        value={name} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
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
                        sx={{ background: 'gray', marginTop: 4 , width: 150, marginLeft: 8, marginRight:16 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton handleClose={handleClose} handleConfirm={handleConfirm} btnName={props.btnName}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputDepartment