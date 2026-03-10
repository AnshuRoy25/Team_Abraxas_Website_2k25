import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectsData from './Projectslist';

const Projects = () => {
    const [selectedYear, setSelectedYear] = useState('all');
    const { ref, inView } = useInView({ triggerOnce: true });

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, delayChildren: 0.3, staggerChildren: 0.2 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    const buttonVariants = {
        hover: { scale: 1.05 },
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
    };

    const groupedData = projectsData.reduce((acc, project) => {
        if (!acc[project.year]) acc[project.year] = [];
        const maxCards = (project.year === '2026' || project.year === '2025') ? 5 : 7;
        if (acc[project.year].length < maxCards) acc[project.year].push(project);
        return acc;
    }, {});

    ['2026', '2025', '2024', '2023'].forEach(year => {
        if (!groupedData[year]) groupedData[year] = [];
        const maxCards = (year === '2026' || year === '2025') ? 5 : 7;
        while (groupedData[year].length < maxCards) {
            groupedData[year].push({
                name: `Project ${groupedData[year].length + 1}`,
                position: 'Coming Soon',
                description: 'Future project placeholder',
                photo: '/placeholder-image.jpg',
                year
            });
        }
    });

    const getDisplayedProjects = () => {
        if (selectedYear === 'all') {
            return Object.entries(groupedData)
                .reduce((acc, [year, projects]) => [...acc, ...projects.map(p => ({ ...p, year }))], [])
                .sort((a, b) => b.year.localeCompare(a.year));
        }
        return groupedData[selectedYear] || [];
    };

    const filteredData = getDisplayedProjects();

    return (
        <motion.div
            ref={ref}
            className="min-h-screen bg-black flex flex-col items-center md:items-center justify-start md:justify-center px-4 md:px-8 w-full max-w-screen-xl mx-auto py-8 md:py-16"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h1
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-4 text-left md:text-center tracking-tight"
                variants={cardVariants}
            >
                Our Projects
            </motion.h1>

            <div className="w-12 h-px bg-white/30 mb-4 md:mb-10"></div>

            <motion.p
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                className="text-left md:text-center text-white/40 text-base md:text-lg mb-4 md:mb-10 font-light"
                variants={cardVariants}
            >
                A look at what we've been building over the years.
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-12 w-full"
                variants={cardVariants}
            >
                {['all', '2026', '2025', '2024', '2023'].map((year) => (
                    <motion.button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        variants={buttonVariants}
                        whileHover="hover"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                        className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 border
                            w-[calc(50%-4px)] md:w-auto
                            ${selectedYear === year
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white/40 border-white/10 hover:bg-white/5 hover:text-white/70'
                            }`}
                    >
                        {year === 'all' ? 'All Years' : year}
                    </motion.button>
                ))}
            </motion.div>

            <div className="w-full">
                <div className="relative">
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-white/5">
                        <div className="flex gap-4 md:gap-6 pb-4">
                            <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
                                {filteredData.map((project, index) => (
                                    <motion.div
                                        key={`${selectedYear}-${index}`}
                                        variants={cardVariants}
                                        className="snap-start flex-shrink-0 first:pl-0 last:pr-4
                                            w-[calc(100vw-32px)]
                                            md:w-[calc(50vw-48px)]
                                            lg:w-80"
                                    >
                                        <ProjectCard
                                            photo={project.photo}
                                            name={project.name}
                                            position={project.position}
                                            description={project.description}
                                            year={project.year}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;