import './Lists.css'
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import InputDepartment from '../components/InputDepartment';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import DeleteDialog from '../components/DeleteDialog';
import { api } from '../libs/Api';

/* Página Lista de Departamentos */

const ListsDepartament = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [departmentData, setDepartmentData] = useState({id: 0, name: "", org: "", org_id: 0})
    const [departments, setDepartments] = useState([])

    function handleClickOpenCreate() {
        setOpenCreate(true)
    }

    function handleCloseCreate() {
        setOpenCreate(false)
    }

    function handleClickOpenUpdate(department) {
        setDepartmentData({
            id: department.id,
            name: department.name,
            org: department.org,
            org_id: department.org_id
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate() {
        setDepartmentData({
            id: 0,
            name: '',
            org: '',
            org_id: 0
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(department) {
        setDepartmentData({
            id: department.id,
            name: department.name,
            org: department.org,
            org_id: department.org_id
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setDepartmentData({
            id: 0,
            name: '',
            org: '',
            org_id: 0
        })
        setOpenDelete(false)
    }

    async function postDepartment(newDepartment) {
        await api.post("Department", newDepartment).then(response => {
            setDepartments([...departments, response.data])
        })
    }

    async function putDepartment(newDepartment) {
        await api.put("Department", newDepartment).then(response => {
            const filterDepartments = departments.filter(d => d != response.data.id)
            setDepartments([...filterDepartments, response.data])
        })
    }

    async function deleteDepartment(departmentId) {
        console.log(departmentId)
        await api.delete("Department", {
            params: {
                id: departmentId
            }
        }).then(response => {
            setDepartments(response.data)
        })
    }

    useEffect(() => {
        api.get("Department").then(response => {
            setDepartments(response.data)
        })
    }, [])

    return (
        <div>
            <Header title="Lista Departamentos" />

            <InputDepartment
                open={openCreate}
                handleClose={handleCloseCreate}
                handleConfirm={postDepartment}
                btnName="Adicionar"
                id={0} name="" org=""
            />
            <InputDepartment
                open={openUpdate}
                handleClose={handleCloseUpdate}
                handleConfirm={putDepartment}
                btnName="Atualizar"
                id={departmentData.id} name={departmentData.name} org={departmentData.org} org_id={departmentData.org_id}
            />
            <DeleteDialog
                open={openDelete}
                handleClose={handleCloseDelete}
                onDelete={deleteDepartment}
                id={departmentData.id}
                name={departmentData.name}
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
                        {departments.map(department => (
                            <tr key={department.id}>
                                <td>{department.name}</td>
                                <td>{department.org}</td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(department)}
                                        />
                                        
                                        <DeleteButton
                                            handleClickOpen={_ => handleClickOpenDelete(department)}
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

export default ListsDepartament;