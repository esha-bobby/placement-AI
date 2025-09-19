import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User as UserIcon, Briefcase } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { Role } from '../types';
import { login as apiLogin, googleLogin, appleLogin } from '../services/mockApi';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<Role>(Role.Student);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const user = await apiLogin(email, password);
            if(user.role !== role) {
                setError(`You are registered as a ${user.role}. Please select the correct role.`);
                setLoading(false);
                return;
            }
            
            auth.login(user);
            setLoading(false);
            if (user.role === Role.Admin) {
                navigate('/admin/dashboard');
            } else {
                navigate('/student/dashboard');
            }
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
            setLoading(false);
        }
    };
    
    const handleSocialLogin = async (provider: 'google' | 'apple') => {
        setError('');
        setLoading(true);
        try {
            const socialLoginFn = provider === 'google' ? googleLogin : appleLogin;
            const user = await socialLoginFn();
            
            // In this mock version, we'll assume social logins are always for students.
            auth.login(user);
            setLoading(false);
            navigate('/student/dashboard');

        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-150px)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 shadow-lg">
                    <div className="text-center">
                        <div className="mx-auto bg-brand-primary h-12 w-12 flex items-center justify-center rounded-xl mb-4">
                            <span className="text-white font-bold text-2xl">P</span>
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-text-primary">
                            Welcome Back
                        </h2>
                        <p className="mt-2 text-center text-sm text-brand-text-secondary">
                            Sign in to access your placement dashboard
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                        
                        <div className="rounded-md shadow-sm -space-y-px">
                             <div className="relative">
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-3 border border-brand-border bg-brand-secondary placeholder-brand-text-secondary text-brand-text-primary focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm pl-10"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-secondary" size={20} />
                            </div>
                            <div className="relative pt-4">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-md relative block w-full px-3 py-3 border border-brand-border bg-brand-secondary placeholder-brand-text-secondary text-brand-text-primary focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm pl-10"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-text-secondary" size={20} />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-text-secondary hover:text-brand-text-primary">
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                         <div className="flex items-center justify-center space-x-4">
                            <button
                                type="button"
                                onClick={() => setRole(Role.Student)}
                                className={`w-full flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium transition-colors ${role === Role.Student ? 'bg-brand-primary border-brand-primary text-white' : 'bg-brand-secondary border-brand-border text-brand-text-secondary hover:bg-gray-700'}`}
                            >
                                <UserIcon className="mr-2" size={16}/> Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole(Role.Admin)}
                                className={`w-full flex items-center justify-center px-4 py-2 border rounded-md text-sm font-medium transition-colors ${role === Role.Admin ? 'bg-brand-primary border-brand-primary text-white' : 'bg-brand-secondary border-brand-border text-brand-text-secondary hover:bg-gray-700'}`}
                            >
                                <Briefcase className="mr-2" size={16}/> Admin
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-brand-primary hover:text-blue-400">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-background transition-colors disabled:opacity-50"
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-brand-border" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-brand-surface px-2 text-brand-text-secondary">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onClick={() => handleSocialLogin('google')} type="button" aria-label="Sign in with Google" className="w-full flex items-center justify-center py-3 px-4 border border-brand-border rounded-md shadow-sm text-sm font-medium text-brand-text-primary bg-brand-secondary hover:bg-gray-700 transition-colors">
                                <GoogleIcon className="h-5 w-5 mr-2" />
                                <span className="truncate">Google</span>
                            </button>
                            <button onClick={() => handleSocialLogin('apple')} type="button" aria-label="Sign in with Apple" className="w-full flex items-center justify-center py-3 px-4 border border-brand-border rounded-md shadow-sm text-sm font-medium text-brand-text-primary bg-brand-secondary hover:bg-gray-700 transition-colors">
                                <AppleIcon className="h-5 w-5 mr-2 text-brand-text-primary" />
                                <span className="truncate">Apple</span>
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-brand-text-secondary">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-brand-primary hover:text-blue-400">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
        <path fill="#4285F4" d="M24 9.5c3.13 0 5.9 1.12 7.96 3.04l6.1-6.1C34.02 2.62 29.34 0 24 0 14.7 0 6.83 5.42 4.1 13.02l7.62 5.9c1.3-3.82 4.88-6.42 9.28-6.42z"></path>
        <path fill="#34A853" d="M46.2 25.61c0-1.63-.15-3.2-.42-4.71H24v8.99h12.47c-.54 2.87-2.18 5.3-4.64 6.95l7.32 5.68C43.5 40.08 46.2 33.52 46.2 25.61z"></path>
        <path fill="#FBBC05" d="M11.72 28.92c-.38-1.13-.6-2.33-.6-3.58s.22-2.45.6-3.58l-7.62-5.9C1.56 18.23 0 21.02 0 24.34s1.56 6.11 4.1 8.52l7.62-5.9z"></path>
        <path fill="#EA4335" d="M24 48c5.34 0 10.02-1.75 13.38-4.72l-7.32-5.68c-1.77 1.18-4.05 1.9-6.06 1.9-4.4 0-8-2.6-9.28-6.42l-7.62 5.9C6.83 42.58 14.7 48 24 48z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path fill="currentColor" d="M12.01,16.23c-1.2,0-2.34-0.43-3.23-1.21c-1.12-0.97-1.7-2.36-1.7-3.95c0-1.57,0.59-2.99,1.75-3.96 c0.9-0.75,2.02-1.15,3.18-1.15c0.41,0,0.8,0.06,1.18,0.18c0.4,0.12,0.76,0.31,1.1,0.54c-0.02-0.02-0.5-0.29-1.46-0.5 c-0.89-0.2-1.84-0.29-2.82-0.29c-1.49,0-2.85,0.47-3.96,1.41C5.8,8.23,5.24,9.6,5.24,11.07c0,1.49,0.53,2.83,1.59,3.85 c1.01,0.97,2.26,1.46,3.68,1.46c0.64,0,1.3-0.12,1.96-0.37c0.67-0.25,1.24-0.63,1.68-1.12c0.3-0.33,0.5-0.7,0.59-1.09 c-0.76-0.45-1.53-0.8-2.3-1.05c-1.04-0.34-2-0.5-2.83-0.5c-0.95,0-1.79,0.2-2.5,0.61c-0.08,0.04-0.17,0.06-0.26,0.06 c-0.18,0-0.34-0.07-0.47-0.19c-0.13-0.12-0.19-0.27-0.19-0.45c0-0.21,0.07-0.39,0.2-0.51c0.69-0.56,1.52-0.84,2.48-0.84 c0.61,0,1.21,0.1,1.8,0.32c0.59,0.22,1.11,0.51,1.58,0.89c0.07,0.06,0.12,0.13,0.15,0.22c0.03,0.09,0.03,0.18-0.01,0.27 c-0.26,0.65-0.62,1.23-1.06,1.71c-0.44,0.48-0.95,0.87-1.52,1.15C13.2,16.14,12.61,16.23,12.01,16.23z M14.39,3.52 c0.31-0.4,0.55-0.85,0.7-1.33c0.03-0.09,0.03-0.19-0.01-0.28c-0.04-0.09-0.09-0.17-0.17-0.22c-0.26-0.17-0.56-0.25-0.89-0.25 c-0.63,0-1.22,0.23-1.74,0.68c-0.48,0.42-0.83,0.96-1.04,1.6c-0.03,0.1-0.03,0.2,0,0.29c0.03,0.09,0.09,0.17,0.17,0.24 c0.23,0.17,0.5,0.25,0.8,0.25c0.65,0,1.26-0.25,1.79-0.75C13.56,4.36,13.99,3.99,14.39,3.52z"></path>
    </svg>
);

export default LoginPage;