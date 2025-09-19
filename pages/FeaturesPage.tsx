
import React from 'react';
import { BrainCircuit, BarChart, CalendarCheck, ShieldCheck } from 'lucide-react';

const FeatureDetail: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-brand-surface p-8 rounded-lg border border-brand-border flex items-start gap-6">
        <div className="text-brand-primary mt-1">{icon}</div>
        <div>
            <h3 className="text-2xl font-semibold mb-2 text-brand-text-primary">{title}</h3>
            <p className="text-brand-text-secondary leading-relaxed">{description}</p>
        </div>
    </div>
);

const FeaturesPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h1>
                <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    PlacementAI is equipped with a suite of powerful tools to enhance the placement experience for everyone involved.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FeatureDetail 
                    icon={<BrainCircuit size={48} />} 
                    title="AI-Powered Matching" 
                    description="Our core technology uses advanced machine learning models to analyze student profiles and job descriptions, ensuring the best possible fit. This reduces manual effort and increases placement success rates significantly." 
                />
                <FeatureDetail 
                    icon={<BarChart size={48} />} 
                    title="Real-time Analytics" 
                    description="Access a comprehensive dashboard with real-time data on application statuses, interview success rates, company engagement, and overall placement performance. Make data-driven decisions to improve your strategy." 
                />
                <FeatureDetail 
                    icon={<CalendarCheck size={48} />} 
                    title="Automated Scheduling" 
                    description="Forget the hassle of coordinating interview times. Our system automatically finds suitable slots for students and recruiters, sends notifications, and manages the entire scheduling process, including rescheduling." 
                />
                <FeatureDetail 
                    icon={<ShieldCheck size={48} />} 
                    title="Secure Access Control" 
                    description="With granular, role-based permissions, you can ensure that students, placement officers, and company recruiters only see the information relevant to them. Data privacy and security are our top priorities." 
                />
            </div>
        </div>
    );
};

export default FeaturesPage;
