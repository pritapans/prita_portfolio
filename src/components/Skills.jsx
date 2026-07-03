import { motion } from 'framer-motion'

const GROUPS = [
  {
    title: 'Frontend',
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Flask', 'REST APIs', 'Postman'],
  },
  {
    title: 'Data & Analytics',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Power BI', 'Jupyter'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Adobe XD', 'Canva', 'UI/UX Prototyping', 'Brand Identity'],
  },
  {
    title: 'Databases & Cloud',
    items: ['SQL', 'MySQL', 'Firebase'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Linux CLI', 'Agile/Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-ink-900/[0.02] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-3"
        >
          02 · Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12"
        >
          Tools I reach for.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.06 }}
              className="glass rounded-2xl p-6 hover:border-mint-500/40 transition-colors"
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink-500 dark:text-paper-200/50 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-full bg-ink-900/[0.04] dark:bg-white/[0.06] hover:bg-mint-500/15 hover:text-mint-700 dark:hover:text-mint-300 transition-colors cursor-default"
                  >
                    {item}
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
