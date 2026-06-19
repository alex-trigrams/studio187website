import { Suspense } from 'react'
import { hours } from '@/lib/data'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'Contact | Studio 187 Tattoo' }

const reviews = [
  { name: 'Hannah M.', text: 'Got my first piece with Oz and could not be happier. Spotless studio, zero pressure, and the linework is exactly what I asked for.' },
  { name: 'Dylan R.', text: 'Tcharna nailed the brief from the first sketch. Professional from the consult right through to the aftercare instructions.' },
  { name: 'Priya S.', text: 'Easily the best studio in Perth. Friendly crew, immaculate space, and the work genuinely speaks for itself.' },
]

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(48px,7vw,96px) clamp(20px,5vw,72px) clamp(80px,11vw,150px)' }}>
      <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 20 }}>Enquiry</div>
      <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(46px,10vw,140px)', lineHeight: 0.86, margin: '0 0 clamp(48px,7vw,90px)', letterSpacing: '-0.01em' }}>Get in touch</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(48px,6vw,96px)', alignItems: 'start' }}>
        <Suspense>
          <ContactForm />
        </Suspense>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,56px)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Studio</div>
            <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 700, fontSize: 20, lineHeight: 1.35, color: '#ECE8E1' }}>187 Guildford Road<br />Maylands, WA 6051</div>
            <a href="tel:0406084799" className="hover-border-light" style={{ display: 'inline-block', marginTop: 16, fontFamily: 'var(--font-space-mono), monospace', fontSize: 15, color: '#ECE8E1', textDecoration: 'none', borderBottom: '1px solid rgba(236,232,225,0.3)', paddingBottom: 4 }}>0406 084 799</a>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 14 }}>Hours</div>
            {hours.map(h => (
              <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '11px 0', borderBottom: '1px solid rgba(236,232,225,0.1)' }}>
                <span style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 600, fontSize: 14, color: '#ECE8E1' }}>{h.day}</span>
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, color: '#B6B2AA' }}>{h.time}</span>
              </div>
            ))}
          </div>

          <div style={{ padding: '16px 20px', border: '1px solid rgba(236,232,225,0.18)' }}>
            <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9d988e' }}>⚠ Our studio is not suitable for children</span>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 20 }}>Reviews</div>
            {reviews.map((r, i) => (
              <div key={i} style={{ padding: '18px 0', borderTop: '1px solid rgba(236,232,225,0.1)' }}>
                <div style={{ color: '#ECE8E1', fontSize: 13, letterSpacing: '0.25em', marginBottom: 10 }}>★★★★★</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: '#B6B2AA', margin: 0 }}>{r.text}</p>
                <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7d7970', marginTop: 10 }}>{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
