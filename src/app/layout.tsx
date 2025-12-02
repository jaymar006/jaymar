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
            <body className={inter.className}>{children}</body>
        </html>
    )
}
