import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Mail,
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
  BadgeCheck,
  MapPin,
  Sparkles,
} from 'lucide-react'

const cards = [
  {
    icon: Briefcase,
    label: 'Current Role',
    value: 'Data Analytics Intern',
    sub: 'Oasis Infobyte · Jul 2026',
    accent: false,
  },
  {
    icon: GraduationCap,
    label: 'CGPA',
    value: '9.12 / 10',
    sub: 'B.Tech AI-ML · GGSIPU',
    accent: false,
  },
  {
    icon: Trophy,
    label: 'Hackathons',
    value: '10+',
    sub: 'District Level Finalist',
    accent: false,
  },
  {
    icon: BadgeCheck,
    label: 'Certifications',
    value: '4 Completed',
    sub: 'IBM · Google · Cisco',
    accent: false,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Delhi, India',
    sub: 'Open to Remote & Hybrid',
    accent: false,
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '96px',
        paddingBottom: '80px',
        backgroundColor: 'var(--bg)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            {/* Open to Work Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '99px', backgroundColor: 'var(--accent-light)', border: '1px solid var(--accent)', marginBottom: '28px' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
                  Open to Work
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              style={{ fontSize: '1rem', color: 'var(--muted)', fontWeight: 500, marginBottom: '8px', letterSpacing: '0.02em' }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2.6rem, 5vw, 4rem)', fontWeight: 800, color: 'var(--text)', lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '20px' }}
            >
              Bhavyaa
              <br />
              <span style={{ color: 'var(--accent)' }}>Bansal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px', marginBottom: '24px' }}
            >
              {['Aspiring Data Analyst', 'B.Tech AI-ML Student', 'Python & SQL'].map((tag) => (
                <span
                  key={tag}
                  style={{ padding: '4px 12px', borderRadius: '6px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', fontSize: '0.82rem', fontWeight: 500, color: 'var(--muted)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
              style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '12px', maxWidth: '480px' }}
            >
              Building data-driven solutions through analytics, machine learning, and visualization. Currently interning at{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>Oasis Infobyte</span> as a Data Analytics Intern.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
              style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '36px' }}
            >
              <span style={{ color: 'var(--text)', fontWeight: 500 }}>Guru Gobind Singh Indraprastha University</span> · CGPA 9.12
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}
            >
              <a
                href="#projects"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: 'var(--accent)', color: '#fff', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'var(--accent-hover)'; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = '0 8px 24px rgba(37,99,235,0.3)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'var(--accent)'; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none' }}
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/Resume.pdf"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-2px)'; el.style.boxShadow = 'var(--shadow-md)'; el.style.borderColor = 'var(--accent)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; el.style.borderColor = 'var(--border)' }}
              >
                <Download size={16} /> Resume
              </a>
              <a
                href="#contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '12px', border: '1px solid var(--border)', color: 'var(--muted)', fontWeight: 600, fontSize: '0.9rem', transition: 'all 0.25s ease' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'var(--text)'; el.style.borderColor = 'var(--text)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'var(--muted)'; el.style.borderColor = 'var(--border)' }}
              >
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right — Info Cards Grid */}
          <div className="hero-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              style={{ gridColumn: '1 / -1', borderRadius: '20px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '10px', boxShadow: 'var(--shadow)', position: 'relative' }}
            >
              <div style={{ width: 72, height: 72, borderRadius: '50%', backgroundColor: 'var(--accent-light)', border: '3px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.8rem' }}>👤</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 700, fontSize: '1rem', color: 'var(--text)' }}>Bhavyaa Bansal</p>
              </div>
              <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '99px', backgroundColor: '#dcfce7', border: '1px solid #86efac' }}>
                <Sparkles size={11} color="#16a34a" />
                <span style={{ fontSize: '0.72rem', color: '#16a34a', fontWeight: 600 }}>Available</span>
              </div>
            </motion.div>

            {cards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.94, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.07, ease: 'easeOut' }}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                  style={{ borderRadius: '16px', backgroundColor: card.accent ? 'var(--accent)' : 'var(--card)', border: card.accent ? 'none' : '1px solid var(--border)', padding: '16px', boxShadow: 'var(--shadow-sm)', cursor: 'default' }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: '8px', backgroundColor: card.accent ? 'rgba(255,255,255,0.2)' : 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                    <Icon size={16} color={card.accent ? '#fff' : 'var(--accent)'} />
                  </div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 600, color: card.accent ? 'rgba(255,255,255,0.7)' : 'var(--muted)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '4px' }}>
                    {card.label}
                  </p>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: card.accent ? '#fff' : 'var(--text)', marginBottom: '2px' }}>
                    {card.value}
                  </p>
                  <p style={{ fontSize: '0.72rem', color: card.accent ? 'rgba(255,255,255,0.65)' : 'var(--muted)' }}>
                    {card.sub}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
