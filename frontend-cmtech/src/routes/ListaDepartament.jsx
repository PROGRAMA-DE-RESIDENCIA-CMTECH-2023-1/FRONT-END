import './Lista.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import CreateDepartment from '../components/CreateDepartment';

const departamentos = [
    { id: 1, nome: 'João', cargo: 'Analista' },
    { id: 2, nome: 'Maria', cargo: 'Gerente' },
    { id: 3, nome: 'Pedro', cargo: 'Desenvolvedor' },
    { id: 4, nome: 'Ana', cargo: 'Analista' },
    { id: 5, nome: 'José', cargo: 'Gerente' },
];

const ListaDepartament = () => {
    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            <Header title="Lista Departamentos" />
            <AddButton handleClickOpen={handleClickOpen}/>
            <CreateDepartment open={open} handleClose={handleClose}/>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Departamento</th>
                            <th>Organização</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {departamentos.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.nome}</td>
                                <td>{usuario.cargo}</td>
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
            <Footer />
        </div>
    );
};

export default ListaDepartament;