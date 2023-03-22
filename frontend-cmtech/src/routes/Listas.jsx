import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Listas = () => {
    const {id} = useParams();

    const navigate = useNavigate()

        const handleContact = () => {
            console.log('contato enviado')
            return navigate("/")
        }

    return(
        <div>
            <Header title="Listas"/>
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
            <button onClick={handleContact}>enviar mensagem</button>
            <Footer />
        </div>
    )
}

export default Listas;