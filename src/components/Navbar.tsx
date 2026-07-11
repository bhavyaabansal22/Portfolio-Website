import { useState, useEffect } from 'react'
import { Moon, Sun, Download, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  darkMode: boolean
  onToggle: () => void
}

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? 'var(--card)' : 'transparent',
    borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
    boxShadow: scrolled ? 'var(--shadow)' : 'none',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  }

  const innerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: scrolled ? '12px 24px' : '18px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'padding 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <>
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={navStyle}
      >
        <div style={innerStyle}>
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: '1.15rem',
              color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}
          >
            Bhavyaa<span style={{ color: 'var(--accent)' }}>.</span>
          </a>

          {/* Desktop Links */}
          <div
            className="desktop-nav"
            style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 11px',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  color: 'var(--muted)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--text)'
                  el.style.backgroundColor = 'var(--accent-light)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--muted)'
                  el.style.backgroundColor = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button
              onClick={onToggle}
              aria-label="Toggle theme"
              style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)'
                ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--muted)'
                ;(e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
              }}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="/Resume.pdf"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '10px',
                backgroundColor: 'var(--accent)',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent-hover)'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent)'
                ;(e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'
              }}
            >
              <Download size={13} />
              Resume
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              style={{
                display: 'none',
                width: 36,
                height: 36,
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--text)',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: scrolled ? 61 : 73,
              left: 12,
              right: 12,
              zIndex: 999,
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '10px 14px',
                  borderRadius: '10px',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  color: 'var(--muted)',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--text)'
                  el.style.backgroundColor = 'var(--accent-light)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = 'var(--muted)'
                  el.style.backgroundColor = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
