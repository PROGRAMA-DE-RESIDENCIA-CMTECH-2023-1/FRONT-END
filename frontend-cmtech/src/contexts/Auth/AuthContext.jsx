import { createContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = null;

  const signin = async (email, password) => {
    // Lógica de autenticação aqui
    return true;
  };

  const signout = () => {
    // Lógica de logout aqui
  };

  const authContextValue = {
    user,
    signin,
    signout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
