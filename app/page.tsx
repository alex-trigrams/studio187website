import Image from 'next/image'
import Link from 'next/link'
import { artists, hours, aftercareItems, depositItems } from '@/lib/data'
import ReelsSection from '@/components/ReelsSection'
import ReviewsSection from '@/components/ReviewsSection'

function pad(n: number) { return String(n).padStart(2, '0') }

export default function HomePage() {
  return (
    <div style={{ background: '#0A0A0A', color: '#ECE8E1', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: 'clamp(560px,86vh,920px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderBottom: '1px solid rgba(236,232,225,0.13)', overflow: 'hidden' }}>
        <Image src="/images/hero.jpg" alt="Studio 187 Tattoo, 187 Guildford Road Maylands" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center 38%', filter: 'grayscale(0.55) contrast(1.04) brightness(0.92)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(10,10,10,0.3) 0%,rgba(10,10,10,0.05) 32%,rgba(10,10,10,0.55) 68%,rgba(10,10,10,0.95) 100%)' }} />
        <div style={{ position: 'relative', width: '100%', maxWidth: 1320, margin: '0 auto', padding: '0 clamp(20px,5vw,72px) clamp(44px,6vw,72px)' }}>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b6b2aa', marginBottom: 'clamp(18px,2.5vw,26px)' }}>187 Guildford Rd · Maylands · Western Australia</div>
          <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(56px,14vw,200px)', lineHeight: 0.84, letterSpacing: '-0.01em', margin: 0, color: '#ECE8E1' }}>Studio 187</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'clamp(16px,2.5vw,32px)', marginTop: 'clamp(26px,4vw,40px)' }}>
            <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, letterSpacing: '0.08em', color: '#cfcbc2' }}>Open Tue–Sat 10–5 · Mon &amp; Sun by appt</span>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#56524B' }} />
            <a href="tel:0406084799" className="hover-border-light" style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, letterSpacing: '0.06em', color: '#cfcbc2', textDecoration: 'none', borderBottom: '1px solid rgba(236,232,225,0.25)', paddingBottom: 3 }}>0406 084 799</a>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#56524B' }} />
            <Link href="/artists" className="nav-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cfcbc2', textDecoration: 'none' }}>Meet the artists →</Link>
          </div>
        </div>
      </section>

      {/* ── Reels ── */}
      <ReelsSection />

      {/* ── Reviews ── */}
      <ReviewsSection />

      {/* ── Artists preview ── */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vw,150px) clamp(20px,5vw,72px)', borderBottom: '1px solid rgba(236,232,225,0.13)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(40px,6vw,68px)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 20 }}>Meet the team</div>
            <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(36px,6vw,76px)', lineHeight: 0.92, margin: 0, letterSpacing: '-0.005em' }}>Artists</h2>
          </div>
          <Link href="/artists" className="hover-color-light" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B6B2AA', padding: 0, borderBottom: '1px solid rgba(236,232,225,0.3)', paddingBottom: 6, textDecoration: 'none' }}>All artists →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(248px,1fr))', gap: 'clamp(16px,2.4vw,34px)' }}>
          {artists.slice(0, 6).map((a, i) => (
            <Link key={a.slug} href={`/artists/${a.slug}`} style={{ textAlign: 'left', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 14, textDecoration: 'none' }}>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', background: '#141413', border: '1px solid rgba(236,232,225,0.1)', borderRadius: 10 }} className="artist-card-wrap">
                <Image src={a.img} alt={a.name} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.03)' }} />
                <span style={{ position: 'absolute', top: 12, left: 14, fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.1em', color: '#ECE8E1', mixBlendMode: 'difference' }}>{pad(i + 1)}</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 700, fontSize: 19, letterSpacing: '0.01em', color: '#ECE8E1' }}>{a.name}</div>
                <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9d988e', marginTop: 5 }}>{a.tag}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Private room ── */}
      <section style={{ background: '#ECE8E1', color: '#0A0A0A', borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vw,150px) clamp(20px,5vw,72px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,5vw,80px)', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6760', marginBottom: 22 }}>A welcoming space</div>
              <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(40px,7vw,92px)', lineHeight: 0.9, margin: '0 0 28px', letterSpacing: '-0.01em', color: '#0A0A0A' }}>There&apos;s a<br />private room</h2>
              <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', lineHeight: 1.6, color: '#4a463f', maxWidth: 480, margin: '0 0 20px' }}>Want a quieter session? Our private room is yours on request — same artists, same care, away from the main floor. Ideal for first tattoos, bigger pieces, or anyone who just wants a little more space.</p>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#6b6760', maxWidth: 480, margin: '0 0 32px' }}>Studio 187 is a welcoming, community-driven shop. Walk-ins are family, nerves are normal, and everyone gets looked after.</p>
              <Link href="/contact" className="hover-opacity" style={{ border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 34px', background: '#0A0A0A', color: '#ECE8E1', borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}>Ask about the private room</Link>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/5', backgroundColor: '#ddd9d0', backgroundImage: 'repeating-linear-gradient(135deg,rgba(10,10,10,0.05) 0 1px,transparent 1px 18px)', border: '1px solid rgba(10,10,10,0.14)' }}>
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9b958a', textAlign: 'center', padding: '0 24px' }}>Private room photo</span>
              <span style={{ position: 'absolute', top: 14, left: 15, fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0A0A0A', background: 'rgba(236,232,225,0.7)', padding: '6px 10px' }}>Private room</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Find us ── */}
      <section id="where-we-are" style={{ background: '#E4E0D8', color: '#0A0A0A', borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vw,150px) clamp(20px,5vw,72px)' }}>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6760', marginBottom: 'clamp(40px,6vw,64px)' }}>Find us</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(30px,4.4vw,52px)', lineHeight: 0.96, margin: '0 0 28px', color: '#0A0A0A' }}>187 Guildford Rd<br />Maylands WA</h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: '#4a463f', maxWidth: 420, margin: '0 0 28px' }}>Street parking along Guildford Road and the surrounding side streets. Two minutes from Maylands train station.</p>
              <Link href="/parking" className="hover-border-dark" style={{ display: 'inline-block', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: 3, marginBottom: 28 }}>Parking map →</Link>
              <a href="tel:0406084799" className="hover-border-dark" style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 15, letterSpacing: '0.06em', color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: 4 }}>0406 084 799</a>
              <div style={{ marginTop: 36, padding: '16px 20px', border: '1px solid rgba(10,10,10,0.22)', display: 'inline-block' }}>
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11.5, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b6760' }}>⚠ Our studio is not suitable for children</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6b6760', marginBottom: 18 }}>Hours</div>
              {hours.map(h => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', gap: 20, padding: '13px 0', borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
                  <span style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 600, fontSize: 15, color: '#0A0A0A' }}>{h.day}</span>
                  <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, color: '#4a463f' }}>{h.time}</span>
                </div>
              ))}
              <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.05em', color: '#6b6760', marginTop: 16, lineHeight: 1.6 }}>Public holidays — by artist appointment</div>
            </div>
          </div>

          {/* ── Map ── */}
          <div style={{ marginTop: 'clamp(48px,6vw,72px)', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(10,10,10,0.18)' }}>
            <iframe
              src="https://maps.google.com/maps?q=187+Guildford+Rd,+Maylands+WA+6051,+Australia&output=embed&z=15"
              width="100%"
              height="440"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio 187 — 187 Guildford Rd, Maylands WA"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: 'relative', borderBottom: '1px solid rgba(236,232,225,0.13)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#121211', backgroundImage: 'repeating-linear-gradient(135deg,rgba(236,232,225,0.04) 0 1px,transparent 1px 18px)' }} />
        <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto', padding: 'clamp(72px,12vw,140px) clamp(20px,5vw,72px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(40px,8vw,96px)', lineHeight: 0.9, margin: '0 0 18px', letterSpacing: '-0.01em' }}>Got an idea?</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#B6B2AA', margin: '0 auto 44px', maxWidth: 440 }}>Drop us the basics and we&apos;ll take it from there.</p>
          <Link href="/contact" className="hover-opacity" style={{ border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px 48px', background: '#ECE8E1', color: '#0A0A0A', borderRadius: 8, textDecoration: 'none', display: 'inline-block' }}>Get in touch</Link>
        </div>
      </section>

      {/* ── Aftercare & T&Cs ── */}
      <section style={{ background: '#E4E0D8', color: '#0A0A0A', borderBottom: '1px solid rgba(10,10,10,0.12)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(72px,11vw,140px) clamp(20px,5vw,72px)' }}>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6760', marginBottom: 'clamp(36px,5vw,56px)' }}>Good to know</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,90px)' }}>
            {[['Aftercare', aftercareItems], ['Deposits & T&Cs', depositItems]].map(([title, items]) => (
              <div key={title as string}>
                <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,48px)', lineHeight: 0.96, margin: '0 0 14px', color: '#0A0A0A' }}>{title as string}</h2>
                {(items as string[]).map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, padding: '15px 0', borderTop: '1px solid rgba(10,10,10,0.12)' }}>
                    <span style={{ color: '#9b958a', fontFamily: 'var(--font-space-mono), monospace', fontSize: 14, flex: '0 0 auto' }}>—</span>
                    <span style={{ fontSize: 15, lineHeight: 1.55, color: '#3f3b34' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
