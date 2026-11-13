import { Code2, Sparkles } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="glass p-6">
          <h3 className="mb-5 flex items-center gap-2 font-display text-xl font-bold">
            <Code2 className="h-5 w-5 text-violet-500" aria-hidden /> Current skills
          </h3>
          {skills.current.map((g) => (
            <div key={g.group} className="mb-5 last:mb-0">
              <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{g.group}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.1} className="glass border-dashed border-violet-500/40 p-6">
          <h3 className="mb-2 flex items-center gap-2 font-display text-xl font-bold">
            <Sparkles className="h-5 w-5 text-violet-500" aria-hidden /> Currently learning
          </h3>
          <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">Still in progress, so not listed as current skills.</p>
          <ul className="flex flex-wrap gap-2">
            {skills.learning.map((s) => <li key={s} className="chip chip-plan">{s}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
