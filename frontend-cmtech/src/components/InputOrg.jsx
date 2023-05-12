import React, { useEffect, useState } from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputButton from "./InputButton";

/* Área de criar Organizações*/

const InputOrg = (props) => { 

    const [id, setId] = useState(props.id)
    const [name, setName] = useState(props.name)
    const [phone, setPhone] = useState(props.phone)
    const [segment, setSegment] = useState(props.segment)
    const [segmentId, setSegmentId] = useState(props.segmentId)
    const [group, setGroup] = useState(props.group)
    const [groupId, setGroupId] = useState(props.groupId)

    function handleClose() {
        props.handleClose()
    }

    function handleConfirm() {
        const newOrg = {
            id: id,
            name: name,
            phone: phone,
            segment: segment,
            segmentId: segmentId,
            group: group,
            groupId: groupId
        }
        props.handleConfirm(newOrg)
        props.handleClose()
    }

    useEffect(() => {
        setId(props.id)
        setName(props.name)
        setPhone(props.phone)
        setSegment(props.segment)
        setSegmentId(props.segmentId)
        setGroup(props.group)
        setGroupId(props.groupId)
    }, [props.open])

    useEffect(() => {
        api.get("Segment").then(response => {
            setSegment(response.data)
        })
        api.get("Group").then(response => {
            setGroup(response.data)
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
                            onChange={e =>setSegment(segment.find(d => d.id == e.target.value))}
                        >
                            {segment.map(d => (
                                <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>
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
                            onChange={e =>setGroup(group.find(d => d.id == e.target.value))}
                        >
                            {group.map(d => (
                                <MenuItem key={d.id} value={d.id}>{d.name}</MenuItem>
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