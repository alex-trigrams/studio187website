import { artists } from '@/lib/data'
import ArtistFlipCard from '@/components/ArtistFlipCard'

export const metadata = { title: 'Artists | Studio 187 Tattoo' }

export default function ArtistsPage() {
  return (
    <main style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(56px,8vw,110px) clamp(20px,5vw,72px) clamp(80px,11vw,150px)' }}>
      <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 20 }}>Nine resident artists</div>
      <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(48px,11vw,150px)', lineHeight: 0.86, margin: '0 0 clamp(44px,6vw,80px)', letterSpacing: '-0.01em' }}>Artists</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(248px,1fr))', gap: 'clamp(18px,2.6vw,38px)' }}>
        {artists.map((a, i) => (
          <ArtistFlipCard key={a.slug} artist={a} index={i} />
        ))}
      </div>
    </main>
  )
}
