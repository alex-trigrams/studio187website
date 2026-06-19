import type { Metadata } from 'next'
import { Anton, Archivo, Space_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import MobileEnquireButton from '@/components/MobileEnquireButton'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Studio 187 Tattoo | Maylands, Western Australia',
  description: 'Nine resident tattoo artists in Maylands, WA. Fine line, traditional, blackwork, realism and more. Walk-ins welcome. 187 Guildford Road.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${spaceMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-archivo), sans-serif', background: '#0A0A0A', color: '#ECE8E1' }}>
        <Nav />
        {children}
        <Footer />
        <MobileEnquireButton />
      </body>
    </html>
  )
}
