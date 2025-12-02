export interface Technology {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string; // logo / main icon
    backgroundImage?: string; // optional background image
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured: boolean;
}

export interface PersonalInfo {
    name: string;
    tagline: string;
    email: string;
    github: string;
    linkedin: string;
    profileImage: string;
}

export interface AboutContent {
    short: string;
    full: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
    name: 'Jay Mar Martin',
    tagline: 'Full-Stack Developer | CS Graduate 2025 | Building Modern Web Applications',
    email: 'martinjaymar6@gmail.com',
    github: 'https://github.com/jaymar006',
    linkedin: '',
    profileImage: '/profile.png',
};

// About Me Content
export const aboutContent: AboutContent = {
    short: "I'm a 23-year-old Full-Stack Developer and Computer Science graduate (Batch 2025) with the ability to design, develop, and deploy modern web applications from end to end. As a fresh grad, I focus on creating efficient, optimized, and user-friendly systems.",
    full: "My interests include data analytics, exploring optimization techniques, and building projects that combine logic, creativity, and technology. I'm passionate about writing clean, maintainable code and staying up-to-date with the latest tech trends. Outside of coding, I enjoy gaming, discovering great food, sharing funny moments with friends, listening to music, and diving into anything that sparks curiosity and continuous learning. I believe in the power of technology to solve real-world problems and am always eager to take on new challenges.",
};

// Technologies
export const technologies: Technology[] = [
    // Frontend
    { name: 'HTML', icon: 'FaHtml5', category: 'frontend' },
    { name: 'CSS', icon: 'FaCss3Alt', category: 'frontend' },
    { name: 'JavaScript', icon: 'IoLogoJavascript', category: 'frontend' },
    { name: 'React', icon: 'FaReact', category: 'frontend' },
    { name: 'Tailwind', icon: 'SiTailwindcss', category: 'frontend' },
    { name: 'Bootstrap', icon: 'FaBootstrap', category: 'frontend' },

    // Backend
    { name: 'Python', icon: 'FaPython', category: 'backend' },
    { name: 'Django', icon: 'SiDjango', category: 'backend' },
    { name: 'Node.js', icon: 'FaNodeJs', category: 'backend' },
    { name: 'Express.js', icon: 'SiExpress', category: 'backend' },
    { name: 'C#', icon: 'TbBrandCSharp', category: 'backend' },

    // Database
    { name: 'PostgreSQL', icon: 'SiPostgresql', category: 'database' },
    { name: 'MySQL', icon: 'SiMysql', category: 'database' },
    { name: 'SQL Server', icon: 'DiMsqlServer', category: 'database' },
    { name: 'SQLite', icon: 'SiSqlite', category: 'database' },

    // Tools & Others
    { name: 'Docker', icon: 'FaDocker', category: 'tools' },
    { name: 'Git', icon: 'FaGitAlt', category: 'tools' },
    { name: 'Android Studio', icon: 'SiAndroidstudio', category: 'tools' },
    { name: 'Kotlin', icon: 'SiKotlin', category: 'tools' },
    { name: 'Power BI', icon: 'FaChartBar', category: 'tools' },
];

// Projects
export const projects: Project[] = [
    {
        id: '1',
        title: 'Jail Visitation System',
        description: 'A jail visitation system with QR code recording and prisoner management',
        longDescription: 'A jail visitation system that lets the visitor be recorded online with the use of QR Code, Records of prisoners and also has capability to create ID.',
        image: '/projects/jail.svg',
        backgroundImage: '/projects/jail-bg.png',
        technologies: ['React', 'CSS', 'JavaScript', 'HTML', 'Node.js', 'Express.js', 'Docker'],
        liveUrl: 'https://jail-deployment.onrender.com',
        githubUrl: 'https://github.com/jaymar006/Jail-Deployment',
        featured: true,
    },
    {
        id: '2',
        title: 'AACbay',
        description: 'Android app for deaf and CNN individuals using N-gram model',
        longDescription: 'A Android Application for deaf and CNN individuals, the app uses pictogram and speech to text functionalities to help people with CNN and in Deaf community communicate. The app uses N-gram technology to better predict and suggest the next pictogram that\'ll be used.',
        image: '/projects/aacbaylogo.png',
        backgroundImage: '/projects/aacbay-bg.png',
        technologies: ['Android Studio', 'Kotlin'],
        liveUrl: 'https://github.com/jaymar006/Thesis-AACbay/releases/tag/v1.0.1',
        githubUrl: 'https://github.com/jaymar006/Thesis-AACbay',
        featured: true,
    },
    {
        id: '3',
        title: 'Altairs: Library Management System',
        description: 'Library management system converted to desktop app using Electron',
        longDescription: 'A Web Application that has been converted to Desktop Application with the use of electron. This app lets you record books, students and use qr code for identifying which is which. It also records books borrowed and a rewarding system.',
        image: '/projects/logonglittleheirs.png',
        backgroundImage: '/projects/bglittle.png',
        technologies: ['JavaScript', 'SQLite', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Tailwind'],
        githubUrl: 'https://github.com/jaymar006/library-system-prod',
        featured: true,
    },
];
