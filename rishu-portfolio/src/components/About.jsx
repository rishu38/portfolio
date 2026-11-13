import { CalendarDays, GraduationCap, Mail, MapPin } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { education, profile } from '../data'

const facts = [
  { Icon: GraduationCap, label: 'Education', value: `BCA, ${education.school}` },
  { Icon: CalendarDays, label: 'Year', value: education.year },
  { Icon: MapPin, label: 'Location', value: profile.location },
  { Icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="A student who likes building things">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="max-w-prose space-y-4 text-lg leading-relaxed">
          <p>
            I'm Rishu Kumar, a BCA student at Mewar University, currently in my 2nd year. I'm interested in
            programming, web development and building useful, real-world software solutions.
          </p>
          <p>
            My foundation is in C, Python, Java and SQL, along with HTML, CSS and JavaScript for the web. I've built a
            Hospital Management System, and I'm now learning the MERN stack to grow into a full stack developer.
            Further ahead, I want to explore cloud engineering and DevOps.
          </p>
        </Reveal>
        <Reveal delay={0.1} as="ul" className="grid gap-3">
          {facts.map(({ Icon, label, value, href }) => (
            <li key={label} className="glass flex items-center gap-4 p-4">
              <Icon className="h-5 w-5 shrink-0 text-violet-500" aria-hidden />
              <div className="min-w-0">
                <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                {href ? (
                  <a href={href} className="break-all font-medium text-slate-900 hover:text-violet-600 dark:text-white dark:hover:text-violet-300">{value}</a>
                ) : (
                  <p className="font-medium text-slate-900 dark:text-white">{value}</p>
                )}
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
