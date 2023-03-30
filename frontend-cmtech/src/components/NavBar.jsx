import './NavBar.css'
import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import NavBarElement from './NavBarElement';
import ListsPopover from './ListsPopover';

/* NavBar */

const sx = { 
    height: '4vh',
    width: '4vh',
    margin: '1vh'
}

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li><FingerprintOutlinedIcon sx={{color:'white', height: '8vh', width: '8vh', marginBottom: '14vh' }} /></li>
                
                <NavBarElement to="/Home">
                    <HomeOutlinedIcon sx={sx} />
                </NavBarElement>

                <NavBarElement to="/Chat">
                    <ModeCommentOutlinedIcon sx={sx} />
                </NavBarElement>

                <NavBarElement to="/Schedule">
                    <AccessTimeOutlinedIcon sx={sx} />
                </NavBarElement>

                <ListsPopover to={[{route: "/ListsUser", title: "Usuários"}, 
                                   {route: "/ListsProfile", title: "Perfis"},
                                   {route: "/ListsOrganizations", title: "Organizações"},
                                   {route: "/ListsDepartament", title: "Departamentos"}]}/>

                <NavBarElement to="/Contact">
                    <HeadsetMicOutlinedIcon sx={sx} />
                </NavBarElement>

                <NavBarElement to="/Settings">
                    <SettingsOutlinedIcon sx={sx} /> 
                </NavBarElement>
            </ul>
            <div>
                <NavBarElement to="/Help">
                    <HelpOutlineOutlinedIcon sx={sx} /> 
                </NavBarElement>
            </div>
        </nav> 
    )
}

export default NavBar;