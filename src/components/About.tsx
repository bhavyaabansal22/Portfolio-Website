import { motion } from 'framer-motion'
import { BarChart2, Brain, Database, Target } from 'lucide-react'
import { fadeUp, viewportOnce, stagger } from '../animations'

const highlights = [
  {
    icon: BarChart2,
    title: 'Data Analytics',
    desc: 'EDA, dashboard development, and data cleaning to extract business insights.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    desc: 'Building predictive models using Scikit-learn with hands-on project experience.',
  },
  {
    icon: Database,
    title: 'SQL & Python',
    desc: 'Querying databases, automating data pipelines, and building analysis workflows.',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    desc: 'Analytical mindset developed through 10+ hackathons and academic projects.',
  },
]

const stats = [
  { value: '9.12', label: 'CGPA', sub: 'B.Tech AI-ML' },
  { value: '4', label: 'Projects', sub: 'Data & ML' },
  { value: '10+', label: 'Hackathons', sub: 'Participated' },
  { value: '4', label: 'Certifications', sub: 'Industry' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '96px 0',
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            About Me
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px', marginBottom: '16px' }}>
            Turning Data into Decisions
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--muted)', maxWidth: '560px' }}>
            A focused undergraduate driven by curiosity about data and its potential to solve real problems.
          </p>
        </motion.div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Left — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={stagger(0.1)}
          >
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '20px' }}>
              I'm <span style={{ color: 'var(--text)', fontWeight: 600 }}>Bhavyaa Bansal</span>, a
              B.Tech student specializing in{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>Artificial Intelligence & Machine Learning</span>{' '}
              at the University School of Automation & Robotics, GGSIPU. My core interest lies in the intersection of data analytics and decision-making.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '20px' }}>
              I bring hands-on experience in{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>Python, SQL, Excel, and Power BI</span>,
              applied through academic projects spanning EDA, dashboard development, and ML model building. Currently working as a{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>Data Analytics Intern at Oasis Infobyte</span>, applying analytical skills in a real-world environment.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--muted)' }}>
              My academic journey — highlighted by a{' '}
              <span style={{ color: 'var(--text)', fontWeight: 600 }}>CGPA of 9.12</span> and a JEE
              Mains percentile of 95.8 — reflects my commitment to excellence. I'm actively seeking internship opportunities to grow at the intersection of data, technology, and business.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '36px', padding: '28px', borderRadius: '20px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              {stats.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>
                    {s.value}
                  </p>
                  <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text)', marginTop: '2px' }}>{s.label}</p>
                  <p style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '1px' }}>{s.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={h.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={stagger(0.1 + i * 0.08)}
                  whileHover={{ y: -4 }}
                  style={{ padding: '24px', borderRadius: '18px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', cursor: 'default' }}
                >
                  <div style={{ width: 40, height: 40, borderRadius: '10px', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Icon size={20} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                    {h.title}
                  </h3>
                  <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--muted)' }}>{h.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
