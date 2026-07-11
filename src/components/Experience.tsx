import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations'

const experiences = [
  {
    role: 'Data Analytics Intern',
    company: 'Oasis Infobyte',
    duration: 'July 2026 – Present',
    location: 'Remote',
    type: 'Internship',
    description:
      'Working as a Data Analytics Intern, applying data analysis techniques to real-world business problems. Responsibilities include data cleaning, exploratory data analysis, and building analytical reports using Python and related tools.',
    responsibilities: [
      'Perform data cleaning and preprocessing on raw business datasets',
      'Conduct exploratory data analysis (EDA) to identify trends and patterns',
      'Build visualizations and reports to communicate data-driven insights',
      'Apply Python libraries (Pandas, NumPy, Matplotlib) to automate analysis workflows',
      'Collaborate with team to support data-driven decision making',
    ],
    skills: ['Python', 'Pandas', 'NumPy', 'EDA', 'Data Visualization', 'Excel'],
    current: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '96px 0', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Experience
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px' }}>
            Work Experience
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '860px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.65, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-lg)' }}
              style={{ padding: '36px', borderRadius: '24px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', transition: 'box-shadow 0.25s ease, transform 0.25s ease' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' as const, marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '14px', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Briefcase size={24} color="var(--accent)" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '6px' }}>
                      {exp.company}
                    </p>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' as const }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--muted)' }}>
                        <Calendar size={13} /> {exp.duration}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--muted)' }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                  {exp.current && (
                    <span style={{ padding: '5px 12px', borderRadius: '99px', backgroundColor: '#dcfce7', color: '#16a34a', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', border: '1px solid #86efac' }}>
                      ● Current
                    </span>
                  )}
                  <span style={{ padding: '5px 12px', borderRadius: '99px', backgroundColor: 'var(--accent-light)', color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 600 }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '20px' }}>
                {exp.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '12px' }}>
                  Key Responsibilities
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.responsibilities.map((r) => (
                    <li key={r} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: 'var(--accent)', flexShrink: 0, marginTop: '8px' }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const }}>
                {exp.skills.map((s) => (
                  <span key={s} style={{ padding: '4px 12px', borderRadius: '8px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', fontSize: '0.78rem', fontWeight: 500, color: 'var(--muted)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
