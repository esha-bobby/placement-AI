
import React from 'react';
// FIX: Update imports for react-router-dom v6 compatibility. Using Routes and Navigate.
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { Role } from './types';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import StudentDashboardPage from './pages/student/StudentDashboardPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const AppRoutes: React.FC = () => {
    const { role } = useAuth();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {/* FIX: Use `Routes` instead of `Switch` for react-router-dom v6. */}
                <Routes>
                    {/* FIX: Use `element` prop for component rendering in v6. Path matching is exact by default. */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/features" element={<FeaturesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />

                    {/* FIX: Use `element` prop for protected routes in v6. */}
                    <Route
                        path="/admin/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={[Role.Admin]}>
                                <AdminDashboardPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/student/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={[Role.Student]}>
                                <StudentDashboardPage />
                            </ProtectedRoute>
                        }
                    />
                    {/* FIX: Use `Navigate` component instead of `Redirect` for v6. */}
                    <Route
                        path="/dashboard"
                        element={<Navigate to={role === Role.Admin ? '/admin/dashboard' : '/student/dashboard'} />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <HashRouter>
                <AppRoutes />
            </HashRouter>
        </AuthProvider>
    );
};

export default App;
