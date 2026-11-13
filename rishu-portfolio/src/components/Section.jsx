import Reveal from './Reveal'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-12">
          <p className="mb-2 text-sm font-medium text-violet-600 dark:text-violet-400">{eyebrow}</p>
          <h2 id={`${id}-title`} className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
