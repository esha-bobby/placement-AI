import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, Role } from '../types';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    role: Role | null;
    login: (user: User) => void;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // On initial load, check sessionStorage for a logged-in user
        try {
            const storedUser = sessionStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Failed to parse user from sessionStorage", error);
            sessionStorage.removeItem('user');
        } finally {
            setLoading(false);
        }
    }, []);

    const login = (loggedInUser: User) => {
        setUser(loggedInUser);
        try {
            sessionStorage.setItem('user', JSON.stringify(loggedInUser));
        } catch (error) {
            console.error("Failed to save user to sessionStorage", error);
        }
    };

    const logout = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };

    const isAuthenticated = !!user;
    const role = user ? user.role : null;

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, role, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};