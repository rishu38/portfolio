import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Journey from './components/Journey'
import Roadmap from './components/Roadmap'
import GitHub from './components/GitHub'
import YouTube from './components/YouTube'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'))

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="sr-only z-[200] rounded-lg bg-violet-600 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar theme={theme} onToggle={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Roadmap />
        <GitHub />
        <YouTube />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  )
}
