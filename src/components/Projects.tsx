'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { projects, technologies } from '@/data/portfolio';

interface ProjectsProps {
    selectedTechnology: string | null;
}

export default function Projects({ selectedTechnology }: ProjectsProps) {
    const [activeFilter, setActiveFilter] = useState<string>('All');
    const [filteredProjects, setFilteredProjects] = useState(projects);

    // Get unique technologies from all projects
    const projectTechnologies = ['All', ...Array.from(new Set(technologies.map(t => t.name)))];

    useEffect(() => {
        if (selectedTechnology) {
            setActiveFilter(selectedTechnology);
            filterProjects(selectedTechnology);
            // Scroll to projects section
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selectedTechnology]);

    const filterProjects = (tech: string) => {
        setActiveFilter(tech);
        if (tech === 'All') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(project => project.technologies.includes(tech)));
        }
    };

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                {/* Technology Filter Navbar */}
                <div className="mb-12">
                    <div className="flex gap-3 justify-center flex-wrap px-4">
                        {projectTechnologies.map((tech) => (
                            <button
                                key={tech}
                                onClick={() => filterProjects(tech)}
                                className={`px-6 py-2 rounded-full font-medium transition-smooth ${activeFilter === tech
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                    : 'glass hover:bg-card-hover'
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    className="card group"
                                >
                                    {/* Project Image */}
                                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                                        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                                            {project.technologies[0] === 'React' ? '⚛️' :
                                                project.technologies[0] === 'Django' ? '🎸' :
                                                    project.technologies[0] === 'Next.js' ? '▲' : '💻'}
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted mb-4">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-full glass"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-smooth"
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-smooth"
                                            >
                                                <Github size={16} />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-12"
                            >
                                <p className="text-2xl text-muted">
                                    No projects found with <span className="text-primary font-semibold">{activeFilter}</span>
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
