import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/8 dark:border-white/8 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="font-display font-medium text-sm">
          prita<span className="text-mint-500">.</span>p
        </p>
        <p className="text-xs text-ink-500 dark:text-paper-200/50 font-mono">
          © {new Date().getFullYear()} Prita P. — Built with React, Tailwind & Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/pritapans"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center h-9 w-9 rounded-full border border-ink-900/10 dark:border-white/10 hover:border-mint-500/60 transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/pritapans?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center h-9 w-9 rounded-full border border-ink-900/10 dark:border-white/10 hover:border-mint-500/60 transition-colors"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:pritapans@gmail.com"
            className="grid place-items-center h-9 w-9 rounded-full border border-ink-900/10 dark:border-white/10 hover:border-mint-500/60 transition-colors"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
