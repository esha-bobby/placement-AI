
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About PlacementAI</h1>
                <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    Empowering the next generation of professionals by connecting them with the right opportunities.
                </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-brand-surface p-8 rounded-lg border border-brand-border">
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">Our Mission</h2>
                <p className="text-brand-text-secondary mb-6 leading-relaxed">
                    Our mission is to revolutionize the campus placement process. We believe that every student deserves a chance to find their dream job, and every company deserves to find the right talent. Traditional placement methods are often inefficient and biased. PlacementAI was born from a desire to make this process smarter, fairer, and more efficient for educational institutions, students, and companies alike.
                </p>
                <h2 className="text-2xl font-semibold text-brand-primary mb-4">Our Technology</h2>
                <p className="text-brand-text-secondary leading-relaxed">
                    We leverage cutting-edge Artificial Intelligence and Machine Learning to create a seamless ecosystem. Our platform goes beyond simple keyword matching. It understands context, skills, and career aspirations to create meaningful connections. From automated scheduling to predictive analytics, we provide the tools necessary to navigate the complexities of modern recruitment.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
