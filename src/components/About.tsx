'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import { aboutContent } from '@/data/portfolio';

export default function About() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleDownloadCV = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="card max-w-3xl mx-auto">
                    <p className="text-lg text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
                        {aboutContent.short}
                    </p>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <p className="text-lg text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
                                    {aboutContent.full}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 glass rounded-lg">
                        <div>
                            <p className="text-sm text-muted">Location</p>
                            <p className="text-lg font-semibold">Cavite, Philippines</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted">Degree</p>
                            <p className="text-lg font-semibold">Bachelor of Science in Computer Science</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted">Phone</p>
                            <p className="text-lg font-semibold">09051264518</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted">Email</p>
                            <p className="text-lg font-semibold">martinjaymar6@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="btn-secondary"
                        >
                            {isExpanded ? (
                                <>
                                    Show Less <ChevronUp size={20} />
                                </>
                            ) : (
                                <>
                                    Learn More <ChevronDown size={20} />
                                </>
                            )}
                        </button>

                        <button onClick={handleDownloadCV} className="btn-primary">
                            Download CV <Download size={20} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
