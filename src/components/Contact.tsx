'use client';

import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Let&apos;s <span className="gradient-text">Work Together</span>
                </h2>
                <p className="text-muted mb-8 max-w-xl mx-auto leading-relaxed">
                    I&apos;m open to full-time roles, internships, and freelance opportunities. If you think I&apos;d
                    be a good fit for your team or project, feel free to reach out.
                </p>

                <div className="card flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="btn-primary"
                    >
                        <Mail size={20} />
                        Email Me
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                    >
                        <FileText size={20} />
                        View Resume
                    </a>
                </div>
            </motion.div>
        </section>
    );
}


