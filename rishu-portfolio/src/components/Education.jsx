import { GraduationCap } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { education } from '../data'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I'm studying">
      <Reveal className="glass flex max-w-2xl items-center gap-5 p-6">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
          <GraduationCap className="h-7 w-7" aria-hidden />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold">{education.degree}</h3>
          <p>{education.school}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{education.year}, currently pursuing</p>
        </div>
      </Reveal>
    </Section>
  )
}
