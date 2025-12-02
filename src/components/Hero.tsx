'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-[80vh] flex items-center relative">
            {/* Background gradient effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            {/* Mobile-only background image using profile2 */}
            <div
                className="absolute inset-0 md:hidden opacity-25"
                style={{
                    backgroundImage: "url('/profile.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                aria-hidden="true"
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden="true" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center">
                    {/* Text side */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                        >
                            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                            className="text-lg md:text-2xl text-muted mb-8 max-w-xl leading-relaxed"
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-wrap items-center gap-4 mb-10"
                        >
                            <a href="#projects" className="btn-primary">
                                View Projects
                            </a>
                            <a href="#contact" className="btn-secondary">
                                Let&apos;s Talk
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.55, duration: 0.5 }}
                            className="flex gap-4 items-center"
                        >
                            <span className="text-sm text-muted uppercase tracking-[0.2em]">
                                Find me on
                            </span>
                            <div className="flex gap-3">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                                    aria-label="GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                {personalInfo.linkedin && (
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                                    aria-label="Email"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image side (desktop & tablet only) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative hidden md:flex justify-center md:justify-end"
                    >
                        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] blur-2xl opacity-60 group-hover:opacity-80 transition-smooth" />
                            <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-secondary/40 to-accent/40 opacity-60 group-hover:opacity-90 transition-smooth" />
                            <div className="relative w-full h-full rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.9),_rgba(15,23,42,0.95))] border border-white/10 overflow-hidden flex items-center justify-center">
                                {/* Default image */}
                                <Image
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover rounded-[1.75rem] transition-smooth group-hover:opacity-0"
                                    priority
                                />
                                {/* Hover image */}
                                <Image
                                    src="/profile2.jpg"
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-smooth"
                                />
                                {/* Soft fade at the bottom to blend into background */}
                                <div
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f] opacity-80"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    onClick={scrollToAbout}
                    className="mt-12 inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-smooth"
                    aria-label="Scroll to about section"
                >
                    <ArrowDown size={20} className="animate-bounce" />
                    Scroll to about
                </motion.button>
            </div>
        </section>
    );
}
