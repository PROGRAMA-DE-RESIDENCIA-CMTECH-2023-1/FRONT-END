import React, { useEffect, useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";
import { api } from '../libs/Api';
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

/* Área de criar Organizações*/

const InputOrg = (props) => { 

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [phone, setPhone] = useState(props.phone)
    const [segment, setSegment] = useState(props.segment)
    const [group, setGroup] = useState(props.group)
    const [segments, setSegments] = useState([])
    const [groups, setGroups] = useState([])

    function handleClose() {
        props.handleClose()
    }

    function handleConfirm() {
        const newOrg = {
            id: id,
            name: name,
            phone: phone,
            segmentId: segment.id,
            segment: segment.name,
            groupId: group.id,
            group: group.name,
        }
        props.handleConfirm(newOrg)
        props.handleClose()
    }

    useEffect(() => {
        setId(props.id)
        setName(props.name)
        setPhone(props.phone)
        setSegment(props.segment)
        setGroup(props.group)
    }, [props.open])

    useEffect(() => {
        api.get("Segment", props.config).then(response => {
            setSegments(response.data)
        })
        api.get("Group", props.config).then(response => {
            setGroups(response.data)
        })
    }, [])

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>
                    Cadastro de Organização
                </DialogTitle>
                <DialogContent>
                    <TextField
                        id="nome" label="Nome da Organização" type="text" variant="outlined" fullWidth
                        value={name} sx={{ marginTop: 4 }}
                        onChange={e => setName(e.target.value)}
                    />
                    <TextField
                        id="telefone" label="Telefone" type="text" variant="outlined" fullWidth
                        value={phone} sx={{ marginTop: 4 }}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <FormControl fullWidth sx={{ marginTop: 4 }}>
                        <InputLabel id="segment-label">Segmento</InputLabel>
                        <Select
                            labelId="segment-label"
                            id="segment"
                            value={segment && segment?.id != 0 ? segment?.id : ''}
                            label="segment"
                            onChange={e =>setSegment(segments.find(s => s.id == e.target.value))}
                        >
                            {segments.map(s => (
                                <MenuItem key={s.id} value={s.id}>{s.name}</MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 4 }}>
                        <InputLabel id="group-label">Grupo</InputLabel>
                        <Select
                            labelId="group-label"
                            id="group"
                            value={group && group?.id != 0 ? group?.id : ''}
                            label="group"
                            onChange={e =>setGroup(groups.find(d => d.id == e.target.value))}
                        >
                            {groups.map(g => (
                                <MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>
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
                    <InputButton handleConfirm={handleConfirm} btnName={props.btnName} />
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InputOrg