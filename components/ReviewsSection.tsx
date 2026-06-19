'use client'

import { useState, useEffect } from 'react'
import { reviews } from '@/lib/data'

function pad(n: number) { return String(n).padStart(2, '0') }

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0)
  const n = reviews.length

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % n), 6000)
    return () => clearInterval(t)
  }, [n])

  const prev = () => setIdx(i => (i - 1 + n) % n)
  const next = () => setIdx(i => (i + 1) % n)

  return (
    <section style={{ background: '#ECE8E1', color: '#0A0A0A', borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vw,150px) clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginBottom: 'clamp(40px,6vw,72px)' }}>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6760' }}>What our clients say</div>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.1em', color: '#6b6760' }}>Google · {pad(idx + 1)} / {pad(n)}</div>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', transition: 'transform 0.55s cubic-bezier(0.7,0,0.2,1)', transform: `translateX(-${idx * 100}%)` }}>
            {reviews.map((r, i) => (
              <div key={i} style={{ flex: '0 0 100%', paddingRight: 'clamp(20px,5vw,80px)' }}>
                <div style={{ color: '#1A1A1A', fontSize: 18, letterSpacing: '0.3em', marginBottom: 24 }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 500, fontSize: 'clamp(22px,3.2vw,40px)', lineHeight: 1.28, margin: 0, color: '#0A0A0A', maxWidth: 980 }}>{r.text}</p>
                <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6b6760', marginTop: 28 }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 'clamp(36px,5vw,56px)' }}>
          <button onClick={prev} className="hover-border-dark" style={{ cursor: 'pointer', width: 52, height: 52, background: 'transparent', border: '1px solid rgba(10,10,10,0.25)', color: '#0A0A0A', fontSize: 16 }}>←</button>
          <button onClick={next} className="hover-border-dark" style={{ cursor: 'pointer', width: 52, height: 52, background: 'transparent', border: '1px solid rgba(10,10,10,0.25)', color: '#0A0A0A', fontSize: 16 }}>→</button>
        </div>
      </div>
    </section>
  )
}
