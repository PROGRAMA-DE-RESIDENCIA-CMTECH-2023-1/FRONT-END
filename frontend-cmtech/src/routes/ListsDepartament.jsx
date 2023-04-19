import './Lists.css'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import InputDepartment from '../components/InputDepartment';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';

/* Página Lista de Departamentos */

const departaments = [
    { id: 1, name: 'Suporte', org: 'CMTech' },
    { id: 2, name: 'Infraestrutura', org: 'CMTech' },
    { id: 3, name: 'Suporte', org: 'CMTech' },
    { id: 4, name: 'Suporte', org: 'CMTech' },
    { id: 5, name: 'JoInfraestruturasé', org: 'CMTech' },
];

const ListsDepartament = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [departamentData, setDepartmentData] = useState({id: 0, name: "", org: ""})

    function handleClickOpenCreate() {
        setOpenCreate(true)
    }

    function handleCloseCreate() {
        setOpenCreate(false)
    }

    function handleClickOpenUpdate(departament) {
        setDepartmentData({
            id: departament.id,
            name: departament.name,
            org: departament.org
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate() {
        setDepartmentData({
            id: 0,
            name: '',
            org: ''
        })
        setOpenUpdate(false);
    };

    return (
        <div>
            <Header title="Lista Departamentos" />

            <InputDepartment
                open={openCreate}
                handleClose={handleCloseCreate}
                btnName="Adicionar"
                id={0} name="" org=""
            />
            <InputDepartment
                open={openUpdate}
                handleClose={handleCloseUpdate}
                btnName="Atualizar"
                id={departamentData.id} name={departamentData.name} org={departamentData.org}
            />

            <AddButton handleClickOpen={handleClickOpenCreate} />

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
                        {departaments.map(departament => (
                            <tr key={departament.id}>
                                <td>{departament.name}</td>
                                <td>{departament.org}</td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(departament)}
                                        />
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

export default ListsDepartament;