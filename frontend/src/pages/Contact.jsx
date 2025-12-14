import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle, Plus, Minus } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const faqs = [
        { q: "Do you work with startups?", a: "Yes, we love working with startups and helping them build their MVP." },
        { q: "What is your typical timeline?", a: "Timelines vary by project, but typically 4-12 weeks for standard web apps." },
        { q: "Do you offer post-launch support?", a: "Absolutely. We offer maintenance packages to keep your software running smoothly." }
    ];

    return (
        <section className="pt-32 pb-24 min-h-screen bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Business</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    {/* Contact Info & FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { icon: Mail, title: "Email", t1: "hello@webtech.com", t2: "support@webtech.com", color: "text-blue-400", bg: "bg-blue-500/10" },
                                { icon: Phone, title: "Phone", t1: "+1 (555) 123-4567", t2: "Mon-Fri 9am-6pm EST", color: "text-purple-400", bg: "bg-purple-500/10" },
                                { icon: MapPin, title: "Office", t1: "123 Tech Avenue, Floor 4", t2: "New York, NY 10001", color: "text-teal-400", bg: "bg-teal-500/10" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-[#111827]/50 border border-white/10 hover:border-white/20 transition-all">
                                    <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                                        <p className="text-gray-400">{item.t1}</p>
                                        <p className="text-gray-400 text-sm">{item.t2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Accordion */}
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                            <div className="space-y-4">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="bg-[#111827]/30 border border-white/5 rounded-xl overflow-hidden">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                                        >
                                            <span className="font-medium text-white">{faq.q}</span>
                                            {openFaq === idx ? <Minus className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
                                        </button>
                                        <motion.div
                                            initial={false}
                                            animate={{ height: openFaq === idx ? 'auto' : 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-4 pt-0 text-gray-400 text-sm leading-relaxed">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="sticky top-32">
                            <form onSubmit={handleSubmit} className="bg-[#111827]/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
                                <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
                                <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">First Name</label>
                                        <input type="text" name="name" onChange={handleChange} value={formData.name} className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Last Name</label>
                                        <input type="text" className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                                    <input type="email" name="email" onChange={handleChange} value={formData.email} className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Your Message</label>
                                    <textarea name="message" onChange={handleChange} value={formData.message} rows="6" className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${status === 'success' ? 'bg-green-600 text-white' :
                                        status === 'loading' ? 'bg-gray-600' :
                                            'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                                        }`}
                                >
                                    {status === 'loading' && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
                                    {status === 'success' && <><CheckCircle className="w-5 h-5" /> Message Sent</>}
                                    {status === 'idle' && <><Send className="w-5 h-5" /> Send Message</>}
                                    {status === 'error' && <><AlertCircle className="w-5 h-5" /> Try Again</>}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
