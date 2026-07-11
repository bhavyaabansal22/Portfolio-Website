import { motion } from 'framer-motion'
import { Mail, Download, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg)',
        padding: '56px 0 36px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '320px' }}>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: '1.4rem',
                color: 'var(--text)',
                letterSpacing: '-0.03em',
                marginBottom: '10px',
              }}
            >
              Bhavyaa<span style={{ color: 'var(--accent)' }}>.</span>
            </p>
            <p
              style={{
                fontSize: '0.88rem',
                lineHeight: 1.75,
                color: 'var(--muted)',
                marginBottom: '8px',
              }}
            >
              Aspiring Data Analyst · B.Tech AI-ML · GGSIPU
            </p>
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--accent)',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              "Turning Data into Decisions."
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              { icon: GithubIcon, href: 'https://github.com/bhavyaabansal22', label: 'GitHub' },
              { icon: LinkedinIcon, href: 'https://linkedin.com/in/bhavyaa-bansal-0b5170334', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:bhavyaabansal22@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3 }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  backgroundColor: 'var(--card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'var(--accent)'
                  el.style.color = 'var(--accent)'
                  el.style.backgroundColor = 'var(--accent-light)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'var(--border)'
                  el.style.color = 'var(--muted)'
                  el.style.backgroundColor = 'var(--card)'
                }}
              >
                <Icon size={18} />
              </motion.a>
            ))}

            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--card)',
                color: 'var(--muted)',
                fontSize: '0.82rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                marginLeft: '4px',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--accent)'
                el.style.color = 'var(--accent)'
                el.style.backgroundColor = 'var(--accent-light)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--muted)'
                el.style.backgroundColor = 'var(--card)'
              }}
            >
              <Download size={14} /> Resume
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--border)', marginBottom: '28px' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
            © 2026 Bhavyaa Bansal · Delhi, India ·{' '}
            <a
              href="mailto:bhavyaabansal22@gmail.com"
              style={{ color: 'var(--accent)', fontWeight: 500 }}
            >
              bhavyaabansal22@gmail.com
            </a>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              backgroundColor: 'transparent',
              color: 'var(--muted)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.color = 'var(--accent)'
              el.style.borderColor = 'var(--accent)'
              el.style.backgroundColor = 'var(--accent-light)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.color = 'var(--muted)'
              el.style.borderColor = 'var(--border)'
              el.style.backgroundColor = 'transparent'
            }}
          >
            <ArrowUp size={14} /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}
