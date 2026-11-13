import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, GraduationCap, Linkedin, Mail, Youtube } from 'lucide-react'
import { profile, roles } from '../data'

// Types each word, pauses, deletes it, then moves to the next.
function useTyped(words) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[i]
    const full = !deleting && text === word
    const t = setTimeout(() => {
      if (full) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setI((i + 1) % words.length)
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, full ? 1400 : deleting ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, deleting, i, words])

  return text
}

const socials = [
  { label: 'GitHub', href: profile.github, Icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
  { label: 'YouTube', href: profile.youtube, Icon: Youtube },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export default function Hero() {
  const typed = useTyped(roles)

  return (
    <section id="home" aria-labelledby="hero-title" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
          <h1 id="hero-title" className="font-display text-4xl font-bold leading-tight sm:text-6xl">
            Hi, I'm <span className="grad-text">Rishu Kumar</span>
          </h1>
          <p className="mt-3 font-display text-xl font-medium text-slate-800 dark:text-slate-100 sm:text-2xl">{profile.title}</p>
          <p className="mt-4 h-8 text-lg text-slate-600 dark:text-slate-400">
            <span className="sr-only">{roles.join(', ')}</span>
            <span aria-hidden>
              <span className="font-semibold text-violet-600 dark:text-violet-400">{typed}</span>
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <p className="mt-4 max-w-md text-lg">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              Explore My Projects <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href={profile.resume} download className="btn btn-ghost">
              <Download className="h-4 w-4" aria-hidden /> Download My Resume
            </a>
          </div>

          <ul className="mt-8 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="icon-btn"
                  {...(href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div aria-hidden className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-500 to-blue-500 opacity-60 blur-xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-500 to-blue-500 p-1">
            <img
              src="/images/profile.jpg"
              alt="Portrait of Rishu Kumar"
              width="900"
              height="831"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-[45%_0%]"
            />
          </div>
          <div className="glass absolute -bottom-5 left-4 flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-100">
            <GraduationCap className="h-4 w-4 text-violet-500" aria-hidden /> BCA, Mewar University
          </div>
        </motion.div>
      </div>
    </section>
  )
}
