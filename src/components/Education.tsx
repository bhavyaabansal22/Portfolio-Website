import { motion } from 'framer-motion'
import { GraduationCap, Award, Star } from 'lucide-react'
import { fadeUp, slideLeft, viewportOnce, stagger } from '../animations'

const entries = [
  {
    period: '2024 – Present',
    institution: 'University School of Automation & Robotics',
    affiliation: 'GGSIPU, Surajmal Vihar, East Delhi',
    degree: 'B.Tech in Computer Science (AI-ML)',
    highlight: 'CGPA: 9.12',
    details: [
      'Specialization in Artificial Intelligence & Machine Learning',
      'Core subjects: Data Structures, ML, Python, DBMS, Statistics',
    ],
    color: '#2563EB',
    icon: GraduationCap,
    current: true,
  },
  {
    period: '2022 – 2024',
    institution: 'Khaitan Public School',
    affiliation: 'Rajendra Nagar, Sahibabad, U.P.',
    degree: 'CBSE Class XII (PCM + Painting)',
    highlight: '97.2%',
    details: [
      'JEE Mains 2024–25 Percentile: 95.8 | Rank: 64,462',
      'Perfect blend of sciences and fine arts',
    ],
    color: '#7C3AED',
    icon: Star,
    current: false,
  },
  {
    period: '2018 – 2021',
    institution: 'Vidya Bharati School',
    affiliation: 'Surya Nagar, Ghaziabad, U.P.',
    degree: 'CBSE Class X',
    highlight: '96.8%',
    details: [
      'National Science Olympiad (School Level): Silver Medallist',
      'International Maths Olympiad (School Level): Gold Medallist',
    ],
    color: '#059669',
    icon: Award,
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '96px 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Education
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px' }}>
            Academic Journey
          </h2>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '780px' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '16px', top: '32px', bottom: '32px', width: '2px', backgroundColor: 'var(--border)', borderRadius: '2px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {entries.map((entry, i) => {
              const Icon = entry.icon
              return (
                <motion.div
                  key={entry.institution}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={stagger(i * 0.15)}
                  style={{ position: 'relative', paddingLeft: '56px' }}
                  className="edu-content"
                >
                  <div style={{ position: 'absolute', left: 0, top: '24px', width: 32, height: 32, borderRadius: '50%', backgroundColor: entry.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 0 4px var(--card), 0 0 0 6px ${entry.color}33`, zIndex: 1 }}>
                    <Icon size={14} color="#fff" />
                  </div>

                  <motion.div
                    whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
                    style={{ padding: '28px 32px', borderRadius: '20px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', transition: 'box-shadow 0.25s ease, transform 0.25s ease' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' as const, marginBottom: '12px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)' }}>
                            {entry.institution}
                          </h3>
                          {entry.current && (
                            <span style={{ padding: '2px 8px', borderRadius: '99px', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' as const, flexShrink: 0 }}>
                              Current
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{entry.affiliation}</p>
                      </div>
                      <div style={{ textAlign: 'right' as const, flexShrink: 0 }}>
                        <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '8px', backgroundColor: entry.color + '18', color: entry.color, fontSize: '0.88rem', fontWeight: 800, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {entry.highlight}
                        </span>
                        <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>{entry.period}</p>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>{entry.degree}</p>

                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {entry.details.map((d) => (
                        <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: entry.color, flexShrink: 0, marginTop: '7px' }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
