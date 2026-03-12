import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import projectsData from './Projectslist';

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState('2026');
    const [activeIndex, setActiveIndex] = useState(0);

    const groupedData = projectsData.reduce((acc, project) => {
        if (!acc[project.year]) acc[project.year] = [];
        acc[project.year].push(project);
        return acc;
    }, {});

    const getDisplayedProjects = () => {
        if (selectedYear === 'all') {
            return Object.entries(groupedData)
                .sort(([a], [b]) => b.localeCompare(a))
                .flatMap(([year, projects]) => projects.map(p => ({ ...p, year })));
        }
        return (groupedData[selectedYear] || []).map(p => ({ ...p, year: selectedYear }));
    };

    const filteredProjects = getDisplayedProjects();

    useEffect(() => {
        setActiveIndex(0);
    }, [selectedYear]);

    useEffect(() => {
        const STICKY_TOP = 106;

        const onScroll = () => {
            const cards = document.querySelectorAll('.project-sticky-card');
            let current = 0;
            cards.forEach((card, i) => {
                const rect = card.getBoundingClientRect();
                if (rect.top <= STICKY_TOP + 1) {
                    current = i;
                }
            });
            setActiveIndex(current);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, [filteredProjects.length]);

    return (
        <div style={{ background: '#000', width: '100%', paddingTop: '60px' }}>

            {/* Section Header */}
            {/* Section Header */}
<div style={{ textAlign: 'center', marginBottom: '24px', padding: '0 20px' }}>
    <h1 style={{
        fontSize: 'clamp(2.2rem, 5vw, 4rem)',
        fontWeight: 700,
        color: 'white',
        margin: 0,
        fontFamily: "'Syne', sans-serif",
        letterSpacing: '-0.01em',
    }}>
        Our Projects
    </h1>
    <div style={{
        width: '48px',
        height: '1px',
        background: 'rgba(255,255,255,0.2)',
        margin: '12px auto 0'
    }} />
    <p style={{
        color: 'rgba(255,255,255,0.4)',
        fontSize: '1rem',
        marginTop: '10px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
    }}>
        Innovations built by Team Abraxas
    </p>
</div>

            {/* Year Filter — sticky */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: '#000',
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
                padding: '12px 20px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
                {['all', '2026', '2025', '2024', '2023'].map(year => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        style={{
                            padding: '8px 22px',
                            borderRadius: '999px',
                            border: selectedYear === year
                                ? '1px solid rgba(255,255,255,0.4)'
                                : '1px solid rgba(255,255,255,0.1)',
                            cursor: 'pointer',
                            fontWeight: 500,
                            fontSize: '13px',
                            fontFamily: 'DM Sans, sans-serif',
                            transition: 'all 0.25s ease',
                            background: selectedYear === year
                                ? 'rgba(255,255,255,0.1)'
                                : 'transparent',
                            color: selectedYear === year ? 'white' : 'rgba(255,255,255,0.4)',
                        }}
                    >
                        {year === 'all' ? 'All Years' : year}
                    </button>
                ))}
            </div>

            {/* Stacked Cards */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedYear}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ paddingBottom: '50vh' }}
                >
                    {filteredProjects.map((project, index) => (
                        <div
                            key={`${project.name}-${index}`}
                            className="project-sticky-card"
                            style={{
                                position: 'sticky',
                                top: '106px',
                                zIndex: index + 1,
                                marginBottom: index < filteredProjects.length - 1 ? '28vh' : '0',
                                height: 'auto',
                            }}
                        >
                            <ProjectCard
                                project={project}
                                index={index}
                                activeIndex={activeIndex}
                            />
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>

        </div>
    );
};

export default Projects;