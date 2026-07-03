import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Phone, MapPin, Mail } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    // Frontend-only: opens the user's mail client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:pritapans@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-mint-600 dark:text-mint-400 mb-3">
            05 · Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-5">
            Let's build something together.
          </h2>
          <p className="text-ink-600 dark:text-paper-200/70 leading-relaxed mb-10 max-w-md">
            Open to internships and entry-level roles in full stack development or
            UI/UX design. Reach out and I'll get back to you soon.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-sm">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-ink-900/[0.04] dark:bg-white/[0.06]">
                <Mail size={15} />
              </span>
              <a href="mailto:pritapans@gmail.com" className="hover:text-mint-600 dark:hover:text-mint-400 transition-colors">
                pritapans@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-ink-900/[0.04] dark:bg-white/[0.06]">
                <Phone size={15} />
              </span>
              <a href="tel:+918072798728" className="hover:text-mint-600 dark:hover:text-mint-400 transition-colors">
                +91 80727 98728
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-ink-900/[0.04] dark:bg-white/[0.06]">
                <MapPin size={15} />
              </span>
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass rounded-2xl p-7 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-ink-500 dark:text-paper-200/55 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full rounded-xl bg-white/70 dark:bg-white/[0.06] border border-ink-900/10 dark:border-white/10 px-4 py-3 text-sm outline-none focus:border-mint-500/60 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-ink-500 dark:text-paper-200/55 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl bg-white/70 dark:bg-white/[0.06] border border-ink-900/10 dark:border-white/10 px-4 py-3 text-sm outline-none focus:border-mint-500/60 transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-ink-500 dark:text-paper-200/55 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about the opportunity..."
              required
              className="w-full rounded-xl bg-white/70 dark:bg-white/[0.06] border border-ink-900/10 dark:border-white/10 px-4 py-3 text-sm outline-none focus:border-mint-500/60 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 dark:bg-mint-500 text-paper-50 dark:text-ink-950 px-6 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {sent ? (
              <>
                <CheckCircle2 size={16} /> Opening your mail client...
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
          <p className="text-[11px] text-ink-400 dark:text-paper-200/40 text-center">
            This form opens your email client with the message pre-filled — no data is stored.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
