import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
                    {/* Subtle top light effect (no image) */}
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_65%)]"
                        aria-hidden="true"
                    />
                    {children}
                </div>
            </body>
        </html>
    )
}
