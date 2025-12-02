'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Settings from '@/components/Settings';

export default function Home() {
    const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

    const handleTechnologyClick = (tech: string) => {
        setSelectedTechnology(tech);
    };

    return (
        <main className="min-h-screen">
            <Settings />
            <Hero />
            <About />
            <Technologies
                onTechnologyClick={handleTechnologyClick}
                selectedTechnology={selectedTechnology}
            />
            <Projects selectedTechnology={selectedTechnology} />

            {/* Footer */}
            <footer className="py-8 text-center border-t border-border">
                <p className="text-muted">
                    © {new Date().getFullYear()} Portfolio. Built with Next.js, React, and TypeScript.
                </p>
            </footer>
        </main>
    );
}
