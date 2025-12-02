import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { projects } from '@/data/portfolio'

const inter = Inter({ subsets: ['latin'] })

// Use the first project that defines a backgroundImage for the top background
const topBackgroundImage =
    projects.find((project) => project.backgroundImage)?.backgroundImage ?? '/top-background.png'

export const metadata: Metadata = {
    title: 'Portfolio | Full Stack Developer',
    description: 'Professional portfolio showcasing my projects, skills, and experience in web development.',
    keywords: ['portfolio', 'web developer', 'full stack', 'react', 'next.js', 'django'],
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: 'Portfolio | Full Stack Developer',
        description: 'Professional portfolio showcasing my projects, skills, and experience in web development.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <div className="relative min-h-screen">
                    {/* Top background image derived from portfolio data */}
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url('${topBackgroundImage}')` }}
                        aria-hidden="true"
                    />
                    {/* Optional extra glow on top of the image */}
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),_transparent_60%)]"
                        aria-hidden="true"
                    />
                    {children}
                </div>
            </body>
        </html>
    )
}
