import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

const ROLES = [
  'Full Stack Developer',
  'Graphic Designer',
  'Data Enthusiast',
  'UI/UX Prototyper',
]

function useTypewriter(words, speed = 65, pause = 1400) {
  const [index, setIndex] = useState(0)
  const [sub, setSub] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && sub === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && sub === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setSub((s) =>
          deleting ? current.slice(0, s.length - 1) : current.slice(0, s.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [sub, deleting, index, words, speed, pause])

  return sub
}

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Ambient background */}
      <div className="absolute inset-0 dotgrid opacity-70" />
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-mint-500/20 blur-3xl animate-drift" />
      <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl animate-drift" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper-50 dark:to-ink-950 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-5 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mint-500 animate-pulse" />
            Chennai, India — Open to internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-semibold leading-[1.05] text-5xl sm:text-6xl lg:text-7xl tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Prita P.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-mono text-xl sm:text-2xl text-ink-700 dark:text-paper-200 h-8"
          >
            {typed}
            <span className="inline-block w-[2px] h-6 bg-mint-500 ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-ink-600 dark:text-paper-200/70 leading-relaxed"
          >
            A creative technologist passionate about building modern web applications,
            intelligent systems, and impactful visual experiences — blending technical
            problem-solving with design thinking to create products that are both
            functional and visually compelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 dark:bg-mint-500 text-paper-50 dark:text-ink-950 px-6 py-3 text-sm font-medium hover:opacity-90 transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 dark:border-white/15 px-6 py-3 text-sm font-medium hover:border-mint-500/60 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>
        </div>

        {/* Terminal signature element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-mint-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
          <div className="relative glass glow rounded-2xl overflow-hidden animate-floaty">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-900/10 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-[11px] text-ink-500 dark:text-paper-200/50">
                prita@portfolio ~ zsh
              </span>
            </div>
            <div className="p-5 font-mono text-[13px] leading-6">
              <p><span className="text-mint-600 dark:text-mint-400">$</span> whoami</p>
              <p className="text-ink-600 dark:text-paper-200/70">bca_student · full_stack_dev · designer</p>
              <p className="mt-3"><span className="text-mint-600 dark:text-mint-400">$</span> cat stack.json</p>
              <pre className="text-ink-600 dark:text-paper-200/70 whitespace-pre-wrap">{`{
  "frontend": ["React", "JS", "HTML5", "CSS3"],
  "backend": ["Node.js", "Flask", "REST APIs"],
  "data": ["Python", "Pandas", "Power BI"],
  "design": ["Figma", "Adobe XD", "Canva"]
}`}</pre>
              <p className="mt-3"><span className="text-mint-600 dark:text-mint-400">$</span> ./deploy_ideas.sh</p>
              <p className="text-violet-500 dark:text-violet-400">building something impactful...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
