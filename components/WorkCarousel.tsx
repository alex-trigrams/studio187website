'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Artist } from '@/lib/data'

function pad(n: number) { return String(n).padStart(2, '0') }

export default function WorkCarousel({ artist }: { artist: Artist }) {
  const [idx, setIdx] = useState(0)
  const total = artist.work

  const tiles = [
    { img: artist.img, placeholder: false, label: '' },
    ...Array.from({ length: total - 1 }, (_, i) => ({ img: '', placeholder: true, label: `${artist.short} — ADD WORK ${pad(i + 1)}` })),
  ]

  return (
    <div>
      <div style={{ overflow: 'hidden', border: '1px solid rgba(236,232,225,0.13)', borderRadius: 10 }}>
        <div style={{ display: 'flex', transition: 'transform 0.5s cubic-bezier(0.7,0,0.2,1)', transform: `translateX(-${idx * 100}%)` }}>
          {tiles.map((t, i) => (
            <div key={i} style={{ flex: '0 0 100%', position: 'relative', aspectRatio: '3/4', backgroundColor: '#141413', backgroundImage: 'repeating-linear-gradient(135deg,rgba(236,232,225,0.045) 0 1px,transparent 1px 18px)', overflow: 'hidden' }}>
              {t.img && <Image src={t.img} alt={artist.name} fill style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.03)' }} sizes="(max-width:768px) 100vw, 50vw" />}
              {t.placeholder && (
                <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', color: '#56524B', textAlign: 'center', padding: '0 24px' }}>{t.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.1em', color: '#9d988e' }}>{pad(idx + 1)} / {pad(total)}</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => setIdx(i => (i - 1 + total) % total)} className="hover-border-light" style={{ cursor: 'pointer', width: 48, height: 48, background: 'transparent', border: '1px solid rgba(236,232,225,0.3)', color: '#ECE8E1', fontSize: 15 }}>←</button>
          <button onClick={() => setIdx(i => (i + 1) % total)} className="hover-border-light" style={{ cursor: 'pointer', width: 48, height: 48, background: 'transparent', border: '1px solid rgba(236,232,225,0.3)', color: '#ECE8E1', fontSize: 15 }}>→</button>
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: '#87837B', margin: '28px 0 0', maxWidth: 520 }}>
        Selected work by {artist.first}. Drop their real portfolio images here for handoff — pulled in directly, no outbound link required.
      </p>
    </div>
  )
}
