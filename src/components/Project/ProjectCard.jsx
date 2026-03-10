import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ProjectCard = ({ photo, name, position, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [-5, 5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const handleMouseMove = (e) => {
        if (!isFlipped) {
            const rect = cardRef.current.getBoundingClientRect();
            x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
            y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
        }
    };

    const handleMouseLeave = () => {
        x.set(0, { duration: 0.5 });
        y.set(0, { duration: 0.5 });
    };

    return (
        <div className="relative w-2/3 md:w-80" style={{ perspective: '1000px', height: '400px' }}>
            <motion.div
                ref={cardRef}
                className="w-full h-full cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ position: 'relative', transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <motion.div
                    className={`absolute w-full h-full border border-white/10 rounded-xl bg-black p-3 flex flex-col items-center backface-hidden ${isFlipped ? 'pointer-events-none' : ''}`}
                    style={{ rotateX, rotateY, backfaceVisibility: 'hidden', transition: 'transform 0.3s ease' }}
                >
                    <div className="w-38 h-38 md:w-48 md:h-48 rounded overflow-hidden mb-3 mt-2 flex items-center justify-center">
                        {typeof photo === 'string' ? (
                            <img
                                src={photo}
                                alt={name}
                                className="w-full h-full object-cover"
                                onError={(e) => (e.target.src = "https://placehold.co/400x300/black/grey")}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">{photo}</div>
                        )}
                    </div>

                    <div className="text-center mb-2">
                        <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-lg font-semibold text-white tracking-tight">{name}</h2>
                        <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/30 text-xs mt-1 uppercase tracking-widest">{position}</p>
                    </div>

                    <div className="text-center px-3">
                        <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/50 text-sm line-clamp-3 leading-relaxed">
                            {description}
                        </p>
                        <button
                            onClick={() => setIsFlipped(true)}
                            className="mt-3 text-xs px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
                        >
                            Read More
                        </button>
                    </div>
                </motion.div>

                {/* Back */}
                <motion.div
                    className={`absolute w-full h-full border border-white/10 rounded-xl bg-black p-6 flex flex-col backface-hidden ${!isFlipped ? 'pointer-events-none' : ''}`}
                    style={{ rotateY: 180, backfaceVisibility: 'hidden' }}
                >
                    <div className="flex flex-col h-full">
                        <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-lg font-semibold text-white mb-3 tracking-tight">{name}</h2>
                        <div className="w-8 h-px bg-white/20 mb-4"></div>
                        <div className="flex-grow overflow-y-auto">
                            <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-white/50 text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <button
                            onClick={() => setIsFlipped(false)}
                            className="mt-4 text-xs px-3 py-1.5 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all"
                        >
                            Back
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                .backface-hidden {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
            `}</style>
        </div>
    );
};

export default ProjectCard;