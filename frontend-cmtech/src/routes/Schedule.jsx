import React from "react";

import Header from "../components/Header";
import Footer from '../components/Footer';
import Copyright from "../components/Copyright";

const Schedule = () => {
    return (
        <div>
            <Header title="Schedule" />
            <h1>Schedule</h1>
            <div className='copy'>
            <Copyright sx={{ pt: 4 }} />
            </div>
        </div>
    )
}

export default Schedule