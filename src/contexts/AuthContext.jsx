import React, { createContext, useState } from 'react';
import { loginService, registerService } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const loggedInUser = await loginService(email, password);
        setUser(loggedInUser);
    };

    const register = async (email, password) => {
        const registeredUser = await registerService(email, password);
        setUser(registeredUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
