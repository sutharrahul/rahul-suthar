import type { Metadata, Viewport } from 'next'
import { Space_Mono, JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

// Applies the saved theme before first paint to avoid a flash. Default: light.
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`

export const metadata: Metadata = {
  title: {
    default: 'Rahul Suthar — Full Stack Developer & AI Engineer',
    template: '%s | Rahul Suthar',
  },
  description:
    'Rahul Suthar is a Full Stack Developer specializing in AI-powered web applications, React, Next.js, and modern engineering. Available for freelance and full-time opportunities.',
  keywords: [
    'Rahul Suthar',
    'Full Stack Developer',
    'AI Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'LangChain',
    'Frontend Engineer',
    'India',
  ],
  authors: [{ name: 'Rahul Suthar', url: 'https://github.com/sutharrahul' }],
  creator: 'Rahul Suthar',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Rahul Suthar — Full Stack Developer & AI Engineer',
    description:
      'Building intelligent web experiences at the intersection of AI and modern engineering.',
    siteName: 'Rahul Suthar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Suthar — Full Stack Developer & AI Engineer',
    description: 'Building intelligent web experiences at the intersection of AI and modern engineering.',
    creator: '@sutharrahul',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F1419' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1419' },
  ],
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
      </head>
      <body className={`${spaceMono.variable} ${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
