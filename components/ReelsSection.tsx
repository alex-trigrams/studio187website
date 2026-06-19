'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { reelSeed } from '@/lib/data'

export default function ReelsSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: number) => {
    const el = trackRef.current
    if (!el) return
    const first = el.firstElementChild as HTMLElement | null
    const w = first ? first.getBoundingClientRect().width : 260
    el.scrollBy({ left: dir * (w + 24), behavior: 'smooth' })
  }

  return (
    <section style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(236,232,225,0.13)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(60px,9vw,118px) clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(36px,5vw,56px)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Straight from the studio</div>
            <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(36px,6vw,76px)', lineHeight: 0.92, margin: 0, letterSpacing: '-0.005em' }}>Reels</h2>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => scroll(-1)} className="hover-border-light" style={{ cursor: 'pointer', width: 52, height: 52, background: 'transparent', border: '1px solid rgba(236,232,225,0.3)', color: '#ECE8E1', fontSize: 16 }}>←</button>
            <button onClick={() => scroll(1)} className="hover-border-light" style={{ cursor: 'pointer', width: 52, height: 52, background: 'transparent', border: '1px solid rgba(236,232,225,0.3)', color: '#ECE8E1', fontSize: 16 }}>→</button>
          </div>
        </div>

        <div ref={trackRef} data-reels="" style={{ display: 'flex', gap: 24, overflowX: 'auto', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' as never, padding: '8px 4px 16px' }}>
          {reelSeed.map((r, i) => (
            <div key={i} className="reel-card" style={{ flex: '0 0 auto', width: 'clamp(228px,64vw,262px)', scrollSnapAlign: 'center', background: '#050505', border: '1px solid rgba(236,232,225,0.16)', borderRadius: 42, padding: 9, boxShadow: '0 30px 60px -22px rgba(0,0,0,0.85)' }}>
              <div style={{ position: 'relative', aspectRatio: '9/19.5', borderRadius: 34, overflow: 'hidden', background: '#111' }}>
                <Image src={r.img} alt={`${r.handle} reel`} fill style={{ objectFit: 'cover', filter: 'grayscale(0.2) contrast(1.04)' }} sizes="262px" />
                {/* Phone notch */}
                <div style={{ position: 'absolute', top: 11, left: '50%', transform: 'translateX(-50%)', width: 84, height: 23, background: '#000', borderRadius: 13, zIndex: 4 }} />
                {/* Gradient overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0) 22%,rgba(0,0,0,0) 56%,rgba(0,0,0,0.85) 100%)', zIndex: 2 }} />
                {/* Side action icons */}
                <div style={{ position: 'absolute', right: 12, bottom: 94, zIndex: 3, display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
                  {[0, 1, 2].map(j => <div key={j} style={{ width: 30, height: 30, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.85)' }} />)}
                </div>
                {/* Caption */}
                <div style={{ position: 'absolute', left: 14, right: 54, bottom: 16, zIndex: 3 }}>
                  <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.04em', color: '#fff', fontWeight: 700 }}>{r.handle}</div>
                  <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontSize: 12.5, lineHeight: 1.35, color: 'rgba(255,255,255,0.82)', marginTop: 5 }}>{r.caption}</div>
                </div>
                <div style={{ position: 'absolute', top: 13, right: 14, zIndex: 4, fontFamily: 'var(--font-space-mono), monospace', fontSize: 9, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>Reel</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
