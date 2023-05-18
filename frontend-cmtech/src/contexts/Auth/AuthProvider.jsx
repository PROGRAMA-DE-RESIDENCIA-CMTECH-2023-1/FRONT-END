import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email, password) => {
        const data = await api.signin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};
