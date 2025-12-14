import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Coffee, Heart, Monitor, Zap, X, CheckCircle, AlertCircle, UploadCloud } from 'lucide-react';
import axios from 'axios';

const Careers = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/jobs/');
                setJobs(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleApplyClick = (job) => {
        setSelectedJob(job);
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
    };

    return (
        <section className="pt-32 pb-24 min-h-screen bg-transparent relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Careers</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mission</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        We are looking for passionate individuals who want to build the future of technology with us. Check out our open positions below.
                    </p>
                </motion.div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { icon: Monitor, title: "Remote First", desc: "Work from anywhere in the world." },
                        { icon: Coffee, title: "Flexible Hours", desc: "We focus on output, not hours." },
                        { icon: Heart, title: "Health Benefits", desc: "Comprehensive health coverage." },
                        { icon: Zap, title: "Latest Tech", desc: "Access to top-tier equipment." }
                    ].map((perk, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:bg-white/10 transition-colors"
                        >
                            <perk.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-1">{perk.title}</h3>
                            <p className="text-gray-400 text-sm">{perk.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : jobs.length === 0 ? (
                    <div className="text-center text-gray-500 py-12">
                        <Briefcase className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-xl">No open positions at the moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Briefcase className="w-4 h-4" />
                                            {job.type}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.experience}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 mt-4 line-clamp-2 max-w-2xl">
                                        {job.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleApplyClick(job)}
                                    className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all flex items-center gap-2"
                                >
                                    Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#111827] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <div className="p-6 border-b border-white/10 flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Apply for {selectedJob.title}</h3>
                                    <p className="text-gray-400 text-sm">{selectedJob.location} • {selectedJob.type}</p>
                                </div>
                                <button onClick={handleCloseModal} className="text-gray-400 hover:text-white transition-colors">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* Job Requirements / Description */}
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-3">About the Role</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {selectedJob.description}
                                    </p>
                                </div>

                                <hr className="border-white/10" />

                                {/* Application Form */}
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-4">Submit Your Application</h4>
                                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">First Name</label>
                                                <input type="text" className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Last Name</label>
                                                <input type="text" className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                                            <input type="email" className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Resume / CV</label>
                                            <div className="flex gap-4">
                                                <div className="flex-1 relative group">
                                                    <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                                    <div className="w-full bg-[#0a0f1c] border border-dashed border-white/20 rounded-xl px-4 py-3 text-gray-400 flex items-center justify-center gap-2 group-hover:border-blue-500 transition-colors">
                                                        <UploadCloud className="w-5 h-5" />
                                                        <span>Upload Resume (PDF, DOCX)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Portfolio Link (Optional)</label>
                                            <input type="url" placeholder="https://linkedin.com/in/..." className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Cover Letter (Optional)</label>
                                            <textarea rows="4" className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></textarea>
                                        </div>

                                        <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-lg transition-colors">
                                            Submit Application
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Careers;
