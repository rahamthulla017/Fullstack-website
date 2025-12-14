import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Cpu } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#05080f] py-12 border-t border-white/10 text-gray-400 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">

                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <Cpu className="h-6 w-6 text-blue-500" />
                            <span className="font-bold text-lg">Web Tech</span>
                        </div>
                        <p className="leading-relaxed mb-6">
                            Building the future with intelligent digital solutions. Innovation meets execution.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Work', 'Careers'].map(link => (
                                <li key={link}>
                                    <a href="#" className="hover:text-blue-500 transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li>hello@webtech.com</li>
                            <li>+1 (555) 123-4567</li>
                            <li>123 Tech Avenue, NY</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow us</h4>
                        <div className="flex space-x-4">
                            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; 2025 Web Tech. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
