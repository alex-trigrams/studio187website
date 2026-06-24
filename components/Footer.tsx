import Link from 'next/link'
import { hours } from '@/lib/data'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(236,232,225,0.13)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 40, marginBottom: 'clamp(48px,7vw,80px)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-anton), sans-serif', fontSize: 28, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 14 }}>Studio 187</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: '#87837B' }}>187 Guildford Road<br />Maylands, WA 6051<br />0406 084 799</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 16 }}>Pages</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, alignItems: 'flex-start' }}>
              {[['/', 'Home'], ['/gallery', 'Work'], ['/store', 'Store'], ['/artists', 'Artists'], ['/info', 'Info'], ['/contact', 'Contact'], ['/#where-we-are', 'Where We Are'], ['/parking', 'Parking']].map(([href, label]) => (
                <Link key={href} href={href} className="nav-link" style={{ fontSize: 14, color: '#B6B2AA', fontFamily: 'var(--font-archivo), sans-serif', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 16 }}>Hours</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: '#87837B' }}>
              Tue–Sat 10:00–17:00<br />Mon &amp; Sun by appointment<br />Public holidays by artist appt
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 16 }}>Notice</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: '#87837B' }}>Our studio is not suitable for children.</div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 16 }}>Follow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="https://www.instagram.com/studio187tattoo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#B6B2AA', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-archivo), sans-serif', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ECE8E1')} onMouseLeave={e => (e.currentTarget.style.color = '#B6B2AA')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
              <a href="https://www.facebook.com/studio187tattoo" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#B6B2AA', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-archivo), sans-serif', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ECE8E1')} onMouseLeave={e => (e.currentTarget.style.color = '#B6B2AA')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </a>
              <a href="https://www.tiktok.com/@studio187tattoo" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#B6B2AA', textDecoration: 'none', fontSize: 14, fontFamily: 'var(--font-archivo), sans-serif', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = '#ECE8E1')} onMouseLeave={e => (e.currentTarget.style.color = '#B6B2AA')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, paddingTop: 28, borderTop: '1px solid rgba(236,232,225,0.1)' }}>
          <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.06em', color: '#56524B' }}>© 2026 Studio 187 Tattoo</span>
          <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.06em', color: '#56524B' }}>Maylands · Western Australia</span>
          <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7d7970' }}>Built by <span style={{ color: '#ECE8E1' }}>TRIGRAMS Studio</span></span>
        </div>
      </div>
    </footer>
  )
}
