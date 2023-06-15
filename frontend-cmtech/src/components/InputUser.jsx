import React, { useState, useEffect } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";
import { api } from '../libs/Api';
import { FormControl, InputLabel, Chip, Box, MenuItem, Select } from "@mui/material";

/* Área de criar Usuários*/

const InputUser = (props) => {

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [profile, setProfile] = useState(props.profile)
    const [profileId, setProfileId] = useState(props.profileId)
    const [departments, setDepartments] = useState(props.departments)
    const [departmentsId, setDepartmentsId] = useState(props.departmentsId)
    const [org, setOrg] = useState(props.org)
    const [profiles, setProfiles] = useState([])
    const [departmentsList, setDepartmentsList] = useState([])
    const [orgs, setOrgs] = useState([])

    function handleClose() {
        props.handleClose()
    }

    function handleConfirm() {
        const newUser = {
            id: id,
            name: name,
            email: name,
            password: "",
            dateRegister: "",
            profileId: profileId,
            profile: profile,
            departmentsId: departmentsId,
            departments: departments,
            orgId: org.id,
            org: org.name
        }
        console.log(newUser)
        //props.handleConfirm(newUser)
        //props.handleClose()
    }

    useEffect(() => {
        setId(props.id)
        setName(props.name)
        setProfile(props.profile)
        setProfileId(props.profileId)
        setDepartments(props.departments) 
        setDepartmentsId(props.departmentsId)
        setOrg(props.org)
    }, [props.open])

    useEffect(() => {
        api.get("Profile", props.config).then(response => {
            setProfiles(response.data)
        })
        api.get("Department", props.config).then(response => {
            setDepartmentsList(response.data)
        })
        api.get("Org", props.config).then(response => {
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
                            value={profile && profileId != 0 ? profileId : ''}
                            label="Profile"
                            onChange={e => {
                                setProfileId(e.target.value)
                                setProfile(profiles.find(p => p.id == e.target.value).name)
                            }
                            }
                        >
                            {profiles.map(p => (
                                <MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>
                                ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: 4 }}>
                        <InputLabel id="department-label">Departamento</InputLabel>
                        <Select
                            labelId="department-label"
                            id="departments"
                            multiple
                            value={departmentsId}
                            label="departments"
                            onChange={
                                e => {
                                    setDepartmentsId([...e.target.value])
                                    setDepartments(departmentsList.map(d => {departmentsId.includes(d.id) ? d.name : null}))
                                }
                            }
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                  {selected.map((value) => (
                                    <Chip key={value} label={departmentsList.find(d => d.id == value).name} />
                                  ))}
                                </Box>
                              )}
                        >
                            {departmentsList.map(d => (
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