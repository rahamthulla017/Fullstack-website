import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import ContentSection from '../components/ContentSection';
import TechStack from '../components/TechStack';
import ContactSection from '../components/ContactSection';
import { Bot, Cloud, ShieldCheck } from 'lucide-react';

const Home = () => {
    return (
        <main>
            <Hero />
            <Features />
            <About />

            {/* Section 1: AI */}
            <ContentSection
                id="services"
                subtitle="Future Ready"
                title="We Build Intelligent Systems"
                description="Embrace the future with our cutting-edge AI and Machine Learning solutions. From neural networks to robotic process automation, we integrate smart tech to streamline your operations."
                features={[
                    "Machine Learning",
                    "Natural Language Processing",
                    "Computer Vision",
                    "Predictive Analytics"
                ]}
                buttonText="Explore AI Solutions"
                link="/services"
                imageContent={
                    <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <Bot className="w-32 h-32 text-indigo-400 relative z-10 animate-pulse" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    </div>
                }
            />

            {/* Section 2: Cloud */}
            <ContentSection
                id="work"
                subtitle="Global Scale"
                title="Scalable Cloud Architecture"
                description="Deploy your applications with confidence. We design robust cloud infrastructures that expand automatically with your user base, ensuring 99.99% uptime."
                features={[
                    "99.9% Uptime Guarantee",
                    "Zero-downtime Deployment",
                    "Auto-scaling Groups",
                    "Global CDN"
                ]}
                reversed={true}
                buttonText="View Cloud Services"
                link="/services"
                imageContent={
                    <div className="w-full h-full bg-gradient-to-bl from-blue-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <Cloud className="w-32 h-32 text-blue-400 relative z-10" />
                        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    </div>
                }
            />

            {/* Section 3: Security */}
            <ContentSection
                id="security"
                subtitle="Security First"
                title="Ironclad Data Protection"
                description="Security isn't an afterthought; it's our foundation. We implement military-grade encryption, automated compliance checks, and real-time threat detection to ensure your data stays yours."
                features={[
                    "End-to-End Encryption",
                    "GDPR & HIPAA Compliance",
                    "24/7 Threat Monitoring",
                    "Identity Management"
                ]}
                imageContent={
                    <div className="w-full h-full bg-gradient-to-br from-teal-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                        <ShieldCheck className="w-32 h-32 text-teal-400 relative z-10" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-teal-500/10 blur-2xl"></div>
                    </div>
                }
            />

            <TechStack />
            <ContactSection />
        </main>
    );
};

export default Home;
