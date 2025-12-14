import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-transparent relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Driving Innovation Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technology</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            Founded in 2024, Web Tech has been at the forefront of digital transformation. We believe that technology should not just solve problems but open new possibilities for businesses worldwide.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Our team of experts combines creative design with powerful engineering to build software that matters. From agile startups to global enterprises, we help our partners navigate the complex digital landscape with confidence.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { icon: Users, label: "Expert Team", value: "50+" },
                                { icon: Target, label: "Projects Done", value: "120+" },
                                { icon: Lightbulb, label: "Years Exp", value: "10+" }
                            ].map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.1 }}
                                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors group"
                                >
                                    <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400 group-hover:text-gray-300">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Images Collage */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="space-y-4 pt-12"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                    alt="Team Strategy"
                                    className="rounded-2xl shadow-2xl w-full h-[300px] object-cover border border-white/10"
                                />
                                <div className="p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-white font-medium">"Innovation distinguishes between a leader and a follower."</p>
                                </div>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="space-y-4"
                            >
                                <div className="p-6 bg-[#111827] rounded-2xl border border-white/10">
                                    <p className="text-gray-400 text-sm">We are committed to excellence in every line of code we write.</p>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                                    alt="Modern Office"
                                    className="rounded-2xl shadow-2xl w-full h-[300px] object-cover border border-white/10"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
