import React from 'react';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
            {/* Top Center Spotlight - Matches the Tech Stack image lighting */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-gradient-to-b from-blue-900/40 via-[#020617] to-[#020617] blur-[120px] mix-blend-screen opacity-80" />

            {/* Scattered Ambient Lights - Brighter & More Vivid */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/30 blur-[150px] rounded-full mix-blend-screen animate-pulse duration-700" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/30 blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full mix-blend-screen animate-pulse delay-1000" />

            {/* Sharp Glowing Points */}
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/40 blur-[80px] rounded-full mix-blend-screen animate-pulse delay-500" />
            <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-cyan-400/40 blur-[60px] rounded-full mix-blend-screen animate-pulse delay-200" />
            <div className="absolute top-20 right-20 w-80 h-80 bg-indigo-500/40 blur-[90px] rounded-full mix-blend-screen" />

            {/* Additional Blue Lighting */}
            <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-blue-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-1000" />
            <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-blue-500/30 blur-[100px] rounded-full mix-blend-screen" />
        </div>
    );
};

export default BackgroundEffects;
