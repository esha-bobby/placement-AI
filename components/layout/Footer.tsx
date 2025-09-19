
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-surface border-t border-brand-border">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <div className="bg-brand-primary p-2 rounded-lg">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <span className="text-xl font-bold text-brand-text-primary">PlacementAI</span>
                    </div>
                    <div className="flex gap-8 text-brand-text-secondary">
                        <Link to="/features" className="hover:text-brand-primary">Features</Link>
                        <Link to="/about" className="hover:text-brand-primary">About</Link>
                        <Link to="/contact" className="hover:text-brand-primary">Contact</Link>
                    </div>
                </div>
                <div className="mt-8 text-center text-brand-text-secondary text-sm">
                    <p>&copy; {new Date().getFullYear()} PlacementAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
