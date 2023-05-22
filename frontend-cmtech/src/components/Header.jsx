import './Header.css'

import { Link } from "react-router-dom";

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext } from 'react';
import { TokenContext } from '../token/TokenContext';

const Header = (props) => {
    const {token} = useContext(TokenContext)

    return (
        <div className='Header'>
            <h2 className='Title'>{props.title}</h2> 
            <div className='Options'>
                <Link>
                    <EmailOutlinedIcon/>
                </Link>
                <Link>
                    <NotificationsNoneOutlinedIcon/> 
                </Link>
                <Link to={token? "../Home": "/"}> 
                    <div className='Options'>
                        <h3>Nome Usuário</h3>
                        <AccountCircleIcon/>
                    </div>
                </Link> 
            </div>
        </div> 
    )
}

export default Header