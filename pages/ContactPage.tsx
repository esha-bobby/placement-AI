
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto">
                    We'd love to hear from you. Whether you have a question about features, trials, or anything else, our team is ready to answer all your questions.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-brand-surface p-8 rounded-lg border border-brand-border">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-brand-text-secondary mb-2">Name</label>
                            <input type="text" id="name" className="w-full bg-brand-secondary p-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-brand-text-secondary mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-brand-secondary p-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-brand-text-secondary mb-2">Message</label>
                            <textarea id="message" rows={5} className="w-full bg-brand-secondary p-3 rounded-md border border-brand-border focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-brand-primary text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Mail className="text-brand-primary mt-1" size={24}/>
                        <div>
                            <h3 className="font-semibold text-xl">Email</h3>
                            <p className="text-brand-text-secondary">support@placementai.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-brand-primary mt-1" size={24}/>
                        <div>
                            <h3 className="font-semibold text-xl">Phone</h3>
                            <p className="text-brand-text-secondary">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="text-brand-primary mt-1" size={24}/>
                        <div>
                            <h3 className="font-semibold text-xl">Office</h3>
                            <p className="text-brand-text-secondary">123 Tech Avenue, Silicon Valley, CA 94043</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
