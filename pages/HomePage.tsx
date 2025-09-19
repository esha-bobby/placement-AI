
import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, BarChart, CalendarCheck, ShieldCheck, CheckCircle } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
        <div className="text-brand-primary mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-brand-text-primary">{title}</h3>
        <p className="text-brand-text-secondary">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="bg-brand-background text-brand-text-primary">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Student <span className="text-brand-primary">Placements with AI</span></h1>
                    <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto mb-8">
                        Transform your placement process with intelligent company-student matching, real-time analytics, and automated interview scheduling.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/signup" className="bg-brand-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
                            Get Started Now
                        </Link>
                        <Link to="/login" className="bg-brand-secondary text-brand-text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition-transform hover:scale-105">
                            Sign In
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Stats Section */}
            <section className="py-16 bg-brand-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold text-brand-primary">95%</p>
                            <p className="text-brand-text-secondary">Placement Success Rate</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-brand-primary">500+</p>
                            <p className="text-brand-text-secondary">Partner Companies</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-brand-primary">10,000+</p>
                            <p className="text-brand-text-secondary">Students Placed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-brand-primary">24/7</p>
                            <p className="text-brand-text-secondary">AI Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Placements</h2>
                    <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto mb-12">Our comprehensive platform streamlines every aspect of the placement process.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                        <FeatureCard icon={<BrainCircuit size={40} />} title="AI-Powered Matching" description="Intelligent algorithms match students with perfect placement opportunities based on skills, interests, and company requirements." />
                        <FeatureCard icon={<BarChart size={40} />} title="Real-time Analytics" description="Comprehensive placement analytics and insights to track progress, success rates, and market trends." />
                        <FeatureCard icon={<CalendarCheck size={40} />} title="Automated Scheduling" description="Smart interview scheduling system that coordinates between students, companies, and placement officers seamlessly." />
                        <FeatureCard icon={<ShieldCheck size={40} />} title="Secure Access Control" description="Role-based permissions ensuring data security and appropriate access levels for students, staff, and recruiters." />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="get-started" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="bg-brand-surface rounded-lg p-12 text-center border border-brand-border">
                        <h2 className="text-3xl font-bold mb-4">Join PlacementAI Today</h2>
                        <p className="text-lg text-brand-text-secondary mb-8">Transform your placement journey with our AI-powered platform designed for students and institutions.</p>
                        <ul className="flex flex-col items-center space-y-2 mb-8 text-brand-text-primary">
                            <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary" /> AI-powered job matching</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary" /> Real-time placement analytics</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary" /> Automated interview scheduling</li>
                            <li className="flex items-center gap-2"><CheckCircle className="text-brand-primary" /> Secure role-based access</li>
                        </ul>
                        <Link to="/signup" className="bg-brand-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-transform hover:scale-105">
                            Create Your Account
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
