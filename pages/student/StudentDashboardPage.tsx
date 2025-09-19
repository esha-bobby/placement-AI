
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Card from '../../components/ui/Card';
import { Bell, Settings, LogOut, FileText, Calendar, Search, Building } from 'lucide-react';

// Mock Data
const myApplicationsData = [
    { company: 'TechCorp Solutions', role: 'Software Engineer', status: 'Interview Scheduled', match: 96 },
    { company: 'DataFlow Inc', role: 'Data Analyst', status: 'Application Sent', match: 89 },
    { company: 'InnovateTech', role: 'Frontend Developer', status: 'Applied', match: 85 },
];

const upcomingInterviewsData = [
    { company: 'TechCorp Solutions', role: 'Software Engineer', date: 'October 28, 2024', time: '10:00 AM' },
];

const suggestedJobsData = [
    { company: 'PixelPerfect', role: 'UI/UX Designer', match: 94 },
    { company: 'QuantumLeap', role: 'AI Research Intern', match: 91 },
    { company: 'SecureNet', role: 'Cybersecurity Analyst', match: 88 },
];

const StudentDashboardPage: React.FC = () => {
    const { user, logout } = useAuth();
    
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Interview Scheduled': return 'text-blue-400 bg-blue-900/50';
            case 'Application Sent': return 'text-yellow-400 bg-yellow-900/50';
            case 'Applied': return 'text-gray-400 bg-gray-700/50';
            default: return 'text-gray-400 bg-gray-700/50';
        }
    }

    return (
        <div className="bg-brand-background min-h-screen">
            <div className="container mx-auto px-6 py-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-brand-text-primary">Student Dashboard</h1>
                        <p className="text-brand-text-secondary">Welcome, {user?.username || 'Student'}</p>
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
                        {/* My Applications */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-4">My Applications</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-brand-border">
                                            <th className="p-3 text-sm font-semibold text-brand-text-secondary">Company</th>
                                            <th className="p-3 text-sm font-semibold text-brand-text-secondary">Role</th>
                                            <th className="p-3 text-sm font-semibold text-brand-text-secondary text-center">AI Match</th>
                                            <th className="p-3 text-sm font-semibold text-brand-text-secondary text-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {myApplicationsData.map((app, index) => (
                                            <tr key={index} className="border-b border-brand-border last:border-0 hover:bg-brand-secondary/50">
                                                <td className="p-3 text-brand-text-primary">{app.company}</td>
                                                <td className="p-3 text-brand-text-secondary">{app.role}</td>
                                                <td className="p-3 text-center text-brand-primary font-semibold">{app.match}%</td>
                                                <td className="p-3 text-center">
                                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(app.status)}`}>
                                                        {app.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </main>

                    {/* Sidebar Column */}
                    <aside className="lg:col-span-1 space-y-8">
                         {/* Find Opportunities */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-4">Find Opportunities</h2>
                             <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg bg-brand-primary hover:bg-blue-700 transition-colors">
                                <Search size={20} /> Search for Jobs
                            </button>
                        </Card>

                        {/* Upcoming Interviews */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
                            {upcomingInterviewsData.length > 0 ? (
                                <div className="space-y-4">
                                    {upcomingInterviewsData.map((interview, index) => (
                                        <div key={index} className="flex items-start gap-4 p-3 bg-brand-secondary rounded-lg">
                                            <div className="mt-1 text-brand-primary"><Calendar size={20} /></div>
                                            <div>
                                                <p className="font-semibold text-brand-text-primary">{interview.company}</p>
                                                <p className="text-sm text-brand-text-secondary">{interview.role}</p>
                                                <p className="text-xs text-brand-text-secondary mt-1">{interview.date} at {interview.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-brand-text-secondary text-sm">No upcoming interviews scheduled.</p>
                            )}
                        </Card>

                        {/* Suggested Jobs */}
                        <Card>
                            <h2 className="text-xl font-semibold mb-4">Jobs For You</h2>
                            <div className="space-y-3">
                                {suggestedJobsData.map((job, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-secondary">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-brand-secondary rounded-lg"><Building size={20}/></div>
                                            <div>
                                                <p className="font-semibold text-brand-text-primary">{job.company}</p>
                                                <p className="text-sm text-brand-text-secondary">{job.role}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-brand-primary text-sm">{job.match}% Match</p>
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

export default StudentDashboardPage;
