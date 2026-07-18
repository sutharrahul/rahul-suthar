import type { Metadata, Viewport } from 'next'
import { Space_Mono, Inter } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import { profile } from '@/data/portfolio'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// Applies the saved theme before first paint to avoid a flash. Default: light.
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`

const title = 'Rahul Suthar — Full-Stack Developer'
const description =
  'Full-stack developer shipping production web apps with an AI-driven workflow — owning features end-to-end, from database schema to API to UI.'
const ogImage = '/rahul-og.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s | Rahul Suthar',
  },
  description,
  keywords: [
    'Rahul Suthar',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'AI Engineer',
    'Frontend Engineer',
    'India',
  ],
  authors: [{ name: 'Rahul Suthar', url: profile.github }],
  creator: 'Rahul Suthar',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Rahul Suthar',
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 800,
        alt: 'Rahul Suthar — Full-Stack Developer',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#141414' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rahul Suthar',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  address: { '@type': 'PostalAddress', addressCountry: 'India' },
  sameAs: [profile.github, profile.linkedin],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceMono.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
