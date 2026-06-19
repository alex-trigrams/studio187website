'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const linkStyle = (path: string) => ({
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontFamily: 'var(--font-space-mono), monospace',
    fontSize: '12.5px',
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color: pathname === path ? '#ECE8E1' : '#B6B2AA',
    textDecoration: 'none',
  })

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      background: 'rgba(10,10,10,0.78)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(236,232,225,0.13)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '16px clamp(20px,5vw,72px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
      }}>
        <Link href="/" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image src="/images/logo.jpg" alt="Studio 187 Tattoo" width={66} height={66} style={{ objectFit: 'contain', filter: 'invert(1)', mixBlendMode: 'screen' }} />
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(18px,2.6vw,38px)', flexWrap: 'wrap' }}>
          <Link href="/" style={linkStyle('/')} className="nav-link">Home</Link>
          <Link href="/artists" style={linkStyle('/artists')} className="nav-link">Artists</Link>
          <Link href="/contact" style={linkStyle('/contact')} className="nav-link">Contact</Link>
          <Link
            href="/contact"
            className="nav-enquire-btn hover-opacity"
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '11px 22px', background: '#ECE8E1', color: '#0A0A0A',
              borderRadius: 8, border: 'none', cursor: 'pointer', textDecoration: 'none',
            }}
          >
            Enquire
          </Link>
        </nav>
      </div>
      <style>{`
        @media (max-width: 768px) { .nav-enquire-btn { display: none !important; } }
      `}</style>
    </header>
  )
}
