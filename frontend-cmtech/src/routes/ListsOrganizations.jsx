import './Lists.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import Footer from '../components/Footer';
import AddButton from '../components/AddButton'
import CreateOrg from '../components/CreateOrg';
import Copyright from "../components/Copyright";

/* Página Lista de Organizações */

const orgs = [
    { id: 1, nome: 'João', cargo: 'Analista', setor: 'TI', online: true },
    { id: 2, nome: 'Maria', cargo: 'Gerente', setor: 'Marketing', online: false },
    { id: 3, nome: 'Pedro', cargo: 'Desenvolvedor', setor: 'TI', online: true },
    { id: 4, nome: 'Ana', cargo: 'Analista', setor: 'Contabilidade', online: true },
    { id: 5, nome: 'José', cargo: 'Gerente', setor: 'Vendas', online: false },
];

const ListsOrganizations = () => {

    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose () {
        setOpen(false);
    };

    return (
        <div>
            <Header title="Lista Organizações" />

            <AddButton handleClickOpen={handleClickOpen}/>
            <CreateOrg open={open} handleClose={handleClose}/>
            
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
                        {orgs.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cargo}</td>
                                <td>{usuario.setor}</td>
                                <td>{usuario.online ? 'Online' : 'Offline'}</td>
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

export default ListsOrganizations;