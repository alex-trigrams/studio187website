import Link from 'next/link'
import Image from 'next/image'
import type { Artist } from '@/lib/data'
import s from './ArtistFlipCard.module.css'

function pad(n: number) { return String(n).padStart(2, '0') }

function InstagramIcon() {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: 18, height: 18, border: '1.6px solid currentColor', borderRadius: 5, flex: '0 0 auto' }}>
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 8, height: 8, border: '1.6px solid currentColor', borderRadius: '50%' }} />
      <span style={{ position: 'absolute', top: 2.5, right: 2.5, width: 2.4, height: 2.4, borderRadius: '50%', background: 'currentColor' }} />
    </span>
  )
}

export default function ArtistFlipCard({ artist, index }: { artist: Artist; index: number }) {
  const igUrl = `https://www.instagram.com/${artist.handle.replace('@', '')}/`

  return (
    <div className={s.container}>
      <div className={s.card}>
        {/* Front */}
        <Link href={`/artists/${artist.slug}`} className={s.front} style={{ textDecoration: 'none' }}>
          <Image src={artist.img} alt={artist.name} fill className={s.img} sizes="(max-width:768px) 50vw, 25vw" />
          <span style={{ position: 'absolute', top: 13, left: 15, fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.1em', color: '#ECE8E1', mixBlendMode: 'difference' }}>{pad(index + 1)}</span>
          <span style={{ position: 'absolute', bottom: 13, right: 14, fontFamily: 'var(--font-space-mono), monospace', fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(236,232,225,0.9)', background: 'rgba(10,10,10,0.5)', padding: '5px 9px' }}>Hover ↻</span>
        </Link>

        {/* Back */}
        <div className={s.back}>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 10 }}>Recent work</div>
            <Link href={`/artists/${artist.slug}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, cursor: 'pointer', textDecoration: 'none' }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{ aspectRatio: '1', backgroundColor: '#1b1b1a', backgroundImage: 'repeating-linear-gradient(135deg,rgba(236,232,225,0.05) 0 1px,transparent 1px 12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, overflow: 'hidden', fontFamily: 'var(--font-space-mono), monospace', fontSize: 8.5, letterSpacing: '0.1em', color: '#56524B' }}>
                  {artist.short} {pad(n)}
                </div>
              ))}
            </Link>
          </div>
          <div>
            <a href={igUrl} target="_blank" rel="noopener" className={s.igLink} style={{ display: 'flex', alignItems: 'center', gap: 9, textDecoration: 'none', color: '#ECE8E1', padding: '10px 0', borderTop: '1px solid rgba(236,232,225,0.14)' }}>
              <InstagramIcon />
              <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 700, fontSize: 13 }}>{artist.handle}</span>
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 9, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9d988e' }}>View on Instagram</span>
              </span>
            </a>
            <Link href={`/artists/${artist.slug}`} className={s.viewBtn} style={{ width: '100%', marginTop: 8, background: '#ECE8E1', color: '#0A0A0A', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '11px 0', display: 'block', textAlign: 'center', textDecoration: 'none' }}>
              View profile →
            </Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 700, fontSize: 22, letterSpacing: '0.01em', color: '#ECE8E1' }}>{artist.name}</div>
        <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9d988e', marginTop: 7 }}>{artist.tag}</div>
      </div>
    </div>
  )
}
