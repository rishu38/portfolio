import { Github } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data'

export default function GitHub() {
  return (
    <Section id="github" eyebrow="GitHub" title="My code lives here">
      <Reveal className="glass flex max-w-2xl flex-col gap-6 p-6 sm:flex-row sm:items-center">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-slate-900 text-white dark:bg-white/10">
          <Github className="h-8 w-8" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">@rishu38</h3>
          <p className="mt-1">Repositories, experiments and project code as I learn and build.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Profile</a>
            <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Browse Repositories</a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
