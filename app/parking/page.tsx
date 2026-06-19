import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Parking — Studio 187 Tattoo, Maylands',
  description: 'Parking options near Studio 187 Tattoo at 187 Guildford Rd, Maylands WA.',
}

const legend = [
  { color: '#2255CC', label: 'Public parking (free)' },
  { color: '#E040FB', label: 'Private — accessible after hours' },
  { color: '#E53935', label: 'Paid parking' },
]

export default function ParkingPage() {
  return (
    <div style={{ background: '#E4E0D8', color: '#0A0A0A', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: 'clamp(72px,11vw,140px) clamp(20px,5vw,72px)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(36px,5vw,56px)' }}>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6760', marginBottom: 20 }}>187 Guildford Rd · Maylands WA</div>
          <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(44px,8vw,96px)', lineHeight: 0.9, margin: '0 0 24px', letterSpacing: '-0.01em' }}>Parking</h1>
          <p style={{ fontSize: 'clamp(15px,1.4vw,18px)', lineHeight: 1.65, color: '#4a463f', maxWidth: 560, margin: 0 }}>
            Plenty of options right on our doorstep. Street parking along Guildford Road and the surrounding side streets, and Maylands train station is a two-minute walk.
          </p>
        </div>

        {/* Legend */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(16px,2vw,28px)', marginBottom: 'clamp(28px,4vw,44px)' }}>
          {legend.map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 28, height: 10, borderRadius: 3, background: color, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.08em', color: '#4a463f' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Map image */}
        <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(10,10,10,0.18)', marginBottom: 'clamp(28px,4vw,44px)' }}>
          <Image
            src="/images/parking-map.png"
            alt="Maylands area parking map showing free, paid, and after-hours private parking near Studio 187"
            width={1200}
            height={900}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority
          />
        </div>

        {/* Disclaimer */}
        <div style={{ padding: '18px 22px', border: '1px solid rgba(10,10,10,0.18)', borderRadius: 8, marginBottom: 'clamp(36px,5vw,56px)' }}>
          <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11.5, letterSpacing: '0.06em', color: '#6b6760', lineHeight: 1.65, display: 'block' }}>
            This map is provided for information only. You must make your own investigation as to parking restrictions at any location. We take no responsibility for any fines or costs incurred in parking in these locations.
          </span>
        </div>

        {/* Back link */}
        <Link href="/" className="hover-border-dark" style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0A0A0A', textDecoration: 'none', borderBottom: '1px solid rgba(10,10,10,0.3)', paddingBottom: 4 }}>
          ← Back to home
        </Link>

      </div>
    </div>
  )
}
