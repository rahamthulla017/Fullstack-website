import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Wave3D from './Wave3D';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-transparent">
            {/* Wave 3D Animation */}
            <Wave3D />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Innovate with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Confidence</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We build premium digital solutions that propel your business into the
                        future of tech, development, and scalability.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2"
                            >
                                Get Started <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                Contact Us <Mail className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Cards / Elements could go here */}
            </div>
        </section>
    );
};
export default Hero;
