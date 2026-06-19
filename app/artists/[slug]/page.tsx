import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { artists } from '@/lib/data'
import WorkCarousel from '@/components/WorkCarousel'

export function generateStaticParams() {
  return artists.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = artists.find(a => a.slug === slug)
  if (!artist) return {}
  return { title: `${artist.name} | Studio 187 Tattoo` }
}

function InstagramIcon() {
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: 20, height: 20, border: '1.7px solid currentColor', borderRadius: 6, flex: '0 0 auto' }}>
      <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 9, height: 9, border: '1.7px solid currentColor', borderRadius: '50%' }} />
      <span style={{ position: 'absolute', top: 3, right: 3, width: 2.6, height: 2.6, borderRadius: '50%', background: 'currentColor' }} />
    </span>
  )
}

export default async function ArtistDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artist = artists.find(a => a.slug === slug)
  if (!artist) notFound()

  const igUrl = `https://www.instagram.com/${artist.handle.replace('@', '')}/`

  return (
    <main style={{ maxWidth: 1320, margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,72px) clamp(80px,11vw,150px)' }}>
      <Link href="/artists" className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9d988e', padding: 0, marginBottom: 'clamp(40px,6vw,64px)', display: 'inline-block', textDecoration: 'none' }}>← All artists</Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#7d7970', marginBottom: 18 }}>Artist</div>
          <h1 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(40px,6.5vw,88px)', lineHeight: 0.9, margin: '0 0 18px', letterSpacing: '-0.005em' }}>{artist.name}</h1>
          <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#B6B2AA', marginBottom: 32 }}>{artist.tag}</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start', marginBottom: 36 }}>
            <a href={igUrl} target="_blank" rel="noopener" className="hover-color-white" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#ECE8E1' }}>
              <InstagramIcon />
              <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.02em' }}>{artist.handle} · Instagram</span>
            </a>
            <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, color: '#9d988e' }}>{artist.email}</span>
          </div>

          <Link href={`/contact?artist=${encodeURIComponent(artist.name)}`} className="hover-opacity" style={{ border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 34px', background: '#ECE8E1', color: '#0A0A0A', textDecoration: 'none', display: 'inline-block', borderRadius: 8 }}>Enquire with {artist.first}</Link>
        </div>

        <WorkCarousel artist={artist} />
      </div>
    </main>
  )
}
