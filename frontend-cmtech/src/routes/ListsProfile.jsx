import './Lists.css'
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import InputProfile from '../components/InputProfile';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import { api } from '../libs/Api';

/* Página Lista de Perfis */

const ListsProfile = () => {

    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [profileData, setProfileData] = useState({id:0, name:'', department:'', org:''})
    const [profiles, setProfiles] = useState([])

    function handleClickOpenCreate() {
        setOpenCreate(true); 
    };

    function handleCloseCreate () {
        setOpenCreate(false);
    };

    function handleClickOpenUpdate(profile) {
        setProfileData({
            id: profile.id,
            name: profile.name,
            department: profile.department,
            org: profile.org
        })
        setOpenUpdate(true);
    };

    function handleCloseUpdate () {
        setProfileData({
            id: 0,
            name: '',
            department: '',
            org: ''
        })
        setOpenUpdate(false);
    };

    useEffect(() => {
        api.get("Profile").then(response => {
            setProfiles(response.data)
        })
    }, [])

    return (
        <div>
            <Header title="Lista Perfis" />
            
            <InputProfile
                open={openCreate}
                handleClose={handleCloseCreate}
                id={0} name='' departmente='' org=''
                btnName='Adicionar'
            />
            <InputProfile
                open={openUpdate}
                handleClose={handleCloseUpdate}
                id={profileData.id} name={profileData.name} department={profileData.department} org={profileData.org}
                btnName='Atualizar'
            />

            <AddButton handleClickOpen={handleClickOpenCreate}/>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Perfil</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {profiles.map(profile => (
                            <tr key={profile.id}>
                                <td>{profile.name}</td>
                                <td>
                                    <div className='icones'>
                                        <UpdateButton
                                            handleClickOpen={_ => handleClickOpenUpdate(profile)}
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

export default ListsProfile;