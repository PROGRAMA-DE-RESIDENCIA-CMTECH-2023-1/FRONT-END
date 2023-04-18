import './Lists.css'
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import AddButton from '../components/AddButton'
import InputOrg from '../components/InputOrg';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';

/* Página Lista de Organizações */

const orgs = [
    { id: 1, name: 'CMTech', phone: '+55 (81) 0 0000-0000', segment: 'Tecnologia da Informação', group: 'CMTech' },
    { id: 2, name: 'CMTech', phone: '+55 (81) 0 0000-0000', segment: 'Tecnologia da Informação', group: 'CMTech' },
    { id: 3, name: 'CMTech', phone: '+55 (81) 0 0000-0000', segment: 'Tecnologia da Informação', group: 'CMTech' },
    { id: 4, name: 'CMTech', phone: '+55 (81) 0 0000-0000', segment: 'Tecnologia da Informação', group: 'CMTech' },
    { id: 5, name: 'CMTech', phone: '+55 (81) 0 0000-0000', segment: 'Tecnologia da Informação', group: 'CMTech' }
];

const ListsOrganizations = () => {

    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [orgData, setOrgData] = useState({id: 0, name: '', phone: '', segment: '', group: ''})

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
            group: org.group
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate () {
        setOrgData({
            id: 0,
            name: '',
            phone: '',
            segment: '',
            group: ''
        })
        setOpenUpdate(false);
    };

    return (
        <div>
            <Header title="Lista Organizações" />

            <InputOrg
                open={openCreate}
                handleClose={handleCloseCreate}
                id={0} name='' phone='' segment='' group=''
                btnName="Adicionar"
            />
            <InputOrg
                open={openUpdate}
                handleClose={handleCloseUpdate}
                id={orgData.id} name={orgData.name} phone={orgData.phone} segment={orgData.segment} group={orgData.group}
            />

            <AddButton handleClickOpen={handleClickOpenCreate}/>
            
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
                        {orgs.map(org => (
                            <tr key={org.id}>
                                <td>{org.name}</td>
                                <td>{org.phone}</td>
                                <td>{org.segment}</td>
                                <td>{org.group}</td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(org)}
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

export default ListsOrganizations;