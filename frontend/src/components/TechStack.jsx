import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Terminal, Database, Box, Cloud, Cpu, Layers } from 'lucide-react';

const technologies = [
    { name: 'React', icon: Code2, color: 'text-cyan-400' },
    { name: 'Django', icon: Server, color: 'text-green-500' },
    { name: 'Python', icon: Terminal, color: 'text-yellow-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-400' },
    { name: 'Docker', icon: Box, color: 'text-blue-500' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'TensorFlow', icon: Cpu, color: 'text-orange-500' },
    { name: 'PyTorch', icon: Layers, color: 'text-red-500' },
    { name: 'OpenAI', icon: Cpu, color: 'text-purple-400' },
];

const TechStack = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tech Stack</span></h2>
                </motion.div>
            </div>

            {/* Scrolling Marquee */}
            <div className="flex overflow-hidden relative w-full pt-4 pb-4">
                {/* Side Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

                <motion.div
                    className="flex gap-16 flex-nowrap"
                    initial={{ x: "-50%" }}
                    animate={{ x: "0%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                    style={{ width: "max-content" }}
                >
                    {/* Tripling the list to ensure smooth looping even on large screens */}
                    {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                        <div key={index} className="flex flex-col items-center gap-6 flex-shrink-0 group">
                            <div className="w-32 h-32 rounded-full bg-[#0f172a]/80 backdrop-blur-md border border-white/5 flex items-center justify-center shadow-2xl group-hover:border-blue-500/30 group-hover:shadow-blue-500/20 group-hover:-translate-y-2 transition-all duration-300">
                                <tech.icon className={`w-12 h-12 ${tech.color}`} />
                            </div>
                            <span className="text-gray-400 font-medium group-hover:text-white transition-colors text-lg">{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
