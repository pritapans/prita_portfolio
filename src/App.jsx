import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import LinkTree from './components/LinkTree.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function Loader() {
  return (
    <motion.div
      key="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950"
    >
      <div className="font-mono text-mint-400 text-sm flex items-center gap-2">
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          initializing_portfolio.exe
        </motion.span>
      </div>
    </motion.div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-mint-500 to-violet-500 origin-left z-[60]"
    />
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <LinkTree />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
