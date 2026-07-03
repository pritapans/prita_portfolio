import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'

const PROJECTS = [
  {
    year: '2024 — Present',
    title: 'Campus Connect',
    subtitle: 'Event Management Web App',
    description:
      'A full stack web application enabling seamless event registration, scheduling, and management for college students. RESTful APIs power real-time data flow between frontend and backend, cutting manual event-coordination effort by roughly 60%.',
    tags: ['React.js', 'Node.js', 'MySQL', 'REST APIs'],
  },
  {
    year: '2024',
    title: 'Machine Learning and Its Opportunities',
    subtitle: 'Youth Research Project',
    description:
      "Authored and presented an academic research paper at the Loyola College International Conference, analyzing real-world ML applications across healthcare, finance, and education with supporting data models.",
    tags: ['Python', 'Scikit-learn', 'Data Visualization'],
  },
  {
    year: '2024',
    title: 'Personal Portfolio Website',
    subtitle: 'Frontend Design & Development',
    description:
      'A personal portfolio built from scratch to showcase projects, skills, and design work, with a pixel-perfect, mobile-first layout translated directly from Figma prototypes into production-grade code.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Figma'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-3"
        >
          03 · Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12"
        >
          Things I've built.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-6 flex flex-col h-full hover:border-mint-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-ink-500 dark:text-paper-200/50">{p.year}</span>
                <a
                  href="https://github.com/pritapans"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${p.title} on GitHub`}
                  className="grid place-items-center h-8 w-8 rounded-full border border-ink-900/10 dark:border-white/10 group-hover:border-mint-500/60 transition-colors"
                >
                  <Github size={14} />
                </a>
              </div>

              <h3 className="font-display text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="text-sm text-mint-600 dark:text-mint-400 mt-1 mb-3">{p.subtitle}</p>
              <p className="text-sm text-ink-600 dark:text-paper-200/70 leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-ink-900/[0.04] dark:bg-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/pritapans"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink-900 dark:text-paper-50 group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors"
              >
                View on GitHub
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
