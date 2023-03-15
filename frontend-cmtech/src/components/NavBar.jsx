import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <Link to="/">Login </Link>
            <Link to="/EsqueciSenha">Esqueci Senha</Link>
            <Link to="/Home"> Home</Link>
        </nav>
    )
}

export default NavBar;