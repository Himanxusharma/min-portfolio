import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import DynamicTitle from './components/DynamicTitle'
import Favicon from './components/Favicon'

const inter = Inter({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: '✨ Himanshu Sharma - Designer & Developer',
  description: 'This is how I think. A minimal portfolio showcasing design and development work.',
  keywords: ['portfolio', 'designer', 'developer', 'creative', 'minimal'],
  authors: [{ name: 'Himanshu Sharma' }],
  creator: 'Himanshu Sharma',
  icons: {
    icon: '/himanshu-photo.png',
    apple: '/himanshu-photo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://himanshusharma.dev',
    title: 'Himanshu Sharma - Designer & Developer',
    description: 'This is how I think. A minimal portfolio showcasing design and development work.',
    siteName: 'Himanshu Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu Sharma - Designer & Developer',
    description: 'This is how I think. A minimal portfolio showcasing design and development work.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Favicon />
        <DynamicTitle />
        {children}
      </body>
    </html>
  )
}
