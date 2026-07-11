import { motion } from 'framer-motion'
import { BadgeCheck, ExternalLink } from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations'

const certs = [
  {
    name: 'Ethical Considerations for Generative AI',
    issuer: 'IBM',
    year: '2024',
    color: '#1D4ED8',
    bg: '#EFF6FF',
    url: null,
    badge: '🔷',
    description: 'Ethics, bias, fairness, and responsible AI deployment in generative AI systems.',
  },
  {
    name: 'Google Cloud Study Jams 2025',
    issuer: 'Google Cloud',
    year: '2025',
    color: '#059669',
    bg: '#F0FDF4',
    url: null,
    badge: '☁️',
    description: 'Multiple skill badges covering cloud fundamentals, data analytics, and ML on Google Cloud Platform.',
  },
  {
    name: 'Introduction to IoT & Digital Transformation',
    issuer: 'Cisco & NASSCOM',
    year: '2024',
    color: '#7C3AED',
    bg: '#F5F3FF',
    url: null,
    badge: '🌐',
    description: 'IoT concepts, digital transformation strategies, and their applications in modern industry.',
  },
  {
    name: 'AI Sprint Bootcamp',
    issuer: 'HelloPM',
    year: '2024',
    color: '#F97316',
    bg: '#FFF7ED',
    url: null,
    badge: '🚀',
    description: 'Intensive 2-week AI bootcamp covering product management for AI-powered products and systems.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '96px 0', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Certifications
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px', marginBottom: '16px' }}>
            Credentials & Learning
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.7 }}>
            Industry-recognized certifications from global technology leaders in AI, cloud, and IoT.
          </p>
        </motion.div>

        <div className="cert-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
              style={{ padding: '28px', borderRadius: '20px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', transition: 'box-shadow 0.25s ease, transform 0.25s ease', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '14px', backgroundColor: cert.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: `1px solid ${cert.color}20` }}>
                    {cert.badge}
                  </div>
                  <span style={{ padding: '3px 10px', borderRadius: '8px', backgroundColor: cert.color + '14', color: cert.color, fontSize: '0.7rem', fontWeight: 700 }}>
                    {cert.year}
                  </span>
                </div>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, color: cert.color, textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {cert.issuer}
                </p>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.45, marginBottom: '10px' }}>
                  {cert.name}
                </h3>
                <p style={{ fontSize: '0.78rem', lineHeight: 1.65, color: 'var(--muted)' }}>{cert.description}</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '8px', borderTop: '1px solid var(--border)' }}>
                <BadgeCheck size={14} color={cert.color} />
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.76rem', fontWeight: 600, color: cert.color }}
                  >
                    Verify <ExternalLink size={11} />
                  </a>
                ) : (
                  <span style={{ fontSize: '0.76rem', color: 'var(--muted)', fontStyle: 'italic' }}>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
