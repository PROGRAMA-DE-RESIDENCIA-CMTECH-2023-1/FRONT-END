import React, { useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Usuários*/

const InputUser = (props) => {

    const [nome, setNome] = useState(props.name)
    const [email, setEmail] = useState(props.email)
    const [empresa, setEmpresa] = useState(props.empresa)

    function handleClose() {
        props.handleClose()
    }

    useEffect(() => {
        setName(props.name)
        setEmail(props.email)
        setOrg(props.empresa)
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
                        value={nome} sx={{ marginTop: 4 }}
                        onChange={e => setNome(e.target.value)}
                    />
                    <TextField
                        id="email" label="E-mail" type="email" variant="outlined" fullWidth
                        value={email} sx={{ marginTop: 4 }}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField
                        id="empresa" label="Empresa" type="text" variant="outlined" fullWidth
                        value={empresa} sx={{ marginTop: 4 }}
                        onChange={e => setEmpresa(e.target.value)}
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
                    <InputButton handleClose={handleClose} btnName='Adicionar'/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputUser