import React, { useState, memo } from 'react';

const OrbitalSystem = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [isMoon1Paused, setIsMoon1Paused] = useState(false);
    const [isMoon2Paused, setIsMoon2Paused] = useState(false);

    return (
        <div className="relative w-full py-36 px-4 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-24">

                {/* ── LEFT: Orbital System ── */}
                <div
                    className="relative flex-shrink-0 flex justify-center items-center"
                    style={{ width: '520px', height: '520px' }}
                >
                    {/* Center Logo — Nimbus — slowly rotates around itself */}
                    <div
                        className="absolute flex justify-center items-center z-10"
                        style={{ width: '130px', height: '130px' }}
                    >
                        {/* Static glow — no animation cost */}
                        {/* Inner bright glow */}
                        <div style={{
                            position: 'absolute',
                            width: '150px',
                            height: '150px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
                            willChange: 'transform',
                            transform: 'translateZ(0)',
                        }} />
                        {/* Outer soft glow */}
                        <div style={{
                            position: 'absolute',
                            width: '220px',
                            height: '220px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 65%)',
                            willChange: 'transform',
                            transform: 'translateZ(0)',
                        }} />
                        <img
                            src="/NimbusLogo.jpeg"
                            alt="Nimbus Logo"
                            onError={(e) => e.target.style.display = 'none'}
                            className="w-full h-full object-contain relative z-10"
                            style={{
                                mixBlendMode: 'screen',
                                filter: 'brightness(1.2)',
                                animation: 'selfRotate 20s linear infinite',
                                willChange: 'transform',
                            }}
                        />
                    </div>

                    {/* Orbit 1 — Abraxas logo */}
                    <div
                        className="absolute rounded-full z-20 pointer-events-none"
                        style={{
                            width: '280px', height: '280px',
                            border: '1.5px solid rgba(255,255,255,0.6)',
                            boxShadow: '0 0 6px rgba(255,255,255,0.3)',
                            animation: 'orbit 10s linear infinite',
                            animationPlayState: isPaused ? 'paused' : 'running',
                            willChange: 'transform',
                            transform: 'translateZ(0)',
                        }}
                    >
                        <div
                            className="absolute group flex justify-center items-center cursor-pointer pointer-events-auto"
                            style={{
                                top: '0%', left: '50%',
                                marginTop: '-30px', marginLeft: '-30px',
                                width: '60px', height: '60px',
                            }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* counter-rotate to keep badge upright while orbiting */}
                            <div
                                className="w-full h-full relative"
                                style={{
                                    animation: 'orbit 10s linear infinite reverse',
                                    animationPlayState: isPaused ? 'paused' : 'running',
                                    willChange: 'transform',
                                    transform: 'translateZ(0)',
                                }}
                            >
                                {/* self-rotation layered on top */}
                                <img
                                    src="/abraxas.jpeg"
                                    alt="Abraxas"
                                    onError={(e) => e.target.style.display = 'none'}
                                    className="w-full h-full rounded-full object-cover"
                                    style={{
                                        animation: 'selfRotate 8s linear infinite',
                                        willChange: 'transform',
                                    }}
                                />
                                <div
                                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50"
                                    style={{
                                        fontSize: '11px',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        fontFamily: "'DM Sans', sans-serif",
                                    }}
                                >
                                    Abraxas
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orbit 2 — Moon */}
                    <div
                        className="absolute rounded-full z-[8] pointer-events-none"
                        style={{
                            width: '400px', height: '400px',
                            border: '1.5px solid rgba(255,255,255,0.35)',
                            animation: 'orbit 14s linear infinite reverse',
                            animationPlayState: isMoon1Paused ? 'paused' : 'running',
                            willChange: 'transform',
                            transform: 'translateZ(0)',
                        }}
                    >
                        <div
                            className="absolute flex justify-center items-center cursor-pointer pointer-events-auto"
                            style={{
                                top: '50%', left: '0%',
                                marginTop: '-15px', marginLeft: '-15px',
                                width: '30px', height: '30px',
                            }}
                            onMouseEnter={() => setIsMoon1Paused(true)}
                            onMouseLeave={() => setIsMoon1Paused(false)}
                        >
                            <div style={{
                                animation: 'orbit 14s linear infinite',
                                animationPlayState: isMoon1Paused ? 'paused' : 'running',
                                willChange: 'transform',
                                transform: 'translateZ(0)',
                            }}>
                                <div style={{
                                    width: '28px', height: '28px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle at 35% 35%, #ffffff, #aaaaaa)',
                                    boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)',
                                }} />
                            </div>
                        </div>
                    </div>

                    {/* Orbit 3 — Moon */}
                    <div
                        className="absolute rounded-full z-[7] pointer-events-none"
                        style={{
                            width: '520px', height: '520px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            animation: 'orbit 18s linear infinite',
                            animationPlayState: isMoon2Paused ? 'paused' : 'running',
                            willChange: 'transform',
                            transform: 'translateZ(0)',
                        }}
                    >
                        <div
                            className="absolute flex justify-center items-center cursor-pointer pointer-events-auto"
                            style={{
                                top: '0%', left: '50%',
                                marginTop: '-15px', marginLeft: '-15px',
                                width: '30px', height: '30px',
                            }}
                            onMouseEnter={() => setIsMoon2Paused(true)}
                            onMouseLeave={() => setIsMoon2Paused(false)}
                        >
                            <div style={{
                                animation: 'orbit 18s linear infinite reverse',
                                animationPlayState: isMoon2Paused ? 'paused' : 'running',
                                willChange: 'transform',
                                transform: 'translateZ(0)',
                            }}>
                                <div style={{
                                    width: '28px', height: '28px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle at 35% 35%, #ffffff, #aaaaaa)',
                                    boxShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)',
                                }} />
                            </div>
                        </div>
                    </div>

                    <style>{`
                        @keyframes orbit {
                            from { transform: rotate(0deg); }
                            to   { transform: rotate(360deg); }
                        }
                        @keyframes selfRotate {
                            from { transform: translateZ(0) rotate(0deg); }
                            to   { transform: translateZ(0) rotate(360deg); }
                        }
                    `}</style>
                </div>

                {/* ── RIGHT: Text ── */}
                <div className="flex flex-col justify-center flex-1 max-w-lg">
                    <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6"
                    >
                        where physics meets possibility
                    </p>

                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(2.3rem, 3vw, 2.8rem)',
                            lineHeight: 1.35,
                        }}
                        className="text-white mb-6 lowercase"
                    >
                        we don't just study the universe.{' '}
                        <span className="text-white/50">we build things that question it.</span>
                    </h2>

                    <div className="w-8 h-px bg-white/20 mb-6" />

                    <p
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className="text-white/40 text-lg leading-relaxed font-light mb-8"
                    >
                        From quantum computing to radio telescopes, sonic levitation to 3D metal printing —
                        Team Abraxas is where engineering physics students turn curiosity into creation.
                        Every project begins with a question the universe hasn't answered yet.
                    </p>

                    <div className="flex flex-col gap-4">
                        {[
                            { number: '15+', label: 'Projects built across 4 years' },
                            { number: '46',  label: 'Members pushing boundaries'   },
                            { number: '∞',   label: 'Questions worth asking'       },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                    className="text-white text-2xl font-bold w-12"
                                >
                                    {stat.number}
                                </span>
                                <span
                                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                                    className="text-white/30 text-base tracking-wide"
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default memo(OrbitalSystem);