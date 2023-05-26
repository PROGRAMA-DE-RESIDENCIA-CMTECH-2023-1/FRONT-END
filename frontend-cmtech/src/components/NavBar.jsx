import './NavBar.css'
import React, { useState, useContext, useEffect } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NavBarElement from './NavBarElement';
import ListsPopover from './ListsPopover';
import { TokenContext } from '../token/TokenContext';
import { api } from '../libs/Api'

/* NavBar */

const sx = {
    height: '4vh',
    width: '4vh',
    margin: '1vh'
}

const NavBar = () => {
    const { token } = useContext(TokenContext)
    const [validate, setValidate] = useState(false)
    
    useEffect(() => {
        if (token) {
            api.get("Validation", {
                params: {
                    token: token
                }
            }).then(response => {
                if(response.data) {
                    setValidate(true)
                }
                else {
                    setValidate(false)
                }
            })
        }
        else {
            setValidate(false)
        }
    }, [token])

    return (
        <nav className="NavBar">
            <ul>
                <li><FingerprintOutlinedIcon sx={{ color: 'white', height: '8vh', width: '8vh', marginBottom: '14vh' }} /></li>

                <NavBarElement to="/Home" validate={validate}>
                    <HomeOutlinedIcon sx={sx} />
                </NavBarElement>

                <NavBarElement to="/Chat" validate={validate}>
                    <ModeCommentOutlinedIcon sx={sx} />
                </NavBarElement>

                <NavBarElement to="/Schedule" validate={validate}>
                    <AccessTimeOutlinedIcon sx={sx} />
                </NavBarElement>

                <ListsPopover to={[{ route: "/ListsUser", title: "Usuários" },
                { route: "/ListsProfile", title: "Perfis" },
                { route: "/ListsOrganizations", title: "Organizações" },
                { route: "/ListsDepartament", title: "Departamentos" }]} validate={validate} />

                <NavBarElement to="/Contact" validate={validate}>
                    <HeadsetMicOutlinedIcon sx={sx} />
                </NavBarElement>

                <NavBarElement to="/Settings" validate={validate}>
                    <SettingsOutlinedIcon sx={sx} />
                </NavBarElement>
            </ul>
            <div>
                <NavBarElement to="/Help" validate={validate}>
                    <HelpOutlineOutlinedIcon sx={sx} />
                </NavBarElement>
            </div>
        </nav>
    )
}

export default NavBar;