import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";
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
                <li><FingerprintOutlinedIcon sx={{ height: '16vh', width: '16vh', marginBottom: '4vh' }} /></li>
                <li>
                    <Link to="/Home">
                        <HomeOutlinedIcon sx={sx} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <ModeCommentOutlinedIcon sx={sx} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <AccessTimeOutlinedIcon sx={sx} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <DashboardOutlinedIcon sx={sx} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <HeadsetMicOutlinedIcon sx={sx} />
                    </Link>
                </li>
                <li>
                    <Link>
                        <SettingsOutlinedIcon sx={sx} />
                    </Link>
                </li>
                <li><Link to="/">Login </Link></li>
                <li><Link to="/EsqueciSenha">Esqueci Senha</Link></li>
            </ul>
            <div>
                <Link>
                    <HelpOutlineOutlinedIcon sx={sx} />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;