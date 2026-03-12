import React, { memo } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import OrbitalSystem from "./OrbitalSystem";

// Lazy load the heavy Three.js canvas
import { lazy, Suspense } from "react";
const RoverCanvas = lazy(() => import("./Rover"));

const About = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="min-h-screen relative flex flex-col justify-start items-center bg-black text-white py-8 sm:py-12 md:py-16 lg:py-24">
            <motion.div
                className="z-10 flex flex-col w-full max-w-6xl px-4 sm:px-6 lg:px-8"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.7 }}
            >
                {/* Text + Rover Row */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <h1
                            style={{ fontFamily: "'Syne', sans-serif" }}
                            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 tracking-tight"
                        >
                            Who we are
                        </h1>
                        <div className="w-12 h-px bg-white/40 mb-4 sm:mb-6"></div>
                        <p
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                            className="text-lg sm:text-base md:text-lg max-w-prose tracking-normal text-white/60 leading-relaxed font-light"
                        >
                            Team Abraxas is the engineering physics branch's departmental club — a vibrant community driven by passion for technology and discovery. We explore diverse physics disciplines from quantum computing to particle physics, creating technological innovations while unraveling universal mysteries. As physics enthusiasts, we've built a space where curiosity thrives and knowledge grows. Through engaging discussions, demonstrations, and groundbreaking discoveries, we're building a legacy that combines scientific exploration with practical innovation.
                        </p>
                    </div>

                    {/* Rover — only rendered once visible, with fallback */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96" ref={ref}>
                        {inView && (
                            <Suspense fallback={
                                <div className="w-full h-full flex items-center justify-center">
                                    <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/20 text-sm animate-pulse">Loading...</p>
                                </div>
                            }>
                                <RoverCanvas />
                            </Suspense>
                        )}
                    </div>
                </div>

                {/* Orbital System */}
                <div className="relative z-5 flex justify-center items-center w-full overflow-hidden">
                    <OrbitalSystem />
                </div>

                {/* CountUp Stats */}
                <motion.div
                    className="mt-0 w-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 50, delay: 1 }}
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
                        {[
                            { end: 24, label: "Projects" },
                            { end: 59, label: "Members" },
                            { end: 1,  label: "Wins" },
                            { end: 18,  label: "Events" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="text-center p-6 sm:p-8 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-300"
                            >
                                <h3
                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
                                >
                                    <CountUp end={item.end} duration={5} />
                                </h3>
                                <p
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-widest"
                                >
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default memo(About);