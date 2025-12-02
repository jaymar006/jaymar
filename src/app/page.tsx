'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Settings from '@/components/Settings';
import Contact from '@/components/Contact';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

// Particle background is purely visual and uses randomness, so render it client-side only
const BackgroundParticles = dynamic(() => import('@/components/BackgroundParticles'), {
    ssr: false,
});

export default function Home() {
    const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

    const handleTechnologyClick = (tech: string) => {
        setSelectedTechnology(tech);
    };

    return (
        <main className="min-h-screen pt-16 relative">
            <BackgroundParticles />
            <Navbar />
            <Settings />
            <Hero />
            <About />
            <Technologies
                onTechnologyClick={handleTechnologyClick}
                selectedTechnology={selectedTechnology}
            />
            <Projects selectedTechnology={selectedTechnology} />
            <Contact />

            {/* Footer */}
            <footer className="py-10 border-t border-border/60 mt-10">
                <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted text-center md:text-left">
                        © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js, TypeScript, Tailwind CSS, Docker & Render.
                    </p>
                    <div className="flex gap-3">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        {personalInfo.linkedin && (
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        )}
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="p-2 glass rounded-full hover:bg-primary/20 transition-smooth"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
