import Image from 'next/image'
import Link from 'next/link'
import { galleryImages } from '@/lib/data'
import Reveal from '@/components/Reveal'
import GalleryMarquee from '@/components/GalleryMarquee'

const PREVIEW_COUNT = 8 // placeholder tiles shown until real work exists

export default function GallerySection() {
  const isEmpty = galleryImages.length === 0

  return (
    <section style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(236,232,225,0.13)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(60px,9vw,118px) clamp(20px,5vw,72px)' }}>

        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(36px,5vw,56px)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Straight from the studio</div>
              <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(36px,6vw,76px)', lineHeight: 0.92, margin: 0, letterSpacing: '-0.005em' }}>The Work</h2>
            </div>
            {!isEmpty && (
              <Link href="/gallery" className="hover-color-light" style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6B2AA', textDecoration: 'none', borderBottom: '1px solid rgba(236,232,225,0.3)', paddingBottom: 6 }}>
                View all work →
              </Link>
            )}
          </div>
        </Reveal>

        {isEmpty ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 'clamp(10px,1.6vw,18px)' }}>
            {Array.from({ length: PREVIEW_COUNT }).map((_, i) => (
              <div key={i} style={{ aspectRatio: i % 3 === 0 ? '3/4' : '1/1', background: '#111', border: '1px solid rgba(236,232,225,0.08)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3a3731', textAlign: 'center', padding: '0 16px' }}>Gallery dropping soon</span>
              </div>
            ))}
          </div>
        ) : (
          <Reveal>
            <GalleryMarquee />
          </Reveal>
        )}

      </div>
    </section>
  )
}
