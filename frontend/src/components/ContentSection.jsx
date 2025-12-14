import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentSection = ({ title, subtitle, description, features, imageContent, reversed, buttonText, id, link }) => {
    return (
        <section id={id} className="py-24 bg-transparent overflow-hidden relative">
            {/* Section Glow */}
            <div className={`absolute top-1/2 ${reversed ? 'left-0' : 'right-0'} -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">{subtitle}</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {buttonText && (
                            link ? (
                                <Link to={link}>
                                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                                        {buttonText}
                                    </button>
                                </Link>
                            ) : (
                                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                                    {buttonText}
                                </button>
                            )
                        )}
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video group">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 z-10" />
                            {imageContent}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContentSection;
