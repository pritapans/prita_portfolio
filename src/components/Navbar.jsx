import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Links', href: '#linktree' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
          scrolled ? 'glass glow' : ''
        }`}>
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            prita<span className="text-mint-500">.</span>p
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-ink-500 hover:text-ink-900 dark:text-paper-200/70 dark:hover:text-paper-50 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 dark:border-white/10 px-3.5 py-1.5 text-[13px] font-medium hover:border-mint-500/60 transition-colors"
            >
              <Download size={14} /> Resume
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="grid place-items-center h-9 w-9 rounded-full border border-ink-900/10 dark:border-white/10 hover:border-mint-500/60 transition-colors"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden grid place-items-center h-9 w-9 rounded-full border border-ink-900/10 dark:border-white/10"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass mt-2 rounded-2xl px-5 py-4 flex flex-col gap-3 font-mono text-sm uppercase"
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
