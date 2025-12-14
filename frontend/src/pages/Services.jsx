import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Database, Smartphone, Globe, ArrowRight, Search, PenTool, Layout, Rocket } from 'lucide-react';

const servicesList = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom web applications built with React, Django, and modern modern frameworks.",
        color: "group-hover:text-blue-400"
    },
    {
        icon: Cloud,
        title: "Cloud Solutions",
        description: "Scalable cloud architecture on AWS, Azure, or Google Cloud Platform.",
        color: "group-hover:text-purple-400"
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Comprehensive security audits, penetration testing, and secure coding practices.",
        color: "group-hover:text-emerald-400"
    },
    {
        icon: Database,
        title: "Data Analytics",
        description: "Turn data into actionable insights with our advanced analytics and AI solutions.",
        color: "group-hover:text-amber-400"
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        color: "group-hover:text-pink-400"
    },
    {
        icon: Globe,
        title: "SEO & Marketing",
        description: "Drive traffic and grow your business with our digital marketing strategies.",
        color: "group-hover:text-cyan-400"
    }
];

const Services = () => {
    return (
        <section className="pt-32 pb-24 min-h-screen bg-transparent relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Solutions tailored for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Growth</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We offer a comprehensive suite of digital services designed to propel your business forward in the digital age.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden text-left"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                                <service.icon className="w-24 h-24" />
                            </div>

                            <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-gray-300 transition-colors ${service.color}`}>
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-blue-500 group-hover:text-blue-400 transition-colors">
                                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-12">Our Development Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Search, title: "1. Discover", desc: "We research and understand your needs." },
                            { icon: PenTool, title: "2. Design", desc: "We create intuitive and beautiful prototypes." },
                            { icon: Layout, title: "3. Develop", desc: "We use modern tech to build robust code." },
                            { icon: Rocket, title: "4. Deploy", desc: "We launch your product to the world." }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative"
                            >
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/20">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.desc}</p>

                                {/* Connector Line (Desktop) */}
                                {idx < 3 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -z-10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
