import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations'
import { GithubIcon, LinkedinIcon } from './icons'

const contacts = [
  { icon: Mail, label: 'Email', value: 'bhavyaabansal22@gmail.com', href: 'mailto:bhavyaabansal22@gmail.com', color: '#2563EB' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'bhavyaa-bansal-0b5170334', href: 'https://linkedin.com/in/bhavyaa-bansal-0b5170334', color: '#0A66C2' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/bhavyaabansal22', href: 'https://github.com/bhavyaabansal22', color: '#111111' },
  { icon: MapPin, label: 'Location', value: 'Delhi, India', href: null, color: '#F97316' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--text)',
    fontSize: '0.9rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: 'var(--muted)',
    marginBottom: '8px',
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--accent)'
    e.target.style.boxShadow = '0 0 0 3px var(--accent-light)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--border)'
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" style={{ padding: '96px 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Contact
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px', marginBottom: '16px' }}>
            Let's Connect
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.7 }}>
            Open to internship opportunities, collaborations, and conversations about data analytics.
          </p>
        </motion.div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '40px', alignItems: 'start' }}>
          {/* Left — Contact Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <div style={{ padding: '36px', borderRadius: '24px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                Get in Touch
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '28px' }}>
                Whether you're looking for a data analytics intern or want to collaborate — I'd love to hear from you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {contacts.map((c) => {
                  const Icon = c.icon
                  const inner = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px', borderRadius: '14px', border: '1px solid var(--border)', backgroundColor: 'var(--card)', transition: 'all 0.2s ease' }}>
                      <div style={{ width: 38, height: 38, borderRadius: '10px', backgroundColor: c.color + '14', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} color={c.color} />
                      </div>
                      <div>
                        <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '2px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
                          {c.label}
                        </p>
                        <p style={{ fontSize: '0.84rem', fontWeight: 500, color: 'var(--text)' }}>{c.value}</p>
                      </div>
                    </div>
                  )
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                      onMouseEnter={(e) => {
                        const div = e.currentTarget.querySelector('div') as HTMLDivElement
                        if (div) { div.style.borderColor = c.color; div.style.boxShadow = `0 4px 16px ${c.color}20` }
                      }}
                      onMouseLeave={(e) => {
                        const div = e.currentTarget.querySelector('div') as HTMLDivElement
                        if (div) { div.style.borderColor = 'var(--border)'; div.style.boxShadow = 'none' }
                      }}
                    >
                      {inner}
                    </a>
                  ) : <div key={c.label}>{inner}</div>
                })}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.65, delay: 0.2, ease: 'easeOut' }}
          >
            <div style={{ padding: '40px', borderRadius: '24px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 0', gap: '16px', textAlign: 'center' as const }}
                >
                  <CheckCircle size={48} color="#059669" />
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)' }}>Message Sent!</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--muted)', maxWidth: '300px', lineHeight: 1.7 }}>
                    Thanks for reaching out. I'll get back to you within 24–48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    style={{ marginTop: '8px', padding: '10px 20px', borderRadius: '10px', border: '1px solid var(--border)', backgroundColor: 'transparent', color: 'var(--text)', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '28px' }}>
                    Send a Message
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={labelStyle} htmlFor="name">Name</label>
                      <input id="name" type="text" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                      <label style={labelStyle} htmlFor="email">Email</label>
                      <input id="email" type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={labelStyle} htmlFor="subject">Subject</label>
                    <input id="subject" type="text" required placeholder="Internship opportunity / Collaboration" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle} htmlFor="message">Message</label>
                    <textarea id="message" required rows={5} placeholder="Tell me about the opportunity or what you'd like to discuss..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{ width: '100%', padding: '14px 24px', borderRadius: '12px', border: 'none', backgroundColor: 'var(--accent)', color: '#fff', fontSize: '0.9rem', fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s ease', opacity: loading ? 0.8 : 1 }}
                    onMouseEnter={(e) => { if (!loading) { const el = e.currentTarget as HTMLButtonElement; el.style.backgroundColor = 'var(--accent-hover)'; el.style.transform = 'translateY(-1px)'; el.style.boxShadow = '0 6px 20px rgba(37,99,235,0.3)' } }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.backgroundColor = 'var(--accent)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
                  >
                    {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
