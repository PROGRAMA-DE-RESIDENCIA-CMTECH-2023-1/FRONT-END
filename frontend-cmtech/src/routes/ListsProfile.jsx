import './Lists.css'
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import AddButton from '../components/AddButton';
import InputProfile from '../components/InputProfile';
import Copyright from "../components/Copyright";
import UpdateButton from '../components/UpdateButton';
import DeleteButton from '../components/DeleteButton';
import { api } from '../libs/Api';
import DeleteDialog from '../components/DeleteDialog';

/* Página Lista de Perfis */

const ListsProfile = () => {

    const [openCreate, setOpenCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [profileData, setProfileData] = useState({ id: 0, name: '' })
    const [profiles, setProfiles] = useState([])

    function handleClickOpenCreate() {
        setOpenCreate(true);
    };

    function handleCloseCreate() {
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

    function handleCloseUpdate() {
        setProfileData({
            id: 0,
            name: '',
        })
        setOpenUpdate(false);
    };

    function handleClickOpenDelete(profile) {
        setProfileData({
            id: profile.id,
            name: profile.name,
        })
        setOpenDelete(true)
    }

    function handleCloseDelete() {
        setProfileData({
            id: 0,
            name: '',
        })
        setOpenDelete(false)
    }

    async function postProfile(newProfile) {
        await api.post("Profile", newProfile).then(response => {
            setProfiles([...profiles, response.data])
        })
    }

    async function deleteProfile(profileId) {
        await api.delete("Profile", {
            params: {
                id: profileId
            }
        }).then(response => {
            setProfiles(response.data)
        })
    }

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
                handleConfirm={postProfile}
                id={profileData.id} name={profileData.name}
                btnName='Adicionar'
            />
            <InputProfile
                open={openUpdate}
                handleClose={handleCloseUpdate}
                id={profileData.id} name={profileData.name}
                btnName='Atualizar'
            />

            <DeleteDialog
                open={openDelete}
                handleClose={handleCloseDelete}
                onDelete={deleteProfile}
                id={profileData.id}
                name={profileData.name}
            />

            <AddButton handleClickOpen={handleClickOpenCreate} />

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
                                        <DeleteButton
                                            handleClickOpen={_ => handleClickOpenDelete(profile)}
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

export default ListsProfile;