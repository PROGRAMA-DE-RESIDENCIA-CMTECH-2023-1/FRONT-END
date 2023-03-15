import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            {/* nested routes */}
            <p>
                <Link to="/Home/1">lista usuarios</Link>
            </p>
            <p>
                <Link to="/Home/2">lista grupos</Link>
            </p>
            <p>
                <Link to="/Home/3">lista organizacoes</Link>
            </p>
        </div>
    )
}

export default Home;