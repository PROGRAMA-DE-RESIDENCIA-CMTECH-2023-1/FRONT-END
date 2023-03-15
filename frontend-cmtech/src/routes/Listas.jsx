import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Listas = () => {
    const {id} = useParams();

    const navigate = useNavigate()

        const handleContact = () => {
            console.log('contato enviado')
            return navigate("/")
        }

    return(
        <div>
            <h1>exibindo mais infos</h1>
            <button onClick={handleContact}>enviar mensagem</button>
        </div>
    )
}

export default Listas;