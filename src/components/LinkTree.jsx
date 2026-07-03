import { motion } from 'framer-motion'
import { Linkedin, Github, FileText, Download, Mail, ArrowUpRight } from 'lucide-react'

const LINKS = [
  {
    icon: Linkedin,
    title: 'LinkedIn',
    detail: 'linkedin.com/in/pritapans',
    href: 'https://www.linkedin.com/in/pritapans?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  },
  {
    icon: Github,
    title: 'GitHub',
    detail: 'github.com/pritapans',
    href: 'https://github.com/pritapans',
  },
  {
    icon: FileText,
    title: 'Design Portfolio',
    detail: 'Case studies & visual work',
    href: '#',
  },
  {
    icon: Download,
    title: 'Download Resume',
    detail: 'PDF · Updated 2026',
    href: '#',
  },
  {
    icon: Mail,
    title: 'Email',
    detail: 'pritapans@gmail.com',
    href: 'mailto:pritapans@gmail.com',
  },
]

export default function LinkTree() {
  return (
    <section id="linktree" className="relative py-28 bg-ink-900/[0.02] dark:bg-white/[0.02]">
      <div className="mx-auto max-w-4xl px-5">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-3 text-center"
        >
          04 · Elsewhere
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-12 text-center"
        >
          Find me around the web.
        </motion.h2>

        <div className="flex flex-col gap-3">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.015 }}
              className="group glass rounded-2xl px-5 py-4 flex items-center justify-between hover:border-mint-500/40 hover:glow transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-mint-500/20 to-violet-500/20 text-ink-900 dark:text-paper-50 group-hover:from-mint-500/30 group-hover:to-violet-500/30 transition-colors">
                  <link.icon size={18} />
                </div>
                <div>
                  <div className="font-medium text-sm">{link.title}</div>
                  <div className="text-xs text-ink-500 dark:text-paper-200/55 font-mono">{link.detail}</div>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-ink-400 group-hover:text-mint-600 dark:group-hover:text-mint-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
