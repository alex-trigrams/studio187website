import Image from 'next/image'
import Link from 'next/link'
import { galleryImages, type GalleryImage } from '@/lib/data'

/**
 * Continuously scrolling strip of gallery work. Two rows drift in opposite
 * directions; the track is rendered twice so the loop is seamless. Pauses on
 * hover and respects prefers-reduced-motion (see globals.css).
 */
export default function GalleryMarquee({ images = galleryImages }: { images?: GalleryImage[] }) {
  if (images.length === 0) return null

  const half = Math.ceil(images.length / 2)
  const rows: Array<{ items: GalleryImage[]; reverse: boolean; duration: number }> = [
    { items: images.slice(0, half), reverse: false, duration: 120 },
    { items: images.slice(half), reverse: true, duration: 140 },
  ].filter(r => r.items.length > 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px,1.6vw,18px)' }}>
      {rows.map((row, r) => (
        <div key={r} className="marquee" style={{ ['--marquee-duration' as string]: `${row.duration}s` }}>
          <div className={`marquee-track ${row.reverse ? 'marquee-reverse' : ''}`}>
            {[0, 1].map(copy => (
              <div key={copy} className="marquee-group" aria-hidden={copy === 1}>
                {row.items.map((img, i) => (
                  <Link key={i} href="/gallery" className="gallery-thumb marquee-tile" tabIndex={copy === 1 ? -1 : undefined}>
                    <Image src={img.src} alt={copy === 0 ? img.alt : ''} fill sizes="(max-width:768px) 45vw, 22vw" style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                    {img.artist && (
                      <span style={{ position: 'absolute', bottom: 10, left: 12, fontFamily: 'var(--font-space-mono), monospace', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(236,232,225,0.75)' }}>{img.artist}</span>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
