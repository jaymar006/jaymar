'use client';

import { motion } from 'framer-motion';
import { technologies } from '@/data/portfolio';
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaBootstrap,
    FaPython,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
    FaHashtag,
    FaChartBar
} from 'react-icons/fa';
import {
    IoLogoJavascript
} from 'react-icons/io5';
import {
    SiTailwindcss,
    SiDjango,
    SiExpress,
    SiPostgresql,
    SiMysql,
    SiSqlite,
    SiAndroidstudio,
    SiKotlin
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';

interface TechnologiesProps {
    onTechnologyClick: (tech: string) => void;
    selectedTechnology: string | null;
}

// Icon mapping
const iconMap: { [key: string]: React.ElementType } = {
    FaHtml5,
    FaCss3Alt,
    IoLogoJavascript,
    FaReact,
    SiTailwindcss,
    FaBootstrap,
    FaPython,
    SiDjango,
    FaNodeJs,
    SiExpress,
    TbBrandCSharp,
    FaHashtag,
    SiPostgresql,
    DiMsqlServer,
    SiMysql,
    SiSqlite,
    FaDocker,
    FaGitAlt,
    SiAndroidstudio,
    SiKotlin,
    FaChartBar,
};

// Color mapping for each technology
const colorMap: { [key: string]: string } = {
    FaHtml5: '#E34F26',
    FaCss3Alt: '#1572B6',
    IoLogoJavascript: '#F7DF1E',
    FaReact: '#61DAFB',
    SiTailwindcss: '#06B6D4',
    FaBootstrap: '#7952B3',
    FaPython: '#3776AB',
    SiDjango: '#092E20',
    FaNodeJs: '#339933',
    SiExpress: '#000000',
    TbBrandCSharp: '#239120',
    FaHashtag: '#239120',
    SiPostgresql: '#4169E1',
    DiMsqlServer: '#CC2927',
    SiMysql: '#4479A1',
    SiSqlite: '#003B57',
    FaDocker: '#2496ED',
    FaGitAlt: '#F05032',
    SiAndroidstudio: '#3DDC84',
    SiKotlin: '#7F52FF',
    FaChartBar: '#F2C811',
};

export default function Technologies({ onTechnologyClick, selectedTechnology }: TechnologiesProps) {
    return (
        <section id="technologies" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    Technologies <span className="gradient-text">&</span> Skills
                </h2>

                <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
                    Click on any technology to filter projects that use it
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {technologies.map((tech, index) => {
                        const IconComponent = iconMap[tech.icon];
                        const iconColor = colorMap[tech.icon];

                        return (
                            <motion.button
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => onTechnologyClick(tech.name)}
                                className={`card text-center cursor-pointer ${selectedTechnology === tech.name ? 'ring-2 ring-primary' : ''
                                    }`}
                            >
                                <div className="flex justify-center mb-3">
                                    {IconComponent && (
                                        <IconComponent
                                            size={48}
                                            style={{ color: iconColor }}
                                        />
                                    )}
                                </div>
                                <h3 className="font-semibold text-lg">{tech.name}</h3>
                                <p className="text-sm text-muted capitalize mt-1">{tech.category}</p>
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
