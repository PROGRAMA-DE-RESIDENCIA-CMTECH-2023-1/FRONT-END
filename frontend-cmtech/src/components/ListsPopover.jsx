import React, { useState, useEffect, useContext } from "react";
import './ListsPopover.css'
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import Popover from '@mui/material/Popover';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { TokenContext } from '../token/TokenContext';

/* Icones da NavBar */

const sx = {
    height: '4vh',
    width: '4vh',
    margin: '1vh'
}

const ListsPopover = ({ validate, to }) => {

    const resolvedPath = useResolvedPath("/Lists")
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const [isSelected, setIsSelected] = useState(false)
    const [liClass, setLiClass] = useState()
    const { openSnack } = useContext(TokenContext)

    const [anchor, setAnchor] = useState(null)

    const handleClick = (e) => {
        setAnchor(e.currentTarget)
        setIsSelected(true)
    }

    const handleClose = () => {
        setAnchor(null)
        setIsSelected(false)

        if (!validate) {
            openSnack("Faça o Login para acessar essa aba")
        }
    }

    const open = Boolean(anchor)
    const id = open ? 'popover' : undefined
    
    useEffect(() => {
        if(isActive) {
            setLiClass('active')
        } else if(isSelected) {
            setLiClass('selected')
        } else {
            setLiClass('inactive')
        }
    }, [isActive, open])

    return (
        <li className={liClass}>
            <a>
                <DashboardOutlinedIcon aria-describedby="id" onClick={(e) => handleClick(e)} sx={sx} />
            </a>
            <Popover className="ListsPopover"
                    id={id} open={open} anchorEl={anchor} onClose={handleClose}
                    anchorOrigin={{ vertical: 'center', horizontal: 55 }}
                    transformOrigin={{ vertical: 'center', horizontal: 'left' }}
                >
                    <ul>
                        {to.map((link, i) => {
                            return (
                                <li key={i}>
                                    <Link to={validate ? link.route : "/"} onClick={handleClose}>
                                        {link.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Popover>
        </li>
    )
}

export default ListsPopover;