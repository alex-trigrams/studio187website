import Image from 'next/image'
import Link from 'next/link'
import { galleryImages } from '@/lib/data'

export const metadata = {
  title: 'Work — Studio 187 Tattoo',
  description: 'Portfolio of tattoo work by the artists at Studio 187, Maylands WA.',
}

const PLACEHOLDER_COUNT = 16

export default function GalleryPage() {
  const isEmpty = galleryImages.length === 0

  return (
    <div style={{ background: '#0A0A0A', color: '#ECE8E1', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(60px,9vw,100px) clamp(20px,5vw,72px) clamp(40px,5vw,56px)', borderBottom: '1px solid rgba(236,232,225,0.13)' }}>
        <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Studio 187</div>
        <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(52px,12vw,160px)', lineHeight: 0.88, margin: '0 0 28px', letterSpacing: '-0.01em' }}>The Work</h1>
        <p style={{ fontFamily: 'var(--font-archivo), sans-serif', fontSize: 'clamp(15px,1.4vw,18px)', color: '#87837B', maxWidth: 520, lineHeight: 1.6, margin: 0 }}>
          Tattoos by the artists at Studio 187, Maylands WA. Fine line, traditional, realism, blackwork and everything in between.
        </p>
      </section>

      {/* ── Grid ── */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,72px)' }}>
        {isEmpty ? (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 'clamp(10px,1.6vw,18px)', marginBottom: 56 }}>
              {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <div key={i} style={{ aspectRatio: i % 5 === 0 ? '3/4' : '1/1', background: '#111', border: '1px solid rgba(236,232,225,0.08)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3a3731', textAlign: 'center', padding: '0 16px' }}>Gallery dropping soon</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 40px', background: '#ECE8E1', color: '#0A0A0A', borderRadius: 8, textDecoration: 'none' }}>
                Enquire about a tattoo
              </Link>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 'clamp(10px,1.6vw,18px)', marginBottom: 56 }}>
              {galleryImages.map((img, i) => (
                <div key={i} style={{ position: 'relative', aspectRatio: i % 5 === 0 ? '3/4' : '1/1', overflow: 'hidden', borderRadius: 6, background: '#111', border: '1px solid rgba(236,232,225,0.08)' }} className="gallery-thumb">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                  {img.artist && (
                    <span style={{ position: 'absolute', bottom: 10, left: 12, fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(236,232,225,0.75)' }}>{img.artist}</span>
                  )}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/contact" style={{ display: 'inline-block', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 40px', background: '#ECE8E1', color: '#0A0A0A', borderRadius: 8, textDecoration: 'none' }}>
                Book your piece
              </Link>
            </div>
          </>
        )}
      </section>

      <style>{`
        .gallery-thumb:hover img { transform: scale(1.04); }
      `}</style>
    </div>
  )
}
