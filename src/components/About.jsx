import { motion } from 'framer-motion'

const STATS = [
  { value: '100+', label: 'Students led across orgs' },
  { value: '3+', label: 'Full-stack & data projects' },
  { value: '4', label: 'Poster / paper awards' },
  { value: '5', label: 'Professional certifications' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-3"
        >
          01 · About
        </motion.p>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-6">
              Where engineering meets design.
            </h2>
            <p className="text-ink-600 dark:text-paper-200/70 leading-relaxed text-base sm:text-lg">
              I'm a Computer Application student and creative technologist with hands-on
              experience in full stack web development, data analytics, and graphic design.
              I enjoy leading teams, shipping academic projects that hold up under scrutiny,
              and picking up new technologies quickly. I'm currently seeking internship and
              entry-level opportunities in Full Stack Development or UI/UX Design at
              forward-thinking tech companies.
            </p>
            <p className="mt-5 text-ink-600 dark:text-paper-200/70 leading-relaxed text-base sm:text-lg">
              My work moves between two disciplines — writing the code that makes a product
              function, and shaping the visual language that makes it worth using. That
              combination is what I bring to every project.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['BCA Student, SDNB Vaishnav College', 'Chennai, India', 'Rotaract · IEEE Student Member'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-ink-900/10 dark:border-white/10 text-ink-600 dark:text-paper-200/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 hover:border-mint-500/40 transition-colors"
              >
                <div className="font-display text-3xl font-semibold text-gradient">{s.value}</div>
                <div className="mt-1.5 text-sm text-ink-500 dark:text-paper-200/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
