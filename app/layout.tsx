import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '1001 Inventions - Islamic Golden Age Innovators',
  description: 'Discover the brilliant minds of the Islamic Golden Age who shaped our modern world. Explore interactive biographies of 21 revolutionary thinkers and their groundbreaking discoveries.',
  keywords: [
    'Islamic Golden Age',
    'medieval science',
    'Ibn al-Haytham', 
    'Al-Khwarizmi',
    'algebra',
    'optics',
    'medicine',
    'astronomy',
    'innovation',
    'history of science'
  ],
  authors: [{ name: '1001 Inventions' }],
  creator: '1001 Inventions',
  publisher: '1001 Inventions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://1001inventions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '1001 Inventions - Islamic Golden Age Innovators',
    description: 'Discover the brilliant minds of the Islamic Golden Age who shaped our modern world.',
    url: 'https://1001inventions.com',
    siteName: '1001 Inventions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '1001 Inventions - Islamic Golden Age Innovators',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1001 Inventions - Islamic Golden Age Innovators',
    description: 'Discover the brilliant minds of the Islamic Golden Age who shaped our modern world.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}