import { useContext, useState } from "react";
import { TokenContext } from "./TokenContext";

const TokenProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || '')

    const saveToken = (newToken) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    const deleteToken = () => {
        setToken('')
        localStorage.removeItem('token')
    }

    return (
        <div>
            <TokenContext.Provider value={{ token, saveToken, deleteToken }}>
                {children}
            </TokenContext.Provider>
        </div>
    )
}

export default TokenProvider