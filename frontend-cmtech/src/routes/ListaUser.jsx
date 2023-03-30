import './Lista.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import { TextField } from '@mui/material';
import CreateUser from '../components/CreateUser';
import Copyright from "../components/Copyright";


/* Página Lista de Usuários */

const usuarios = [
    { id: 1, nome: 'João', cargo: 'Analista', setor: 'TI', online: true },
    { id: 2, nome: 'Maria', cargo: 'Gerente', setor: 'Marketing', online: false },
    { id: 3, nome: 'Pedro', cargo: 'Desenvolvedor', setor: 'TI', online: true },
    { id: 4, nome: 'Ana', cargo: 'Analista', setor: 'Contabilidade', online: true },
    { id: 5, nome: 'José', cargo: 'Gerente', setor: 'Vendas', online: false },
];

const ListaUser = () => {
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroCargo, setFiltroCargo] = useState('');
    const [filtroSetor, setFiltroSetor] = useState('');
    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose () {
        setOpen(false);
    };

    const filtrarUsuarios = usuario => {
        if (filtroNome && !usuario.nome.toLowerCase().includes(filtroNome.toLowerCase())) {
            return false;
        }
        if (filtroCargo && !usuario.cargo.toLowerCase().includes(filtroCargo.toLowerCase())) {
            return false;
        }
        if (filtroSetor && !usuario.setor.toLowerCase().includes(filtroSetor.toLowerCase())) {
            return false;
        }
        return true;
    };

    const usuariosFiltrados = usuarios.filter(filtrarUsuarios);

    return (
        <div>
            <Header title="Lista Usuários" />
            <AddButton handleClickOpen={handleClickOpen}>
                <div className='filter'>
                    <TextField
                        className='filter' id="filtroNome" label="Nome" type="text" variant="outlined" fullWidth
                        value={filtroNome}
                        onChange={e => setFiltroNome(e.target.value)}
                    />
                    <TextField
                        className='filter' id="filtroCargo" label="Cargo" type="text" variant="outlined" fullWidth
                        value={filtroCargo}
                        onChange={e => setFiltroCargo(e.target.value)}
                    />
                    <TextField
                        className='filter' id="filtroSetor" label="Setor" type="text" variant="outlined" fullWidth
                        value={filtroSetor}
                        onChange={e => setFiltroSetor(e.target.value)}
                    />
                </div>
            </AddButton>
            <CreateUser open={open} handleClose={handleClose}/>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Perfil</th>
                            <th>Departamento</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuariosFiltrados.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cargo}</td>
                                <td>{usuario.setor}</td>
                                <td >
                                    <div>
                                        <span className={usuario.online ? 'online' : 'offline'}></span>
                                        {usuario.online ? 'Online' : 'Offline'}
                                    </div>
                                </td>
                                <td>
                                    <div className='icones'>
                                        <EditIcon />
                                        <DeleteIcon />
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

export default ListaUser;