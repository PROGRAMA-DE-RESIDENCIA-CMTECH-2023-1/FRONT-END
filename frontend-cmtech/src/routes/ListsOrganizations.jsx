import './Lists.css'
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton'
import InputOrg from '../components/InputOrg';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';
import { api } from '../libs/Api';

/* Página Lista de Organizações */

const ListsOrganizations = () => {
    const [filtroname, setFiltroname] = useState('');
    const [filtrosegment, setFiltrosegment] = useState('');
    const [filtrogroup, setFiltrogroup] = useState('');
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [orgData, setOrgData] = useState({id: 0, name: '', phone: '', segment: '', segmentId: 0, group: '', groupId: 0})
    const [orgs, setOrgs] = useState([])
 
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
            segment: org.segment,
            segmentId: org.segmentId,
            group: org.group,
            groupId: org.groupId
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate () {
        setOrgData({
            id: 0,
            name: '',
            phone: '',
            segment: '',
            segmentId: 0,
            group: '',
            groupId: 0
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(org) {
        setOrgData({
            id: org.id,
            name: org.name,
            phone: org.phone,
            segment: org.segment,
            segmentId: org.segmentId,
            group: org.group,
            groupId: org.groupId
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setOrgData({
            id: 0,
            name: '',
            phone: '',
            segment: '',
            segmentId: 0,
            group: '',
            groupId: 0
        })
        setOpenDelete(false)
    }

    async function postOrg(newOrg) {
        await api.post("Org", newOrg).then(response => {
            setOrgs([...orgs, response.data])
        })
    }

    async function putOrg(newOrg) {
        await api.put("Org", newOrg).then(response => {
            let filterOrgs = orgs.filter(o => o.id != response.data.id)
            filterOrgs = [...filterOrgs, response.data]
            setOrgs(filterOrgs)
        })
    }

    async function deleteOrg(orgId) {
        await api.delete("Org", {
            params: {
                id: orgId
            }
        }).then(response => {
            setOrgs(response.data)
        })
    }

    useEffect(() => {
        api.get("Org").then(response => {
            setOrgs(response.data)
        })
    }, [])

    const filtrarOrg = org => {
        if (filtroname && !org.name.toLowerCase().includes(filtroname.toLowerCase())) {
            return false;
        }
        if (filtrosegment && !org.segment.toLowerCase().includes(filtrosegment.toLowerCase())) {
            return false;
        }
        if (filtrogroup && !org.group.toLowerCase().includes(filtrogroup.toLowerCase())) {
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
                id={0} name='' phone={{id: 0, name: ""}} segment={{id: 0, name: ""}} group={{id: 0, name: ""}}
                btnName="Adicionar"
            />
            <InputOrg
                open={openUpdate}
                handleClose={handleCloseUpdate}
                handleConfirm={putOrg}
                id={orgData.id} name={orgData.name} phone={orgData.phone}
                segment={orgData.segment} segmentId={orgData.segmentId}
                group={orgData.group} groupId={orgData.groupId}
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
                                <td>{org.segment?.name ?? ''}</td>
                                <td>{org.group?.name ?? ''}</td>
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