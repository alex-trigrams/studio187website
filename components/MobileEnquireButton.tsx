'use client'

import Link from 'next/link'

export default function MobileEnquireButton() {
  return (
    <>
      <div className="mob-enquire-float" style={{
        display: 'none', position: 'fixed', bottom: 24, right: 20, zIndex: 999, pointerEvents: 'auto',
      }}>
        <Link href="/contact" style={{
          border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-space-mono), monospace',
          fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase',
          padding: '14px 26px', background: '#ECE8E1', color: '#0A0A0A',
          borderRadius: 50, boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          textDecoration: 'none', display: 'inline-block',
        }}>
          Book Now
        </Link>
      </div>
      <style>{`
        @media (max-width: 768px) { .mob-enquire-float { display: flex !important; } }
      `}</style>
    </>
  )
}
