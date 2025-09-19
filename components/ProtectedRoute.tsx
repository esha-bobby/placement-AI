
import React from 'react';
// FIX: Updated to use `Navigate` from react-router-dom v6 instead of `Redirect` from v5.
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Role } from '../types';

interface ProtectedRouteProps {
    children: JSX.Element;
    allowedRoles: Role[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
    const { isAuthenticated, role, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-primary"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // FIX: Use `Navigate` component with state passing in react-router-dom v6.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!role || !allowedRoles.includes(role)) {
        // FIX: Use `Navigate` component for react-router-dom v6.
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
