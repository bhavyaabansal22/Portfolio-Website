import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../animations'

const categories = [
  {
    label: 'Programming',
    color: '#2563EB',
    bg: '#EFF6FF',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'C++', level: 60 },
      { name: 'C', level: 55 },
    ],
  },
  {
    label: 'Libraries & Frameworks',
    color: '#7C3AED',
    bg: '#F5F3FF',
    skills: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Seaborn', level: 80 },
      { name: 'Scikit-learn', level: 75 },
    ],
  },
  {
    label: 'Tools & Platforms',
    color: '#059669',
    bg: '#F0FDF4',
    skills: [
      { name: 'Excel', level: 88 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'MySQL Workbench', level: 82 },
      { name: 'Jupyter Notebook', level: 90 },
      { name: 'Streamlit', level: 72 },
    ],
  },
  {
    label: 'Data Analytics',
    color: '#F97316',
    bg: '#FFF7ED',
    skills: [
      { name: 'Exploratory Data Analysis', level: 88 },
      { name: 'Data Cleaning', level: 85 },
      { name: 'Dashboard Development', level: 82 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Machine Learning (Fundamentals)', level: 72 },
    ],
  },
  {
    label: 'Soft Skills',
    color: '#DB2777',
    bg: '#FDF2F8',
    skills: [
      { name: 'Analytical Thinking', level: 95 },
      { name: 'Problem Solving', level: 92 },
      { name: 'Communication', level: 85 },
      { name: 'Team Collaboration', level: 88 },
    ],
  },
  {
    label: 'Languages',
    color: '#0891B2',
    bg: '#ECFEFF',
    skills: [
      { name: 'Hindi', level: 100 },
      { name: 'English', level: 88 },
    ],
  },
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--text)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>{level}%</span>
      </div>
      <div style={{ height: 5, borderRadius: '99px', backgroundColor: 'var(--border)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, delay, ease: 'easeOut' }}
          style={{ height: '100%', borderRadius: '99px', backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '96px 0', backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Skills
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px', marginBottom: '16px' }}>
            Technical Arsenal
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.7 }}>
            Skills honed through academic projects, certifications, and hands-on internship work.
          </p>
        </motion.div>

        {/* Pill overview */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          style={{ marginBottom: '48px' }}
        >
          <div style={{ padding: '28px 32px', borderRadius: '20px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '16px' }}>
              All Skills at a Glance
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '8px' }}>
              {categories.flatMap((cat) =>
                cat.skills.map((s) => (
                  <motion.span
                    key={`${cat.label}-${s.name}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{ display: 'inline-block', padding: '5px 13px', borderRadius: '99px', backgroundColor: cat.bg, color: cat.color, fontSize: '0.79rem', fontWeight: 600, border: `1px solid ${cat.color}28`, cursor: 'default' }}
                  >
                    {s.name}
                  </motion.span>
                ))
              )}
            </div>
          </div>
        </motion.div>

        {/* Category cards */}
        <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: ci * 0.08, ease: 'easeOut' }}
              style={{ padding: '28px', borderRadius: '20px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: cat.color, flexShrink: 0 }} />
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>
                  {cat.label}
                </h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color={cat.color} delay={ci * 0.05 + si * 0.06} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
