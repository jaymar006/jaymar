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
                <div className="relative min-h-screen overflow-hidden">
                    {/* Subtle top rectangular light effect (vertical fade) */}
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-primary/25 via-primary/5 to-transparent"
                        aria-hidden="true"
                    />

                    {/* Floating background orbs */}
                    <div
                        className="bubble bg-primary/40 w-40 h-40 -top-16 -left-20"
                        aria-hidden="true"
                    />
                    <div
                        className="bubble bg-secondary/35 w-44 h-44 top-1/3 -right-16"
                        style={{ animationDelay: '2s' }}
                        aria-hidden="true"
                    />
                    <div
                        className="bubble bg-accent/40 w-32 h-32 bottom-4 left-1/5"
                        style={{ animationDuration: '14s', animationDelay: '1s' }}
                        aria-hidden="true"
                    />

                    <div className="relative z-10">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
