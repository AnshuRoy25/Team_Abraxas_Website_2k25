import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, activeIndex }) => {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const diff = activeIndex - index;
    const isCovered = diff > 0;

    const scale = isCovered ? Math.max(1 - diff * 0.04, 0.82) : 1;
    const y = isCovered ? -diff * 8 : 0;
    const brightness = isCovered ? Math.max(1 - diff * 0.05, 0.95) : 1;
    const blur = isCovered && diff > 1 ? `blur(${Math.min((diff - 1) * 1.5, 4)}px)` : 'blur(0px)';

    const shortDesc = project.description?.length > 160
        ? project.description.slice(0, 160) + '...'
        : project.description;

    return (
        <motion.div
            animate={{
                scale,
                y,
                filter: `brightness(${brightness}) ${blur}`,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 35, mass: 0.8 }}
            style={{
                width: '90%',
                maxWidth: '900px',
                margin: '0 auto',
                height: isMobile ? 'auto' : '480px',
                minHeight: isMobile ? '500px' : 'auto',
                borderRadius: '24px',
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                transformOrigin: 'top center',
                boxShadow: '0 8px 40px rgba(0,0,0,0.8)',
                position: 'relative',
                overflow: 'visible',
            }}
        >
            {/* LEFT — Text */}
            <div style={{
                flex: isMobile ? 'none' : '0 0 52%',
                width: isMobile ? '100%' : 'auto',
                padding: isMobile ? '30px' : '44px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#0a0a0a',
                borderRadius: isMobile ? '24px 24px 0 0' : '24px 0 0 24px',
                overflowY: expanded ? 'auto' : 'hidden',
                maxHeight: isMobile ? 'none' : '480px',
            }}>
                <div>
                    {/* Year label */}
                    <p style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        letterSpacing: '0.3em',
                        color: 'rgba(255,255,255,0.3)',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                        fontFamily: "'DM Sans', sans-serif",
                    }}>
                        {project.year} · Project
                    </p>

                    {/* Title */}
                    <h2 style={{
                        fontSize: 'clamp(1.6rem, 3vw, 2.6rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.1,
                        marginBottom: '16px',
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: '-0.02em',
                    }}>
                        {project.name}
                    </h2>

                    {/* Divider */}
                    <div style={{
                        width: '32px',
                        height: '1px',
                        background: 'rgba(255,255,255,0.15)',
                        marginBottom: '16px',
                    }} />

                    {/* Description */}
                    <p style={{
                        fontSize: '14px',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.45)',
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        marginBottom: '8px',
                    }}>
                        {expanded ? project.description : shortDesc}
                    </p>

                    {project.description?.length > 160 && (
                        <button
                            onClick={() => setExpanded(!expanded)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'rgba(255,255,255,0.5)',
                                fontSize: '12px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                padding: 0,
                                fontFamily: "'DM Sans', sans-serif",
                                letterSpacing: '0.05em',
                                textDecoration: 'underline',
                                textUnderlineOffset: '3px',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                        >
                            {expanded ? 'Show less ↑' : 'Read more ↓'}
                        </button>
                    )}
                </div>

                {/* Bottom row — index indicator */}
                <div style={{
                    marginTop: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    paddingTop: '16px',
                }}>
                    <span style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.2)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                    }}>
                        {String(index + 1).padStart(2, '0')} / {' '}
                        <span style={{ color: 'rgba(255,255,255,0.1)' }}>
                            Team Abraxas
                        </span>
                    </span>
                </div>
            </div>

            {/* RIGHT — Image */}
            <div style={{
                flex: isMobile ? 'none' : '0 0 48%',
                width: isMobile ? '100%' : 'auto',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: isMobile ? '0 0 24px 24px' : '0 24px 24px 0',
                height: isMobile ? '220px' : '480px',
                background: '#111',
                borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
                borderTop: isMobile ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
                {typeof project.photo === 'string' ? (
                    <img
                        src={project.photo}
                        alt={project.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            opacity: 0.85,
                        }}
                        onError={e => {
                            e.target.src = `https://placehold.co/600x500/111/333?text=${encodeURIComponent(project.name)}`;
                        }}
                    />
                ) : (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#111',
                    }}>
                        {project.photo}
                    </div>
                )}

                {/* subtle dark overlay on image */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4) 100%)',
                    pointerEvents: 'none',
                }} />
            </div>
        </motion.div>
    );
};

export default ProjectCard;