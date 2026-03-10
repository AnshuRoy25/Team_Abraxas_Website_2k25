import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import Atom from '../hero/Atom';

const staggerChildren = {
    animate: {
        transition: { delayChildren: 0.8, staggerChildren: 1.2 }
    }
};

const atomAnimation = {
    initial: { y: 100, scale: 0.8, opacity: 0 },
    animate: {
        y: 0, scale: 1, opacity: 1,
        transition: { duration: 2.8, ease: [0.6, 0.05, 0.01, 0.9] }
    }
};

const teamNameAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: {
        y: 0, opacity: 1,
        transition: { duration: 2.8, ease: [0.6, 0.05, 0.01, 0.9], delay: 1.6 }
    }
};

const contentAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: {
        y: 0, opacity: 1,
        transition: { duration: 2.8, ease: [0.6, 0.05, 0.01, 0.9], delay: 2.8 }
    }
};

const Hero = () => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start('animate');
    }, [controls]);

    return (
        <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="stars"></div>
            </div>

            <motion.div
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="relative z-10 flex flex-col justify-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-8"
            >
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">

                        <motion.div
                            variants={atomAnimation}
                            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                        >
                            <Atom />
                        </motion.div>

                        <motion.div
                            variants={teamNameAnimation}
                            className="mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center w-full"
                        >
                            <div className="inline-block">
                                <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-white">
                                    TEAM ABRAXAS
                                </h2>
                                <div className="h-px bg-white/30 mt-3"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={contentAnimation}
                            className="text-center w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4"
                        >
                            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="mb-10 text-white/60 text-sm sm:text-base tracking-wide leading-relaxed font-light italic">
                                "Life, much like physics, full of forces acting on you. It's not about avoiding them, but learning how to balance and use them to propel yourself forward."
                            </p>

                            <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-10">
                                <motion.a
                                    href="https://www.instagram.com/team_abraxas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-white/60 hover:text-white transition-colors duration-300"
                                >
                                    <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/company/abraxas-nith/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-white/60 hover:text-white transition-colors duration-300"
                                >
                                    <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes animStar {
                    from { transform: translateY(0); }
                    to { transform: translateY(-2000px); }
                }
                .stars {
                    width: 1px;
                    height: 1px;
                    background: transparent;
                    box-shadow: ${generateStars(700)};
                    animation: animStar 50s linear infinite;
                }
                @media (max-width: 768px) {
                    .stars { box-shadow: ${generateStars(500)}; }
                }
                @media (max-width: 640px) {
                    .stars { box-shadow: ${generateStars(300)}; }
                }
            `}</style>
        </div>
    );
};

function generateStars(count) {
    let stars = '';
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        stars += `${x}px ${y}px #FFF${i === count - 1 ? '' : ','} `;
    }
    return stars;
}

export default Hero;