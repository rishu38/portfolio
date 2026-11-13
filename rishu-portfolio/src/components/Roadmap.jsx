import { Fragment } from 'react'
import { ArrowRight, Telescope } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { roadmap } from '../data'

export default function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Career roadmap" title="Where I'm heading">
      <ol className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
        {roadmap.stages.map((s, i) => (
          <Fragment key={s.title}>
            <Reveal as="li" delay={i * 0.1} className={`glass p-6 ${i === 0 ? 'border-violet-500 ring-2 ring-violet-500/40' : 'border-dashed border-violet-500/40'}`}>
              <span className="badge">{s.status}</span>
              <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm">{s.text}</p>
            </Reveal>
            {i < roadmap.stages.length - 1 && (
              <li aria-hidden className="grid place-items-center text-violet-500">
                <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      <Reveal className="mt-10">
        <h3 className="mb-1 flex items-center gap-2 font-display text-xl font-bold">
          <Telescope className="h-5 w-5 text-violet-500" aria-hidden /> Technologies I plan to learn
        </h3>
        <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">Planned learning only. These are not part of my current skills.</p>
        <ul className="flex flex-wrap gap-2">
          {roadmap.planned.map((t) => <li key={t} className="chip chip-plan">{t}</li>)}
        </ul>
      </Reveal>
    </Section>
  )
}
