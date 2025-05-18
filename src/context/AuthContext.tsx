import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    user: any;
    login : (userData: any) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children : React.ReactNode }> = ({children}) => {
    const [user, setUser] = useState<any>(null)

    const login = (userData: any) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}