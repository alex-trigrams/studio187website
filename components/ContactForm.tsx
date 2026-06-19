'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { artists, budgets, confirmPoints } from '@/lib/data'

interface FormState { name: string; contact: string; idea: string; budget: string; artist: string }
interface Errors { name?: string; contact?: string; idea?: string }

const inputStyle: React.CSSProperties = {
  width: '100%', background: 'transparent', border: 'none',
  borderBottom: '1px solid rgba(236,232,225,0.22)', padding: '13px 0',
  color: '#ECE8E1', fontFamily: 'var(--font-archivo), sans-serif', fontSize: 16, outline: 'none',
}
const labelStyle: React.CSSProperties = {
  display: 'block', fontFamily: 'var(--font-space-mono), monospace', fontSize: 11,
  letterSpacing: '0.14em', textTransform: 'uppercase', color: '#9d988e', marginBottom: 10,
}

export default function ContactForm() {
  const params = useSearchParams()
  const [form, setForm] = useState<FormState>({ name: '', contact: '', idea: '', budget: '', artist: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const a = params.get('artist')
    if (a) setForm(f => ({ ...f, artist: a }))
  }, [params])

  const field = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    setErrors(er => ({ ...er, [k]: undefined }))
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Errors = {}
    if (!form.name.trim()) errs.name = 'Please add your name'
    if (!form.contact.trim()) { errs.contact = 'Add a phone or email so we can reply' }
    else if (form.contact.includes('@')) { if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim())) errs.contact = 'That email looks incomplete' }
    else if (form.contact.replace(/[^0-9]/g, '').length < 8) { errs.contact = 'That phone number looks too short' }
    if (!form.idea.trim()) errs.idea = 'Tell us a little about the idea'
    if (Object.keys(errs).length) { setErrors(errs); return }

    setSubmitting(true)
    const isEmail = form.contact.includes('@') && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contact.trim())
    const payload: Record<string, string> = {
      _subject: 'Website Inquiry' + (form.artist ? ` — ${form.artist}` : ''),
      name: form.name, contact: form.contact, idea: form.idea,
    }
    if (form.budget) payload.budget = form.budget
    if (form.artist) payload.artist = form.artist
    if (isEmail) payload._replyto = form.contact.trim()

    try {
      const r = await fetch('https://formspree.io/f/xykaqvpd', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload),
      })
      const data = await r.json()
      if (data.ok) { setSubmitted(true); window.scrollTo(0, 0) }
      else { setErrors({ idea: data.errors?.[0]?.message || 'Submission failed — please try again.' }) }
    } catch { setErrors({ idea: 'Network error — please check your connection and try again.' }) }
    finally { setSubmitting(false) }
  }

  if (submitted) return (
    <div style={{ border: '1px solid rgba(236,232,225,0.18)', padding: 'clamp(28px,4vw,44px)', animation: 's187fade 0.5s ease' }}>
      <div style={{ color: '#ECE8E1', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: 18 }}>✓ Enquiry received</div>
      <h2 style={{ fontFamily: 'var(--font-anton), sans-serif', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 0.96, margin: '0 0 24px' }}>Thanks, {form.name}</h2>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: '#B6B2AA', margin: '0 0 28px' }}>A confirmation is on its way to <strong style={{ color: '#ECE8E1' }}>{form.contact}</strong>. Here&apos;s what it covers:</p>
      {confirmPoints.map(c => (
        <div key={c.n} style={{ display: 'flex', gap: 16, padding: '14px 0', borderTop: '1px solid rgba(236,232,225,0.1)' }}>
          <span style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, color: '#7d7970', flex: '0 0 auto', paddingTop: 3 }}>{c.n}</span>
          <div>
            <div style={{ fontFamily: 'var(--font-archivo), sans-serif', fontWeight: 600, fontSize: 15, color: '#ECE8E1' }}>{c.h}</div>
            <div style={{ fontSize: 14, lineHeight: 1.55, color: '#87837B', marginTop: 4 }}>{c.b}</div>
          </div>
        </div>
      ))}
      <button onClick={() => { setSubmitted(false); setForm({ name: '', contact: '', idea: '', budget: '', artist: '' }); setErrors({}) }} className="hover-border-light" style={{ marginTop: 28, background: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#ECE8E1', border: '1px solid rgba(236,232,225,0.3)', padding: '14px 28px', borderRadius: 8 }}>New enquiry</button>
    </div>
  )

  return (
    <form onSubmit={submit}>
      {[
        { key: 'name' as const, label: 'Name *', placeholder: 'Your name', type: 'input' },
        { key: 'contact' as const, label: 'Phone or email *', placeholder: 'So we can reply', type: 'input' },
      ].map(f => (
        <div key={f.key} style={{ marginBottom: 30 }}>
          <label style={labelStyle}>{f.label}</label>
          <input value={form[f.key]} onChange={field(f.key)} placeholder={f.placeholder} style={inputStyle} />
          {errors[f.key] && <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, color: '#C0392B', marginTop: 8 }}>{errors[f.key]}</div>}
        </div>
      ))}

      <div style={{ marginBottom: 30 }}>
        <label style={labelStyle}>Your tattoo idea *</label>
        <textarea value={form.idea} onChange={field('idea')} rows={4} placeholder="Style, placement, rough size — anything you've got" style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.5 }} />
        {errors.idea && <div style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, color: '#C0392B', marginTop: 8 }}>{errors.idea}</div>}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 30, marginBottom: 38 }}>
        <div>
          <label style={labelStyle}>Budget range</label>
          <select value={form.budget} onChange={field('budget')} style={{ ...inputStyle, WebkitAppearance: 'none', appearance: 'none', cursor: 'pointer' }}>
            <option value="">Select…</option>
            {budgets.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label style={labelStyle}>Preferred artist</label>
          <select value={form.artist} onChange={field('artist')} style={{ ...inputStyle, WebkitAppearance: 'none', appearance: 'none', cursor: 'pointer' }}>
            <option value="">No preference</option>
            {artists.map(a => <option key={a.slug} value={a.name}>{a.name}</option>)}
          </select>
        </div>
      </div>

      <button type="submit" disabled={submitting} className="hover-opacity" style={{ border: 'none', cursor: 'pointer', fontFamily: 'var(--font-space-mono), monospace', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px 40px', background: '#ECE8E1', color: '#0A0A0A', width: '100%', borderRadius: 8 }}>
        {submitting ? 'Sending…' : 'Send enquiry'}
      </button>
      <p style={{ fontFamily: 'var(--font-space-mono), monospace', fontSize: 11, letterSpacing: '0.04em', color: '#56524B', marginTop: 18, lineHeight: 1.6 }}>You&apos;ll get an instant confirmation email with deposit, aftercare &amp; what to bring.</p>
    </form>
  )
}
