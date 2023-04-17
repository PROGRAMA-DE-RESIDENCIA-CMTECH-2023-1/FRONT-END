import './Lists.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import CreateProfile from '../components/CreateProfile';
import Copyright from "../components/Copyright";

/* Página Lista de Perfis */

const profile = [
    { id: 1, nome: 'João', cargo: 'Analista', setor: 'TI' },
    { id: 2, nome: 'Maria', cargo: 'Gerente', setor: 'Marketing' },
    { id: 3, nome: 'Pedro', cargo: 'Desenvolvedor', setor: 'TI' },
    { id: 4, nome: 'Ana', cargo: 'Analista', setor: 'Contabilidade' },
    { id: 5, nome: 'José', cargo: 'Gerente', setor: 'Vendas' },
];

const ListsProfile = () => {

    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose () {
        setOpen(false);
    };

    return (
        <div>
            <Header title="Lista Perfis" />
            
            <AddButton handleClickOpen={handleClickOpen}/>
            <CreateProfile open={open} handleClose={handleClose}/>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Perfil</th>
                            <th>Departamento</th>
                            <th>Organização</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {profile.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cargo}</td>
                                <td>{usuario.setor} </td>
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

export default ListsProfile;