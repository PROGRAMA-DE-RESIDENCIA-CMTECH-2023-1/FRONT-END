import React from "react";

import Header from "../components/Header";
import Footer from '../components/Footer';
import Copyright from "../components/Copyright";


/* Página Contato */

const Contact = () => {
    return (
        <div>
            <Header title="Contact" />
            <h1>Contact</h1>
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Contact