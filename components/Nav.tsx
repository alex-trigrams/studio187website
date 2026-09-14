'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
  ['/', 'Home'],
  ['/gallery', 'Work'],
  ['/store', 'Store'],
  ['/artists', 'Artists'],
  ['/info', 'Info'],
  ['/contact', 'Contact'],
]

const MENU_LINKS = [
  ...LINKS,
  ['/#where-we-are', 'Find Us'],
  ['/parking', 'Parking'],
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    document.body.classList.add('nav-menu-open')
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      document.body.classList.remove('nav-menu-open')
    }
  }, [open])

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
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,10,0.78)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(236,232,225,0.13)',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        padding: '10px clamp(20px,5vw,72px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
      }}>
        <Link href="/" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image src="/images/logo.jpg" alt="Studio 187 Tattoo" width={132} height={132} style={{ objectFit: 'contain', filter: 'invert(1)', mixBlendMode: 'screen' }} />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.2vw,34px)', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} style={linkStyle(href)} className="nav-link">{label}</Link>
          ))}
          <Link
            href="/contact"
            className="hover-opacity"
            style={{
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '11px 22px', background: '#ECE8E1', color: '#0A0A0A',
              borderRadius: 8, border: 'none', cursor: 'pointer', textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Enquire
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
          style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            width: 40, height: 40, flexShrink: 0, padding: 0,
            position: 'relative', zIndex: 101,
          }}
        >
          <span className={`nav-burger-bar ${open ? 'is-open' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <div className={`nav-mobile-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav style={{ display: 'flex', flexDirection: 'column', padding: '8px clamp(20px,5vw,72px) 28px' }}>
          {MENU_LINKS.map(([href, label], i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="nav-mobile-link"
              style={{
                fontFamily: 'var(--font-anton), sans-serif',
                fontWeight: 400, textTransform: 'uppercase',
                fontSize: 30, letterSpacing: '-0.005em',
                color: pathname === href ? '#ECE8E1' : '#9d988e',
                textDecoration: 'none',
                padding: '14px 0',
                borderBottom: '1px solid rgba(236,232,225,0.1)',
                transitionDelay: open ? `${i * 35}ms` : '0ms',
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover-opacity"
            style={{
              marginTop: 26,
              fontFamily: 'var(--font-space-mono), monospace',
              fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '16px 0', background: '#ECE8E1', color: '#0A0A0A',
              borderRadius: 8, border: 'none', cursor: 'pointer', textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Enquire
          </Link>
          <a href="tel:0406084799" style={{ marginTop: 22, fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.06em', color: '#9d988e', textDecoration: 'none', textAlign: 'center' }}>
            0406 084 799
          </a>
        </nav>
      </div>

      <style>{`
        .nav-burger-bar,
        .nav-burger-bar::before,
        .nav-burger-bar::after {
          position: absolute; left: 6px; right: 6px; height: 2px;
          background: #ECE8E1; border-radius: 2px;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1), opacity 0.2s ease, top 0.32s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-burger-bar { top: 19px; }
        .nav-burger-bar::before { content: ''; top: -8px; }
        .nav-burger-bar::after { content: ''; top: 8px; }
        .nav-burger-bar.is-open { background: transparent; }
        .nav-burger-bar.is-open::before { top: 0; transform: rotate(45deg); }
        .nav-burger-bar.is-open::after { top: 0; transform: rotate(-45deg); }

        .nav-mobile-panel {
          display: none;
          position: absolute;
          top: 100%;
          left: 0; right: 0;
          max-height: 82vh;
          overflow-y: auto;
          background: rgba(10,10,10,0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(236,232,225,0.13);
          transform: translateY(-12px);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.32s cubic-bezier(0.16,1,0.3,1), opacity 0.28s ease;
        }
        .nav-mobile-panel.is-open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .nav-mobile-link { transition: color 0.2s; }
        .nav-mobile-link:hover { color: #ECE8E1 !important; }

        @media (max-width: 760px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
          .nav-mobile-panel { display: block; }
        }
      `}</style>
    </header>
  )
}
