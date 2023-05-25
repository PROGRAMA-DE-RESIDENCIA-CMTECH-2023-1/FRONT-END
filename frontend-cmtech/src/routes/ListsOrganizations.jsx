import './Lists.css'
import React, { useEffect, useState, useContext } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton'
import InputOrg from '../components/InputOrg';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';
import TextField from "@mui/material/TextField";
import { api } from '../libs/Api';
import { TokenContext } from '../token/TokenContext';

/* Página Lista de Organizações */

const ListsOrganizations = () => {
    const [filtroname, setFiltroname] = useState('');
    const [filtrosegment, setFiltrosegment] = useState('');
    const [filtrogroup, setFiltrogroup] = useState('');
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [orgData, setOrgData] = useState({
        id: 0, name: '', phone: '', segment: {id: 0, name: ""}, group: {id: 0, name: ""}
    })
    const [orgs, setOrgs] = useState([])
    const { openSnack, token } = useContext(TokenContext)
    const config = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }
 
    function handleClickOpenCreate() {
        setOpenCreate(true); 
    };

    function handleCloseCreate () {
        setOpenCreate(false);
    };

    function handleClickOpenUpdate(org) {
        setOrgData({
            id: org.id,
            name: org.name,
            phone: org.phone,
            segment: {name: org.segment, id: org.segmentId},
            group: {name: org.group, id: org.groupId},
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate () {
        setOrgData({
            id: 0,
            name: '',
            phone: '',
            segment: {id: 0, name: ""},
            group: {id: 0, name: ""}
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(org) {
        setOrgData({
            id: org.id,
            name: org.name,
            phone: org.phone,
            segment: {name: org.segment, id: org.segmentId},
            group: {name: org.group, id: org.groupId},
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setOrgData({
            id: 0,
            name: '',
            phone: '',
            segment: {id: 0, name: ""},
            group: {id: 0, name: ""}
        })
        setOpenDelete(false)
    }

    async function postOrg(newOrg) {
        await api.post("Org", config, newOrg).then(response => {
            setOrgs([...orgs, response.data])
        }).catch(error => {
            setSnack(true, error)
        })
    }

    async function putOrg(newOrg) {
        await api.put("Org", config, newOrg).then(response => {
            let filterOrgs = orgs.filter(o => o.id != response.data.id)
            filterOrgs = [...filterOrgs, response.data]
            setOrgs(filterOrgs)
        }).catch(error => {
            openSnack(error.message)
        })
    }

    async function deleteOrg(orgId) {
        await api.delete("Org", config, {
            params: {
                id: orgId
            }
        }).then(response => {
            setOrgs(response.data)
        }).catch(error => {
            openSnack(error.message)
        })
    }

    useEffect(() => {
        api.get("Org", config).then(response => {
            setOrgs(response.data)
        }).catch(error => {
            openSnack(error.message)
        })
    }, [])

    const filtrarOrg = org => {
        if (filtroname && !org.name.toLowerCase().includes(filtroname.toLowerCase())) {
            return false;
        }
        if (filtrosegment && !org.segment.name.toLowerCase().includes(filtrosegment.toLowerCase())) {
            return false;
        }
        if (filtrogroup && !org.group.name.toLowerCase().includes(filtrogroup.toLowerCase())) {
            return false;
        }
        return true;
    };

    const orgFiltrados = orgs.filter(filtrarOrg);
    
    return (
        <div>
            <Header title="Lista Organizações" />

            <InputOrg
                open={openCreate}
                handleClose={handleCloseCreate}
                handleConfirm={postOrg}
                id={0} name='' phone='' segment={{id: 0, name: ""}} group={{id: 0, name: ""}}
                btnName="Adicionar"
            />
            <InputOrg
                open={openUpdate}
                handleClose={handleCloseUpdate}
                handleConfirm={putOrg}
                id={orgData.id} name={orgData.name} phone={orgData.phone}
                segment={orgData.segment} group={orgData.group}
                btnName="Atualizar"
            />
            <DeleteDialog
                open={openDelete}
                handleClose={handleCloseDelete}
                onDelete={deleteOrg}
                id={orgData.id}
                name={orgData.name}
            />

        <AddButton handleClickOpen={handleClickOpenCreate}>
            <div className='filter'>
                    <TextField
                        className='filter' id="filtroname" label="name" type="text" variant="outlined" fullWidth
                        value={filtroname}
                        onChange={e => setFiltroname(e.target.value)}
                    />
                    <TextField
                        className='filter' id="filtrosegment" label="segment" type="text" variant="outlined" fullWidth
                        value={filtrosegment}
                        onChange={e => setFiltrosegment(e.target.value)}
                    />
                    <TextField
                        className='filter' id="filtrogroup" label="group" type="text" variant="outlined" fullWidth
                        value={filtrogroup}
                        onChange={e => setFiltrogroup(e.target.value)}
                    />
                </div>
            </AddButton>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Organização</th>
                            <th>Telefone</th>
                            <th>Segmento</th>
                            <th>Grupo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orgFiltrados.map(org => (
                            <tr key={org.id}> 
                                <td>{org.name}</td>
                                <td>{org.phone}</td>
                                <td>{org.segment ?? ''}</td>
                                <td>{org.group ?? ''}</td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(org)}
                                        />
                                        
                                        <DeleteButton
                                            handleClickOpen={_ => handleClickOpenDelete(org)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    );
};

export default ListsOrganizations;