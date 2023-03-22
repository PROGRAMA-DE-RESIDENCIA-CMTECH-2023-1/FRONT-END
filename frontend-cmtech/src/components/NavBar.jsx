import './NavBar.css'
import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

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
                
                <CustomLink to="/Home">
                    <HomeOutlinedIcon sx={sx} />
                </CustomLink>

                <CustomLink to="/Chat">
                    <ModeCommentOutlinedIcon sx={sx} />
                </CustomLink>

                <CustomLink to="/Schedule">
                    <AccessTimeOutlinedIcon sx={sx} />
                </CustomLink>

                <CustomLink to="/Lists">
                    <DashboardOutlinedIcon sx={sx} />
                </CustomLink>

                <CustomLink to="/Contact">
                    <HeadsetMicOutlinedIcon sx={sx} />
                </CustomLink>

                <CustomLink to="/Settings">
                    <SettingsOutlinedIcon sx={sx} />
                </CustomLink>
            </ul>
            <div>
                <CustomLink to="/Help">
                    <HelpOutlineOutlinedIcon sx={sx} />
                </CustomLink>
            </div>
        </nav> 
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive? 'active' : 'inactive'}>
            <Link to={to}>
                {children}
            </Link>
        </li>
    )
}

export default NavBar;