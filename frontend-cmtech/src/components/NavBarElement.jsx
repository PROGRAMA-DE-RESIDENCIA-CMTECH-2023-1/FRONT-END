import React, { useContext, useEffect, useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { TokenContext } from '../token/TokenContext';

const NavBarElement = ({ to, validate, children }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const { openSnack } = useContext(TokenContext)
    const [linkTo, setLinkTo] = useState(to)

    const validation = () => {
        if (validate) {
            setLinkTo(to)
        } else {
            openSnack("Faça o Login para acessar essa aba")
            setLinkTo("/")
        }
    }

    useEffect(() => {
        validation()
    }, [validate])

    return (
        <li className={isActive ? 'active' : 'inactive'}>
            <Link to={linkTo} onClick={validation}>
                {children}
            </Link>
        </li>
    )
}

export default NavBarElement;