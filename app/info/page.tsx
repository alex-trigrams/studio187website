import Link from 'next/link'
import { aftercareItems, depositItems, hours } from '@/lib/data'

export const metadata = {
  title: 'Info — Studio 187 Tattoo',
  description: 'Aftercare guide, booking & deposit terms, studio hours and everything you need to know before your tattoo at Studio 187.',
}

function InfoBlock({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingTop: 'clamp(40px,5vw,60px)', borderTop: '1px solid rgba(236,232,225,0.1)' }}>
      <div style={{ display: 'flex', gap: 'clamp(20px,3vw,48px)', alignItems: 'flex-start' }}>
        <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.14em', color: '#3a3731', flex: '0 0 auto', paddingTop: 6 }}>{number}</span>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,52px)', lineHeight: 0.94, margin: '0 0 clamp(20px,3vw,32px)', letterSpacing: '-0.005em' }}>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

function ListItem({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: '1px solid rgba(236,232,225,0.08)' }}>
      <span style={{ color: '#56524B', fontFamily: 'var(--font-space-mono), monospace', fontSize: 14, flex: '0 0 auto', paddingTop: 2 }}>—</span>
      <span style={{ fontSize: 16, lineHeight: 1.6, color: '#B6B2AA' }}>{text}</span>
    </div>
  )
}

export default function InfoPage() {
  return (
    <div style={{ background: '#0A0A0A', color: '#ECE8E1', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(60px,9vw,100px) clamp(20px,5vw,72px) clamp(40px,5vw,56px)', borderBottom: '1px solid rgba(236,232,225,0.13)' }}>
        <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Studio 187</div>
        <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(52px,12vw,160px)', lineHeight: 0.88, margin: '0 0 28px', letterSpacing: '-0.01em' }}>Info</h1>
        <p style={{ fontFamily: 'var(--font-archivo), sans-serif', fontSize: 'clamp(15px,1.4vw,18px)', color: '#87837B', maxWidth: 560, lineHeight: 1.6, margin: 0 }}>
          Everything you need to know before, during and after your tattoo — aftercare, bookings, deposits, and studio details.
        </p>
      </section>

      {/* ── Content ── */}
      <section style={{ maxWidth: 860, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,72px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,60px)' }}>

        {/* Aftercare */}
        <InfoBlock number="01" title="Aftercare">
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#87837B', margin: '0 0 20px', maxWidth: 560 }}>
            Your tattoo is a fresh wound — how you look after it in the first couple of weeks makes a real difference to how it heals and how it looks long term.
          </p>
          <div>
            {aftercareItems.map((item, i) => <ListItem key={i} text={item} />)}
          </div>
          <div style={{ marginTop: 24, padding: '16px 20px', border: '1px solid rgba(236,232,225,0.1)', borderRadius: 8 }}>
            <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.08em', color: '#7d7970' }}>Still not sure? Message your artist directly — they&apos;re happy to help.</span>
          </div>
        </InfoBlock>

        {/* Deposits & T&Cs */}
        <InfoBlock number="02" title="Deposits & Booking">
          <p style={{ fontSize: 16, lineHeight: 1.7, color: '#87837B', margin: '0 0 20px', maxWidth: 560 }}>
            A deposit is required to lock in your appointment. Here&apos;s how it works.
          </p>
          <div>
            {depositItems.map((item, i) => <ListItem key={i} text={item} />)}
          </div>
        </InfoBlock>

        {/* What to bring */}
        <InfoBlock number="03" title="What to Bring">
          <div>
            {[
              'Valid photo ID — you must be 18 or over, no exceptions.',
              'Any reference images or inspiration for your design.',
              'Eat a proper meal before your session — your blood sugar will thank you.',
              'Wear clothing that gives comfortable access to the placement.',
              'A water bottle and something to snack on for longer sessions.',
            ].map((item, i) => <ListItem key={i} text={item} />)}
          </div>
        </InfoBlock>

        {/* Studio info */}
        <InfoBlock number="04" title="Studio">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'clamp(32px,4vw,56px)' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#56524B', marginBottom: 16 }}>Hours</div>
              {hours.map(h => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '11px 0', borderBottom: '1px solid rgba(236,232,225,0.08)' }}>
                  <span style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 600, fontSize: 15, color: '#ECE8E1' }}>{h.day}</span>
                  <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, color: '#87837B' }}>{h.time}</span>
                </div>
              ))}
              <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.05em', color: '#56524B', marginTop: 14, lineHeight: 1.6 }}>Public holidays — by artist appointment</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#56524B', marginBottom: 12 }}>Address</div>
                <div style={{ fontSize: 16, lineHeight: 1.7, color: '#B6B2AA' }}>187 Guildford Road<br />Maylands, WA 6051</div>
                <Link href="/parking" style={{ display: 'inline-block', marginTop: 10, fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7d7970', textDecoration: 'none', borderBottom: '1px solid rgba(236,232,225,0.2)', paddingBottom: 2 }}>Parking map →</Link>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#56524B', marginBottom: 12 }}>Phone</div>
                <a href="tel:0406084799" style={{ fontSize: 16, color: '#B6B2AA', textDecoration: 'none' }}>0406 084 799</a>
              </div>
              <div style={{ padding: '14px 18px', border: '1px solid rgba(236,232,225,0.1)', borderRadius: 8 }}>
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.08em', color: '#7d7970' }}>Our studio is not suitable for children.</span>
              </div>
            </div>
          </div>
        </InfoBlock>

      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: '1px solid rgba(236,232,225,0.13)', maxWidth: 1320, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,72px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#56524B', marginBottom: 12 }}>Ready to go?</div>
          <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(32px,5vw,60px)', lineHeight: 0.94, margin: 0 }}>Book your session</h2>
        </div>
        <Link href="/contact" style={{ display: 'inline-block', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 40px', background: '#ECE8E1', color: '#0A0A0A', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Get in touch
        </Link>
      </section>

    </div>
  )
}
