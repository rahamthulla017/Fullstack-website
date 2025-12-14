import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Globe } from 'lucide-react';

const features = [
    {
        icon: Code,
        title: "Modern Stack",
        desc: "Built with React, Django, and modern web technologies.",
        color: "text-blue-400"
    },
    {
        icon: Zap,
        title: "Fast Performance",
        desc: "Optimized for speed and efficiency with Vite.",
        color: "text-purple-400"
    },
    {
        icon: Globe,
        title: "Global Scale",
        desc: "Ready for deployment and scaling worldwide.",
        color: "text-pink-400"
    }
];

const Features = () => {
    return (
        <section className="py-20 bg-transparent relative z-20 -mt-20">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#111827]/50 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors shadow-xl"
                        >
                            <div className={`p-4 rounded-full bg-white/5 w-fit mb-6 ${feature.color}`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
