import Section from './Section'
import Reveal from './Reveal'
import { journey } from '../data'

const label = { done: 'Done', now: 'In progress', next: 'Next' }
const dot = {
  done: 'bg-violet-500',
  now: 'bg-blue-500 animate-pulse',
  next: 'bg-transparent',
}

export default function Journey() {
  return (
    <Section id="journey" eyebrow="Learning journey" title="How I got here">
      <ol className="ml-3 max-w-2xl border-l border-violet-500/30">
        {journey.map((j, i) => (
          <Reveal as="li" key={j.title} delay={i * 0.05} className="relative mb-8 ml-6 last:mb-0">
            <span aria-hidden className={`absolute -left-[33px] top-1.5 h-4 w-4 rounded-full border-2 border-violet-500 ${dot[j.status]}`} />
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{label[j.status]}</p>
            <h3 className="font-display text-lg font-bold">{j.title}</h3>
            <p>{j.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
