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
        <section className="min-h-screen flex items-center justify-center relative">
            {/* Background gradient effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative w-48 h-48 mx-auto mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-75" />
                        <Image
                            src={personalInfo.profileImage}
                            alt={personalInfo.name}
                            width={192}
                            height={192}
                            className="relative rounded-full border-4 border-primary/50 object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold mb-4"
                >
                    Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xl md:text-2xl text-muted mb-8 max-w-2xl mx-auto"
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex gap-4 justify-center mb-12"
                >
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full hover:bg-primary/20 transition-smooth"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    {personalInfo.linkedin && (
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass rounded-full hover:bg-primary/20 transition-smooth"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    )}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="p-3 glass rounded-full hover:bg-primary/20 transition-smooth"
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    onClick={scrollToAbout}
                    className="animate-bounce"
                    aria-label="Scroll to about section"
                >
                    <ArrowDown size={32} className="text-primary" />
                </motion.button>
            </div>
        </section>
    );
}
