import { motion } from 'framer-motion'
import { ExternalLink, BarChart2, Database, Table2, Activity } from 'lucide-react'
import { GithubIcon } from './icons'
import { fadeUp, viewportOnce } from '../animations'

const projects = [
  {
    title: 'Diwali Sales Analysis',
    longDesc: 'Performed end-to-end EDA on a Diwali retail dataset — handling missing values, outliers, and feature engineering — to surface which customer segments, states, and product categories drove peak-season revenue.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    icon: BarChart2,
    color: '#F97316',
    bgColor: '#FFF7ED',
    image: '/diwali.jpg',
    learnings: ['EDA methodology', 'Business insight extraction', 'Data visualization best practices'],
    github: 'https://github.com/bhavyaabansal22/Python-Diwali-Sales-Analysis',
  },
  {
    title: 'Online Bookstore SQL Analysis',
    longDesc: 'Built a comprehensive SQL analysis suite using JOINs, aggregate functions, window functions, and subqueries to answer business-critical questions about a fictional online bookstore database.',
    tech: ['MySQL', 'SQL Joins', 'Aggregate Functions', 'Subqueries'],
    icon: Database,
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    image: '/bookstore.jpg',
    learnings: ['Complex SQL queries', 'Relational database analysis', 'Revenue trend identification'],
    github: 'https://github.com/bhavyaabansal22/Online_bookstore_Customer_Analysis_sql',
  },
  {
    title: 'Vrinda Store Sales Dashboard',
    longDesc: 'Transformed raw transactional data into an executive-ready Excel dashboard with dynamic slicers, allowing stakeholders to drill down by region, channel, category, and time period.',
    tech: ['Microsoft Excel', 'Pivot Tables', 'Pivot Charts', 'Data Cleaning'],
    icon: Table2,
    color: '#059669',
    bgColor: '#F0FDF4',
    image: '/vindha.jpg',
    learnings: ['Dashboard design principles', 'Data storytelling', 'Excel advanced features'],
    github: 'https://github.com/bhavyaabansal22/Vrinda-Store-2024-Data-Analysis-Excel',
  },
  {
    title: 'Insurance Premium Prediction',
    longDesc: 'End-to-end ML pipeline: EDA → feature engineering → model selection → hyperparameter tuning → deployment via a Streamlit web app for real-time insurance premium prediction.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Streamlit'],
    icon: Activity,
    color: '#2563EB',
    bgColor: '#EFF6FF',
    image: '/insurernce.jpg',
    learnings: ['ML pipeline development', 'Model evaluation & tuning', 'Streamlit deployment'],
    github: 'https://github.com/bhavyaabansal22/insurance-prediction-app',
  },
  // project addition ----- 
  // {
  //   // title: 'Insurance Premium Prediction',
  //   // longDesc: 'End-to-end ML pipeline: EDA → feature engineering → model selection → hyperparameter tuning → deployment via a Streamlit web app for real-time insurance premium prediction.',
  //   // tech: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Streamlit'],
  //   // icon: Activity,
  //   // color: '#2563EB',
  //   // bgColor: '#EFF6FF',
  //   // image: '/insurernce.jpg',
  //   // learnings: ['ML pipeline development', 'Model evaluation & tuning', 'Streamlit deployment'],
  //   // github: 'https://github.com/bhavyaabansal22/insurance-prediction-app',
  // },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '96px 0', backgroundColor: 'var(--card)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ marginBottom: '64px' }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)' }}>
            Projects
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', marginTop: '10px', marginBottom: '16px' }}>
            Featured Work
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '520px', lineHeight: 1.7 }}>
            Data and ML projects spanning Python analytics, SQL analysis, Excel dashboards, and predictive modeling.
          </p>
        </motion.div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {projects.map((project, i) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
                style={{ borderRadius: '24px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'box-shadow 0.3s ease, transform 0.3s ease', display: 'flex', flexDirection: 'column' }}
              >
                {/* Image area */}
                <div style={{ height: '140px', backgroundColor: project.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{ width: 64, height: 64, borderRadius: '18px', backgroundColor: project.color + '20', border: `2px solid ${project.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={28} color={project.color} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '16px', flex: 1 }}>
                    {project.longDesc}
                  </p>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '8px' }}>
                      Key Learnings
                    </p>
                    {project.learnings.map((l) => (
                      <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: '4px' }}>
                        <span style={{ color: project.color }}>→</span> {l}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '6px', marginBottom: '20px' }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ padding: '3px 10px', borderRadius: '6px', backgroundColor: project.color + '14', color: project.color, fontSize: '0.74rem', fontWeight: 600, border: `1px solid ${project.color}28` }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '10px', backgroundColor: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: '0.8rem', fontWeight: 600, transition: 'all 0.2s ease' }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = project.color; el.style.color = project.color }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border)'; el.style.color = 'var(--text)' }}
                    >
                      <GithubIcon size={14} /> GitHub
                    </a>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '10px', backgroundColor: 'var(--bg)', border: '1px dashed var(--border)', color: 'var(--muted)', fontSize: '0.78rem' }}>
                      <ExternalLink size={13} /> Add Live Demo
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            marginTop: '40px',
            padding: '28px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, var(--bg) 0%, var(--card) 100%)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '8px' }}>
              More work
            </p>
            <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>
              See More Projects
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '620px' }}>
              Explore more of my repositories and data projects on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/bhavyaabansal22?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 18px',
              borderRadius: '12px',
              backgroundColor: 'var(--text)',
              color: 'var(--bg)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              boxShadow: 'var(--shadow)',
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)' }}
          >
            <ExternalLink size={16} />
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
