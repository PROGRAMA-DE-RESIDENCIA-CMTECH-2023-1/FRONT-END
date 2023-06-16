import './Lists.css'
import React, { useContext, useEffect, useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import { TextField, Box, Chip } from '@mui/material';
import InputUser from '../components/InputUser';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';
import { api } from '../libs/Api';
import { TokenContext } from '../token/TokenContext';


/* Página Lista de Usuários */

const ListsUser = () => {
    const [filtroname, setFiltroname] = useState('');
    const [filtroprofile, setFiltroprofile] = useState('');
    const [filtrodepartment, setFiltrodepartment] = useState('');
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [userData, setUserData] = useState(
        { id: 0, name: '', profile: '', profileId: 0, departments: [], departmentsId: [], org: '' , orgId: 0, online: '' }
    )
    const [users, setUsers] = useState([])
    const { openSnack, token } = useContext(TokenContext)
    const config = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }

    function handleClickOpenCreate() {
        setOpenCreate(true);
    };

    function handleCloseCreate() {
        setOpenCreate(false);
    };

    function handleClickOpenUpdate(usuario) {
        setUserData({
            id: usuario.id,
            name: usuario.name,
            profile: usuario.profile,
            profileId: usuario.profileId,
            departments: usuario.departments,
            departmentsId: usuario.departmentsId,
            org: usuario.org,
            orgId: usuario.orgId
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate() {
        setUserData({
            id: 0,
            name: '',
            profile: '',
            profileId: 0,
            departments: [],
            departmentsId: [],
            org: '' ,
            orgId: 0
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(usuario) {
        setUserData({
            id: usuario.id,
            name: usuario.name,
            profile: usuario.profile,
            profileId: usuario.profileId,
            departments: usuario.departments,
            departmentsId: usuario.departmentsId,
            org: usuario.org,
            orgId: usuario.orgId
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setUserData({
            id: 0,
            name: '',
            departments: [],
            departmentsId: [],
            profile: '',
            profileId: 0,
            org: '' ,
            orgId: 0
        })
        setOpenDelete(false)
    }

    async function postUser(newUser) {
        await api.post("User", newUser, config).then(response => {
            setUsers([...users, response.data])
        }).catch(error => {
            openSnack(error.message)
        })
    }

    async function putUser(newUser) {
        await api.put("User", newUser, config).then(response => {
            const filterUsers = users.filter(u => u.id != response.data.id)
            setUsers([...filterUsers, response.data])
        }).catch(error => {
            openSnack(error.message)
        })
    }

    async function deleteUser(userId) {
        await api.delete("User", {
            headers: {
                Authorization: `bearer ${token}`
            },
            params: {
                id: userId
            }
        }).then(response => {
            setUsers(response.data)
        }).catch(error => {
            openSnack(error.message)
        })
    }

    useEffect(() => {
        api.get("User", config).then(response => {
            setUsers(response.data)
        }).catch(error => {
            openSnack(error.message)
        })
    }, [])

    const filtrarUsuarios = usuario => {
        if (filtroname && !usuario.name.toLowerCase().includes(filtroname.toLowerCase())) {
            return false;
        }
        if (filtroprofile && !usuario.profile.toLowerCase().includes(filtroprofile.toLowerCase())) {
            return false;
        }
        if (filtrodepartment && !usuario.department.toLowerCase().includes(filtrodepartment.toLowerCase())) {
            return false;
        }
        return true;
    };

    const usuariosFiltrados = users.filter(filtrarUsuarios);

    return (
        <div>
            <Header title="Lista Usuários" />

            <InputUser
                open={openCreate}
                handleClose={handleCloseCreate}
                handleConfirm={postUser}
                config={config}
                btnName="Adicionar"
                id={0} name="" profile="" profileId={0} departments={[]} departmentsId={[]} org=""  orgId={0}
            />
            <InputUser
                open={openUpdate}
                handleClose={handleCloseUpdate}
                handleConfirm={putUser}
                config={config}
                btnName="Atualizar"
                id={userData.id} name={userData.name} profile={userData.profile} profileId={userData.profileId}
                departments={userData.departments} departmentsId={userData.departmentsId} org={userData.org} orgId={userData.orgId}
            />
            <DeleteDialog
                open={openDelete}
                handleClose={handleCloseDelete}
                onDelete={deleteUser}
                name={userData.name}
                id={userData.id}
            />

            <AddButton handleClickOpen={handleClickOpenCreate}>
                <div className='filter'>
                    <TextField
                        className='filter' id="filtroname" label="name" type="text" variant="outlined" fullWidth
                        value={filtroname}
                        onChange={e => setFiltroname(e.target.value)}
                    />
                    <TextField
                        className='filter' id="filtroprofile" label="profile" type="text" variant="outlined" fullWidth
                        value={filtroprofile}
                        onChange={e => setFiltroprofile(e.target.value)}
                    />
                    <TextField
                        className='filter' id="filtrodepartment" label="department" type="text" variant="outlined" fullWidth
                        value={filtrodepartment}
                        onChange={e => setFiltrodepartment(e.target.value)}
                    />
                </div>
            </AddButton>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Perfil</th>
                            <th>Departamento</th>
                            <th>status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosFiltrados.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.name}</td>
                                <td>{usuario.profile ?? ''}</td>
                                <td>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {usuario.departments.map(d => (
                                            <Chip key={"d"+d} label={d} />
                                        ))}
                                    </Box>
                                </td>
                                <td >
                                    <div>
                                        <span className={usuario.online ? 'online' : 'offline'}></span>
                                        {usuario.online ? "Disponível" : "Em atendimento"}
                                    </div>
                                </td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(usuario)}
                                        />

                                        <DeleteButton
                                            handleClickOpen={_ => handleClickOpenDelete(usuario)}
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

export default ListsUser;