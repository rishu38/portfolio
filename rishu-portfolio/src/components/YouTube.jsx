import { Youtube } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data'

export default function YouTube() {
  return (
    <Section id="youtube" eyebrow="Creator" title="Beyond code: my YouTube channel">
      <Reveal className="glass relative max-w-2xl overflow-hidden p-6">
        <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-red-600 text-white">
            <Youtube className="h-8 w-8" aria-hidden />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold">RisuFact</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">@risufact</p>
            <p className="mt-2">A Hindi facts channel with short, quick videos.</p>
            <a href={profile.youtube} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">Visit Channel</a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
