import React, { useState, useEffect } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";
import { api } from '../libs/Api';
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

/* Área de criar Usuários*/

const InputUser = (props) => {

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [profile, setProfile] = useState(props.profile)
    const [department, setDepartment] = useState(props.department)
    const [org, setOrg] = useState(props.org)
    const [profiles, setProfiles] = useState([])
    const [departments, setDepartments] = useState([])
    const [orgs, setOrgs] = useState([])

    function handleClose() {
        props.handleClose()
    }

    function handleConfirm() {
        const newUser = {
            id: id,
            name: name,
            profile: profile,
            department: department,
            org: org
        }
        props.handleConfirm(newUser)
        props.handleClose()
    }

    useEffect(() => {
        setId(props.id)
        setName(props.name)
        setProfile(props.profile)
        setDepartment(props.department)
        setOrg(props.org)
    }, [props.open])

    useEffect(() => {
        api.get("Profile").then(response => {
            setProfiles(response.data)
        })
        api.get("Department").then(response => {
            setDepartments(response.data)
        })
        api.get("Org").then(response => {
            setOrgs(response.data)
        })
    }, [])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Usuário
                </DialogTitle>
                <DialogContent>

                    <TextField
                        id="nome" label="Nome do Usuário" type="text" variant="outlined" fullWidth
                        value={name ? name : ''} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
                    />

                    <FormControl fullWidth sx={{ marginTop: 4 }}>
                        <InputLabel id="profile-label">Perfil</InputLabel>
                        <Select
                            labelId="profile-label"
                            id="profile"
                            value={profile && profile?.id != 0 ? profile?.id : ''}
                            label="Profile"
                            onChange={e => setProfile(profiles.find(p => p.id == e.target.value))}
                        >
                            {profiles.map(p => (
                                <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 4 }}>
                        <InputLabel id="department-label">Departamento</InputLabel>
                        <Select
                            labelId="department-label"
                            id="department"
                            value={department && department?.id != 0 ? department?.id : ''}
                            label="department"
                            onChange={e =>setDepartment(departments.find(d => d.id == e.target.value))}
                        >
                            {departments.map(d => (
                                <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 4 }}>
                        <InputLabel id="org-label">Organização</InputLabel>
                        <Select
                            labelId="org-label"
                            id="org"
                            value={org && org?.id != 0 ? org?.id : ''}
                            label="department"
                            onChange={e => setOrg(orgs.find(o => o.id == e.target.value))}
                        >
                            {orgs.map(o => (
                                <MenuItem key={o.id} value={o.id}>{o.name}</MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        sx={{ background: 'gray', marginTop: 4, marginRight: 24, width: 150 }}
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>
                    <InputButton handleClose={handleClose} handleConfirm={handleConfirm} btnName={props.btnName} />
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputUser