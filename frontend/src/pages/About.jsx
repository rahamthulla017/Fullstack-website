import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, TrendingUp, Award, Smile } from 'lucide-react';
import axios from 'axios';

const About = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/team/');
                setTeam(response.data);
            } catch (error) {
                console.error("Error fetching team:", error);
            }
        };
        fetchTeam();
    }, []);

    return (
        <section className="pt-32 pb-24 min-h-screen bg-transparent text-white overflow-hidden">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        We Are The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Builders</span> of Tomorrow
                    </h1>
                    <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
                        At Web Tech, we believe that technology is the bridge between imagination and reality.
                        Since 2024, we have been dedicated to crafting digital experiences that not only solve problems but inspire change.
                    </p>
                </motion.div>
            </div>

            {/* Values Grid */}
            <div className="bg-[#111827]/50 py-24 border-y border-white/5 relative">
                <div className="absolute inset-0 bg-blue-900/5 pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Values</h2>
                        <p className="text-gray-400">The principles that guide every line of code we write.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Lightbulb, title: "Innovation", desc: "We don't just follow trends; we set them. Constantly pushing the boundaries of what's possible." },
                            { icon: Users, title: "Collaboration", desc: "Great software is built by great teams. We work closely with our clients as true partners." },
                            { icon: Target, title: "Excellence", desc: "Good enough is never enough. We strive for pixel-perfect design and bulletproof code." }
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-[#020617]/50 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6">
                                    <val.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                                <p className="text-gray-400">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>
                    <p className="text-gray-400">The brilliant minds behind our solutions.</p>
                </div>

                {team.length === 0 ? (
                    <div className="text-center text-gray-500">Loading team...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="rounded-2xl overflow-hidden aspect-[3/4] mb-4 relative">
                                    <img
                                        src={member.image_url || `https://ui-avatars.com/api/?name=${member.name}&background=random`}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-60" />
                                </div>
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-blue-400 font-medium text-sm mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm line-clamp-2">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Timeline / Strategy */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                            <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-4">
                                {[
                                    { year: "2024", title: "Inception", desc: "Founded with a vision to revolutionize web tech." },
                                    { year: "2025", title: "Expansion", desc: "Opened new offices in NY and London. Reached 100+ clients." },
                                    { year: "Future", title: "Global Impact", desc: "Aiming to empower 1M+ businesses with AI-driven solutions." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative">
                                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#020617]" />
                                        <span className="text-blue-400 font-bold mb-1 block">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                                alt="Team Meeting"
                                className="rounded-2xl shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500 border border-white/10"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;
