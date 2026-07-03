import { motion } from 'framer-motion'
import { Award, Users, Mic } from 'lucide-react'

const ITEMS = [
  {
    icon: Award,
    title: 'Runner-Up, Best Poster — IEEE SRM',
    detail: 'Competed against 50+ teams; recognized for research quality and visual presentation.',
  },
  {
    icon: Award,
    title: 'Best Poster Award (×3)',
    detail: 'Awarded across multiple inter-collegiate academic competitions.',
  },
  {
    icon: Users,
    title: '2nd Place, Best Manager Competition — VIT',
    detail: 'Recognized for strategic thinking and team leadership under competitive conditions.',
  },
  {
    icon: Mic,
    title: 'International Service Director — Rotaract Club',
    detail: 'Leading international service projects and community outreach with global chapters.',
  },
]

export default function Achievements() {
  return (
    <section className="relative py-24 border-y border-ink-900/5 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-10"
        >
          Achievements & Leadership
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl p-5 border border-ink-900/8 dark:border-white/8 hover:border-mint-500/40 transition-colors"
            >
              <item.icon size={18} className="text-mint-600 dark:text-mint-400 mb-4" />
              <h3 className="font-display text-sm font-semibold leading-snug">{item.title}</h3>
              <p className="text-xs text-ink-500 dark:text-paper-200/55 mt-2 leading-relaxed">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
