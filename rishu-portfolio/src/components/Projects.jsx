import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, CheckCircle2, ChevronDown, ExternalLink, Github, HeartPulse, Layers } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { hms, profile, upcoming } from '../data'

function HmsCard() {
  const [open, setOpen] = useState(false)
  const features = open ? hms.features : hms.features.slice(0, 4)
  const repo = hms.github || `${profile.github}?tab=repositories`

  return (
    <Reveal>
      <motion.article whileHover={{ y: -6 }} className="glass overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-violet-500/10 lg:grid lg:grid-cols-[0.7fr_1.3fr]">
        <div className="grid place-items-center bg-gradient-to-br from-violet-600 to-blue-600 p-10 text-white">
          <HeartPulse className="h-20 w-20" aria-hidden />
        </div>
        <div className="p-6 sm:p-8">
          <span className="badge">Real project</span>
          <h3 className="mt-3 font-display text-2xl font-bold">{hms.title}</h3>
          <p className="mt-2">{hms.blurb}</p>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-500" aria-hidden /> {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400"
          >
            {open ? 'Show fewer features' : `Show all ${hms.features.length} features`}
            <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden />
          </button>

          {hms.tech.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {hms.tech.map((t) => <li key={t} className="chip">{t}</li>)}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <Github className="h-4 w-4" aria-hidden /> GitHub
            </a>
            {hms.live ? (
              <a href={hms.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink className="h-4 w-4" aria-hidden /> Live Demo
              </a>
            ) : (
              <button type="button" disabled title="The live demo link is coming soon" className="btn btn-ghost">
                <ExternalLink className="h-4 w-4" aria-hidden /> Live Demo (soon)
              </button>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

const upcomingIcons = [Layers, Bot]

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built and what's next">
      <HmsCard />
      <h3 className="mb-5 mt-14 font-display text-xl font-bold">Upcoming projects</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {upcoming.map((p, i) => {
          const Icon = upcomingIcons[i]
          return (
            <Reveal key={p.title} delay={i * 0.1} as="article" className="glass border-dashed border-violet-500/40 p-6">
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-violet-500" aria-hidden />
                <span className="badge">Upcoming</span>
              </div>
              <h4 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">{p.title}</h4>
              <p className="mt-2 text-sm">{p.blurb}</p>
              {p.tech.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Planned technologies">
                  {p.tech.map((t) => <li key={t} className="chip chip-plan">{t}</li>)}
                </ul>
              )}
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
