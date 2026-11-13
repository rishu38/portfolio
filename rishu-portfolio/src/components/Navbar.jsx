import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    navLinks.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      io.disconnect()
    }
  }, [])

  const link = (id, label, onClick) => (
    <a
      key={id}
      href={`#${id}`}
      onClick={onClick}
      aria-current={active === id ? 'true' : undefined}
      className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
        active === id
          ? 'bg-violet-500/15 text-violet-700 dark:text-violet-300'
          : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
      }`}
    >
      {label}
    </a>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-slate-900/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#070b1a]/80' : ''
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" aria-label="Rishu Kumar, back to top" className="font-display text-lg font-bold">
          <span className="grad-text">RK</span>
          <span className="ml-2 hidden text-slate-900 dark:text-white sm:inline">Rishu Kumar</span>
        </a>
        <div className="hidden items-center gap-1 xl:flex">{navLinks.map(([id, label]) => link(id, label))}</div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={onToggle} className="icon-btn" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="icon-btn xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden xl:hidden"
          >
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 pb-4">
              {navLinks.map(([id, label]) => link(id, label, () => setOpen(false)))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
