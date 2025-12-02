'use client';

import { motion } from 'framer-motion';

const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#technologies', label: 'Tech' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-[rgba(10,10,15,0.9)] backdrop-blur-xl"
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
                <a href="#home" className="text-sm font-semibold tracking-[0.25em] uppercase text-muted">
                    JAY MAR MARTIN
                </a>
                <div className="flex items-center gap-4 text-sm">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-muted hover:text-primary transition-smooth"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
}


