import { useState } from "react";
import { TokenContext } from "./TokenContext";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


const TokenProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || '')
    const [snack, setSnack] = useState({open: false, message: ''})

    const saveToken = (newToken) => {
        setToken(newToken)
        localStorage.setItem('token', newToken)
    }

    const deleteToken = () => {
        setToken('')
        localStorage.removeItem('token')
    }

    const openSnack = (message) => {
        setSnack({open: true, message: message})
    }

    return (
        <div>
            <TokenContext.Provider value={{ token, saveToken, deleteToken, openSnack }}>
                {children}
            </TokenContext.Provider>
            
            <Snackbar open={snack.open} autoHideDuration={6000} onClose={() => setSnack(false, '')}>
                <Alert onClose={() => setSnack(false, '')} severity="error" sx={{ width: '100%' }}>
                    {snack.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default TokenProvider