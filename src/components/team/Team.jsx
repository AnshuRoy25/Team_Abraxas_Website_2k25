import React, { useState, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import TeamCard from './TeamCard';
import teamData from './teamData.json';
import Starfield from '../star/Starfield';

const Team = () => {
    const controls = useAnimation();
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.documentElement.style.scrollBehavior = '';
        };
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const renderTeamSection = (year) => {
        if (!teamData[year]) return null;
        return (
            <section id={year} className="w-full max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16 scroll-mt-20 sm:scroll-mt-24">
                <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 text-center px-4 tracking-wide">
                    {year.replace(/-/g, ' ')}
                </h2>
                <div className="w-8 h-px bg-white/20 mx-auto mb-6"></div>
                <InView threshold={0.1} onChange={(inView) => inView && controls.start("visible")}>
                    <div className="relative px-4 sm:px-6">
                        <div className="overflow-x-auto hide-scrollbar">
                            <motion.div
                                className="flex space-x-3 md:space-x-20 sm:space-x-28 pb-4"
                                initial="hidden"
                                animate={controls}
                                variants={variants}
                                style={{
                                    width: 'fit-content',
                                    minWidth: '100%',
                                    display: 'flex',
                                    justifyContent: windowWidth < 1024 ? 'flex-start' : 'center',
                                    padding: windowWidth >= 768 ? '1rem' : '0'
                                }}
                            >
                                {teamData[year].map((member, index) => (
                                    <motion.div key={index} className="flex-shrink-0 md:hover:scale-105 transition-transform duration-300" variants={variants}>
                                        <TeamCard photo={member.photo} name={member.name} social={member.social} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </InView>
            </section>
        );
    };

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; scroll-behavior: smooth; overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory; }
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar > div > div { scroll-snap-align: start; }
        `;
        document.head.appendChild(style);
        return () => document.head.removeChild(style);
    }, []);

    const NavButtons = () => (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
            <div className="bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl p-3 overflow-x-auto hide-scrollbar">
                <div className="flex flex-row justify-center space-x-2">
                    {["Club-Coordinators", "Our Alumni", "Final-Year", "Coordinators", "Executives", "Volunteers"].map((year) => (
                        <button
                            key={year}
                            onClick={() => document.getElementById(year)?.scrollIntoView({ behavior: 'smooth' })}
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                            className="text-white/40 hover:text-white px-3 py-2 text-xs sm:text-sm transition-colors duration-200 hover:bg-white/5 rounded-lg whitespace-nowrap"
                        >
                            {year.replace(/-/g, ' ')}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <main className="relative w-full bg-black min-h-screen">
            <div className="fixed inset-0 z-0">
                <Starfield starCount={windowWidth < 768 ? 3000 : 6000} starColor={[255, 255, 255]} speedFactor={0.15} backgroundColor="black" />
            </div>
            <NavButtons />
            <div className="relative z-10 min-h-screen pt-16 sm:pt-20">
                <h1 style={{ fontFamily: "'Syne', sans-serif" }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4 px-4 tracking-tight">
                    Our Team
                </h1>
                <div className="w-12 h-px bg-white/20 mx-auto mb-12 sm:mb-16"></div>
                <div className="space-y-6 sm:space-y-8 m-4">
                    {renderTeamSection('Club-Coordinators')}
                    {renderTeamSection('Our Alumni')}
                    {renderTeamSection('Final-Year')}
                    {renderTeamSection('Coordinators')}
                    {renderTeamSection('Executives')}
                    {renderTeamSection('Volunteers')}
                </div>
            </div>
        </main>
    );
};

export default Team;