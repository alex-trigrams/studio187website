import Link from 'next/link'
import { storeProducts } from '@/lib/data'

export const metadata = {
  title: 'Store — Studio 187 Tattoo',
  description: 'Studio 187 merch — caps, hoodies, tees, stubby holders, stickers and gift vouchers.',
}

const productIcons: Record<string, React.ReactNode> = {
  voucher: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="13" width="40" height="22" rx="3"/>
      <path d="M16 13v22M4 22h4M4 26h4M40 22h4M40 26h4"/>
    </svg>
  ),
  hat: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 30c0-8.84 7.16-16 16-16s16 7.16 16 16"/>
      <path d="M4 30h40"/>
      <path d="M24 14V9"/>
      <path d="M20 9h8"/>
    </svg>
  ),
  'stubby-holder': (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="8" width="20" height="32" rx="4"/>
      <path d="M14 18h20M14 30h20"/>
    </svg>
  ),
  hoodie: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6c0 0-2 4-6 5L6 14v8h8v16h20V22h8v-8l-6-3c-4-1-6-5-6-5"/>
      <path d="M18 6c1.5 3 3.5 4 6 4s4.5-1 6-4"/>
      <path d="M18 6v6M30 6v6"/>
    </svg>
  ),
  shirt: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 12v8h8v22h20V20h8v-8L30 6"/>
      <path d="M18 6c1.5 3 3.5 4 6 4s4.5-1 6-4"/>
    </svg>
  ),
  stickers: (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6l3.6 10.8H38l-8.8 6.4 3.4 10.4L24 27.2l-8.6 6.4 3.4-10.4L10 16.8h10.4z"/>
      <circle cx="36" cy="34" r="6"/>
    </svg>
  ),
}

export default function StorePage() {
  return (
    <div style={{ background: '#0A0A0A', color: '#ECE8E1', minHeight: '100vh' }}>

      {/* ── Header ── */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(60px,9vw,100px) clamp(20px,5vw,72px) clamp(40px,5vw,56px)', borderBottom: '1px solid rgba(236,232,225,0.13)' }}>
        <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Studio 187</div>
        <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(52px,12vw,160px)', lineHeight: 0.88, margin: '0 0 28px', letterSpacing: '-0.01em' }}>Store</h1>
        <p style={{ fontFamily: 'var(--font-archivo), sans-serif', fontSize: 'clamp(15px,1.4vw,18px)', color: '#87837B', maxWidth: 520, lineHeight: 1.6, margin: 0 }}>
          Studio 187 merch and gift vouchers. Products dropping soon — prices and buy links coming shortly.
        </p>
      </section>

      {/* ── Products ── */}
      <section style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,72px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 'clamp(16px,2vw,28px)' }}>
          {storeProducts.map((product) => (
            <div key={product.id} style={{ background: '#111', border: '1px solid rgba(236,232,225,0.1)', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Product image placeholder */}
              <div style={{ aspectRatio: '4/3', background: '#141413', borderBottom: '1px solid rgba(236,232,225,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, backgroundImage: 'repeating-linear-gradient(135deg,rgba(236,232,225,0.03) 0 1px,transparent 1px 20px)', color: '#3a3731' }}>
                {productIcons[product.id]}
                <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3a3731' }}>Photo coming soon</span>
              </div>

              {/* Product info */}
              <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#56524B', marginBottom: 6 }}>{product.category}</div>
                    <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: '0.01em', color: '#ECE8E1' }}>{product.name}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 14, letterSpacing: '0.04em', color: product.price ? '#ECE8E1' : '#56524B', whiteSpace: 'nowrap', paddingTop: 2 }}>
                    {product.price ?? 'Price TBC'}
                  </div>
                </div>

                <p style={{ fontFamily: 'var(--font-archivo), sans-serif', fontSize: 14, lineHeight: 1.6, color: '#87837B', margin: 0, flex: 1 }}>{product.description}</p>

                {product.stripeLink ? (
                  <a href={product.stripeLink} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 24px', background: '#ECE8E1', color: '#0A0A0A', borderRadius: 8, textDecoration: 'none', marginTop: 6 }}>
                    Buy Now
                  </a>
                ) : (
                  <div style={{ display: 'block', textAlign: 'center', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 24px', background: 'rgba(236,232,225,0.06)', color: '#56524B', borderRadius: 8, border: '1px solid rgba(236,232,225,0.1)', marginTop: 6, cursor: 'default' }}>
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Voucher CTA ── */}
      <section style={{ background: '#ECE8E1', color: '#0A0A0A', borderTop: '1px solid rgba(10,10,10,0.12)' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(48px,7vw,80px) clamp(20px,5vw,72px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
          <div>
            <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6b6760', marginBottom: 14 }}>Not sure what to get?</div>
            <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(32px,5vw,60px)', lineHeight: 0.94, margin: '0 0 14px' }}>A voucher never misses</h2>
            <p style={{ fontSize: 16, color: '#4a463f', margin: 0, maxWidth: 460, lineHeight: 1.6 }}>Gift vouchers are redeemable against any tattoo at Studio 187, with any artist. No expiry date.</p>
          </div>
          <Link href="/contact" style={{ display: 'inline-block', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 40px', background: '#0A0A0A', color: '#ECE8E1', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Ask about vouchers
          </Link>
        </div>
      </section>

    </div>
  )
}
