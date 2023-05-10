import './Lists.css'
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import { TextField } from '@mui/material';
import InputUser from '../components/InputUser';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';
import { api } from '../libs/Api';


/* Página Lista de Usuários */

const ListsUser = () => {
    const [filtroname, setFiltroname] = useState('');
    const [filtroprofile, setFiltroprofile] = useState('');
    const [filtrodepartment, setFiltrodepartment] = useState('');
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [userData, setUserData] = useState({id: 0, name: '', profile: '', department: '', online:''})
    const [users, setUsers] = useState([])

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
            department: usuario.department
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate() {
        setUserData({
            id: 0,
            name: '',
            profile: '',
            department: ''
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(usuario) {
        setUserData({
            id: usuario.id,
            name: usuario.name,
            profile: usuario.profile,
            department: usuario.department
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setUserData({
            id: 0,
            name: '',
            profile: '',
            department: ''
        })
        setOpenDelete(false)
    }

    async function postUser(newUser) {
        await api.post("User", newUser).then(response => {
            setUsers([...users, response.data])
        })
    }

    async function putUser(newUser) {
        await api.put("User", newUser).then(response => {
            const filterUsers = users.filter(u => u.id != response.data.id)
            setUsers([...filterUsers, response.data])
        })
    }

    async function deleteUser(userId) {
        await api.delete("User", {
            params: {
                id: userId
            }
        }).then(response => {
            setUsers(response.data)
        })
    }

    useEffect(() => {
        api.get("User").then(response => {
            setUsers(response.data)
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
                btnName="Adicionar"
                id={0} name="" profile="" department=""
            />
            <InputUser
                open={openUpdate}
                handleClose={handleCloseUpdate}
                handleConfirm={putUser}
                btnName="Atualizar"
                id={userData.id} name={userData.name} profile={userData.profile} department={userData.department}
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
                                <td>{usuario.profile?.name ?? ''}</td>
                                <td>{usuario.department?.name ?? ''}</td>
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