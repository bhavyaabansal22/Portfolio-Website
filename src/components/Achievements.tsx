import { motion } from 'framer-motion'
import { Trophy, Star, Zap, BookOpen, Medal, Award } from 'lucide-react'
import { fadeUp, viewportOnce } from '../animations'

const achievements = [
  {
    icon: Trophy,
    title: 'Delhi AI Grind Hackathon',
    subtitle: 'District Level Advancement',
    desc: 'Advanced to the district-level round representing the institution in an AI-focused hackathon competition.',
    color: '#F97316',
    bg: '#FFF7ED',
    category: 'Hackathon',
  },
  {
    icon: Medal,
    title: 'Paranox 2.0 — TechXNinjas',
    subtitle: 'Top 200 Teams Nationwide',
    desc: 'Selected among the top 200 teams out of nationwide participants in the Paranox 2.0 hackathon.',
    color: '#7C3AED',
    bg: '#F5F3FF',
    category: 'Hackathon',
  },
  {
    icon: Zap,
    title: '10+ Hackathons',
    subtitle: 'Consistent Participant',
    desc: 'Actively participated in over 10 hackathons spanning AI, data science, and general programming themes.',
    color: '#2563EB',
    bg: '#EFF6FF',
    category: 'Hackathon',
  },
  {
    icon: Star,
    title: 'JEE Mains 2024–25',
    subtitle: '95.8 Percentile · Rank 64,462',
    desc: 'Achieved 95.8 percentile with an all-India rank of 64,462, demonstrating strong mathematical and analytical aptitude.',
    color: '#059669',
    bg: '#F0FDF4',
    category: 'Academic',
  },
  {
    icon: Award,
    title: 'Class XII — 97.2%',
    subtitle: 'CBSE · PCM + Painting',
    desc: 'Scored 97.2% in CBSE Class XII with Physics, Chemistry, Mathematics, and Painting.',
    color: '#DB2777',
    bg: '#FDF2F8',
    category: 'Academic',
  },
  {
    icon: BookOpen,
    title: 'Class X — 96.8%',
    subtitle: 'CBSE · Vidya Bharati School',
    desc: 'Scored 96.8% in CBSE Class X board examinations, establishing a strong academic foundation.',
    color: '#0891B2',
    bg: '#ECFEFF',
    category: 'Academic',
  },
  {
    icon: Medal,
    title: 'National Science Olympiad',
    subtitle: 'Silver Medallist · School Level',
    desc: 'Awarded Silver Medal at the school level in the National Science Olympiad, recognizing excellence in scientific aptitude.',
    color: '#9CA3AF',
    bg: '#F9FAFB',
    category: 'Olympiad',
  },
  {
    icon: Trophy,
    title: 'International Maths Olympiad',
    subtitle: 'Gold Medallist · School Level',
    desc: 'Achieved Gold Medal at the school level in the International Maths Olympiad, demonstrating outstanding mathematical reasoning.',
    color: '#F59E0B',
    bg: '#FFFBEB',
    category: 'Olympiad',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '96px 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Achievements
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px', marginBottom: '16px' }}>
            Milestones & Recognition
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.7 }}>
            Academic excellence, competitive hackathons, and olympiad medals that mark the journey so far.
          </p>
        </motion.div>

        <div className="achieve-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {achievements.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                style={{ padding: '24px', borderRadius: '20px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', cursor: 'default', transition: 'box-shadow 0.25s ease, transform 0.25s ease', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '12px', backgroundColor: a.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} color={a.color} />
                  </div>
                  <span style={{ padding: '3px 8px', borderRadius: '6px', backgroundColor: a.color + '18', color: a.color, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' as const }}>
                    {a.category}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                    {a.title}
                  </h3>
                  <p style={{ fontSize: '0.76rem', fontWeight: 600, color: a.color, marginBottom: '8px' }}>{a.subtitle}</p>
                  <p style={{ fontSize: '0.78rem', lineHeight: 1.65, color: 'var(--muted)' }}>{a.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
