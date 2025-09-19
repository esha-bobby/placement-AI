
import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/ui/Card';
import { Bell, Settings, LogOut, BarChart2, Users, Building, Calendar, FileText, Search, Plus, UserPlus, Filter, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

// Mock Data - In a real app, this would come from an API
const statsCardsData = [
    { title: 'Active Applications', value: '24', change: '+12%', changeType: 'increase', icon: <FileText /> },
    { title: 'Company Partners', value: '156', change: '+8%', changeType: 'increase', icon: <Building /> },
    { title: 'Interviews Scheduled', value: '18', change: '+25%', changeType: 'increase', icon: <Calendar /> },
    { title: 'Placement Success Rate', value: '94%', change: '+5%', changeType: 'increase', icon: <BarChart2 /> },
];

const aiMatchesData = [
    { name: 'Sarah Johnson', company: 'TechCorp Solutions', role: 'Software Engineer', match: 96, status: 'Interview Scheduled' },
    { name: 'Michael Chen', company: 'DataFlow Inc', role: 'Data Analyst', match: 89, status: 'Application Sent' },
    { name: 'Emily Davis', company: 'CloudTech Ltd', role: 'DevOps Engineer', match: 92, status: 'Offer Received' },
];

const todaysInterviewsData = [
    { time: '10:00 AM', name: 'Alex Thompson', company: 'InnovateTech' },
    { time: '2:30 PM', name: 'Jessica Wu', company: 'AI Dynamics' },
    { time: '4:00 PM', name: 'David Rodriguez', company: 'CyberSafe Systems' },
];

const placementAnalyticsData = [
    { name: 'Overall Success Rate', value: 94 },
    { name: 'Interview Conversion', value: 78 },
    { name: 'Company Satisfaction', value: 91 },
];

const AdminDashboardPage: React.FC = () => {
    const { user, logout } = useAuth();
    const [showRegisterCompany, setShowRegisterCompany] = useState(false);
    const [newCompanyName, setNewCompanyName] = useState('');
    const [newCompanyIndustry, setNewCompanyIndustry] = useState('');


    const handleRegisterCompany = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would call an API to register the company
        console.log('Registering company:', { name: newCompanyName, industry: newCompanyIndustry });
        alert(`Company "${newCompanyName}" registered!`);
        setNewCompanyName('');
        setNewCompanyIndustry('');
        setShowRegisterCompany(false);
    };

    return (
        <div className="bg-brand-background min-h-screen">
            <div className="container mx-auto px-6 py-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-brand-text-primary">PlacementAI Dashboard</h1>
                        <p className="text-brand-text-secondary">Welcome back, {user?.username || 'Admin'}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 rounded-full bg-brand-surface border border-brand-border hover:bg-brand-secondary"><Bell size={20} /></button>
                        <button className="p-2 rounded-full bg-brand-surface border border-brand-border hover:bg-brand-secondary"><Settings size={20} /></button>
                        <button onClick={logout} className="p-2 rounded-full bg-brand-surface border border-brand-border hover:bg-brand-secondary"><LogOut size={20} /></button>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <main className="lg:col-span-2 space-y-8">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {statsCardsData.map((stat, index) => (
                                <Card key={index}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-brand-text-secondary">{stat.title}</p>
                                            <p className="text-3xl font-bold text-brand-text-primary mt-1">{stat.value}</p>
                                            <p className="text-sm text-brand-accent-green mt-1">{stat.change} from last month</p>
                                        </div>
                                        <div className="p-2 bg-brand-secondary rounded-lg text-brand-primary">{stat.icon}</div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                        
                        {/* AI-Powered Matches */}
                        <Card>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold">AI-Powered Matches</h2>
                                <div className="flex gap-2">
                                    <button className="flex items-center gap-2 px-3 py-1.5 border border-brand-border rounded-md text-sm hover:bg-brand-secondary"><Filter size={14} /> Filter</button>
                                    <button className="flex items-center gap-2 px-3 py-1.5 border border-brand-border rounded-md text-sm hover:bg-brand-secondary"><Download size={14} /> Export</button>
                                </div>
                            </div>
                            <p className="text-brand-text-secondary mb-4">Latest intelligent student-company matches</p>
                            <div className="space-y-4">
                                {aiMatchesData.map((match, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 rounded-md hover:bg-brand-secondary">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-brand-secondary rounded-full"><Users size={20} /></div>
                                            <div>
                                                <p className="font-semibold text-brand-text-primary">{match.name}</p>
                                                <p className="text-sm text-brand-text-secondary">{match.company} • {match.role}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-brand-primary">{match.match}% Match</p>
                                            <p className="text-sm text-brand-text-secondary">{match.status}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </main>

                    {/* Sidebar Column */}
                    <aside className="lg:col-span-1 space-y-8">
                        {/* Quick Actions */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg bg-brand-primary hover:bg-blue-700 transition-colors">
                                    <UserPlus size={20} /> Add New Student
                                </button>
                                <button onClick={() => setShowRegisterCompany(!showRegisterCompany)} className="w-full text-left flex items-center gap-3 p-3 rounded-lg bg-brand-secondary hover:bg-gray-700 transition-colors">
                                    <Building size={20} /> Register Company
                                </button>
                                <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg bg-brand-secondary hover:bg-gray-700 transition-colors">
                                    <Calendar size={20} /> Schedule Interview
                                </button>
                                <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg bg-brand-secondary hover:bg-gray-700 transition-colors">
                                    <Search size={20} /> Advanced Search
                                </button>
                            </div>
                        </Card>

                        {/* Register Company Modal (simplified) */}
                        {showRegisterCompany && (
                            <Card>
                                <h3 className="text-lg font-semibold mb-4">Register New Company</h3>
                                <form onSubmit={handleRegisterCompany} className="space-y-4">
                                    <div>
                                        <label htmlFor="companyName" className="text-sm text-brand-text-secondary mb-1 block">Company Name</label>
                                        <input id="companyName" type="text" value={newCompanyName} onChange={e => setNewCompanyName(e.target.value)} required className="w-full bg-brand-secondary p-2 rounded-md border border-brand-border" />
                                    </div>
                                    <div>
                                        <label htmlFor="companyIndustry" className="text-sm text-brand-text-secondary mb-1 block">Industry</label>
                                        <input id="companyIndustry" type="text" value={newCompanyIndustry} onChange={e => setNewCompanyIndustry(e.target.value)} required className="w-full bg-brand-secondary p-2 rounded-md border border-brand-border" />
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="submit" className="flex-1 bg-brand-primary text-white py-2 rounded-md hover:bg-blue-700">Save</button>
                                        <button type="button" onClick={() => setShowRegisterCompany(false)} className="flex-1 bg-brand-secondary py-2 rounded-md hover:bg-gray-700">Cancel</button>
                                    </div>
                                </form>
                            </Card>
                        )}

                        {/* Placement Analytics */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-2">Placement Analytics</h2>
                            <p className="text-brand-text-secondary mb-6">Real-time placement performance metrics</p>
                            <div className="space-y-4">
                                {placementAnalyticsData.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-brand-text-secondary">{item.name}</span>
                                            <span className="font-semibold text-brand-text-primary">{item.value}%</span>
                                        </div>
                                        <div className="w-full bg-brand-secondary rounded-full h-2">
                                            <div className="bg-brand-primary h-2 rounded-full" style={{ width: `${item.value}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        {/* Today's Interviews */}
                        <Card>
                             <h2 className="text-xl font-semibold mb-4">Today's Interviews</h2>
                             <div className="space-y-4">
                                {todaysInterviewsData.map((interview, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="p-3 bg-brand-secondary rounded-lg text-brand-primary"><Calendar size={20} /></div>
                                        <div>
                                            <p className="font-semibold text-brand-text-primary">{interview.time}</p>
                                            <p className="text-sm text-brand-text-primary">{interview.name}</p>
                                            <p className="text-xs text-brand-text-secondary">{interview.company}</p>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </Card>

                    </aside>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
