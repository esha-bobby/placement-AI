
import React from 'react';
// FIX: Updated to use `useNavigate` from react-router-dom v6 instead of `useHistory` from v5.
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    // FIX: Use `useNavigate` hook for navigation in react-router-dom v6.
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        // FIX: Use `navigate` for navigation.
        navigate('/');
    };

    // FIX: react-router-dom v6 `NavLink` uses a function for `className` to determine active state.
    const navLinkClasses = "hover:text-brand-primary transition-colors text-brand-text-secondary";
    const activeNavLinkClasses = "text-brand-primary";

    return (
        <header className="bg-brand-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-brand-border">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-brand-primary p-2 rounded-lg">
                        <span className="text-white font-bold text-xl">P</span>
                    </div>
                    <span className="text-xl font-bold text-brand-text-primary">PlacementAI</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-lg">
                    {/* FIX: Use a function in `className` and the `end` prop for react-router-dom v6 NavLink. */}
                    <NavLink to="/" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses} end>Home</NavLink>
                    <NavLink to="/features" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>Features</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>Contact</NavLink>
                </div>
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="text-brand-text-primary hover:text-brand-primary transition-colors">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-brand-secondary text-brand-text-primary px-4 py-2 rounded-md hover:bg-red-500/80 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-brand-text-primary hover:text-brand-primary transition-colors px-4 py-2">
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                className="bg-brand-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
