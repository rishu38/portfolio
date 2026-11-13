import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react'
import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const COOLDOWN_MS = 60_000
const MIN_FILL_MS = 3_000
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const lastSent = () => { try { return Number(localStorage.getItem('lastMessageSentAt') || 0) } catch { return 0 } }
const markSent = () => { try { localStorage.setItem('lastMessageSentAt', String(Date.now())) } catch { /* storage unavailable */ } }

function validate(d) {
  const e = {}
  if (d.name.trim().length < 2) e.name = 'Enter your full name.'
  if (!isEmail(d.email.trim())) e.email = 'Enter a valid email address.'
  if (d.subject.trim().length < 3) e.subject = 'Add a subject (at least 3 characters).'
  if (d.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.'
  return e
}

function Field({ label, name, error, as: Tag = 'input', ...rest }) {
  const id = `contact-${name}`
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-200">{label}</label>
      <Tag
        id={id}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field ${error ? 'border-red-500' : ''}`}
        {...rest}
      />
      {error && <p id={`${id}-error`} className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const formRef = useRef(null)
  const shownAt = useRef(0)
  const busy = useRef(false)
  const [status, setStatus] = useState({ type: 'idle', msg: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => { shownAt.current = Date.now() }, [])

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (busy.current) return // block duplicate submissions

    const data = Object.fromEntries(new FormData(formRef.current))
    if (data.company) return // honeypot: real people never fill this hidden field

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length) return setStatus({ type: 'error', msg: 'Fix the highlighted fields and try again.' })

    if (Date.now() - shownAt.current < MIN_FILL_MS) return setStatus({ type: 'error', msg: 'That was very quick. Wait a moment and send again.' })
    if (Date.now() - lastSent() < COOLDOWN_MS) return setStatus({ type: 'error', msg: 'You just sent a message. Wait a minute before sending another.' })
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) return setStatus({ type: 'error', msg: `The form isn't configured yet. Email me directly at ${profile.email}.` })

    busy.current = true
    setStatus({ type: 'sending', msg: '' })
    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      if (res.status !== 200) throw new Error(res.text || 'Unexpected response')
      formRef.current.reset()
      markSent()
      setStatus({ type: 'success', msg: "Message delivered. Thanks for reaching out, I'll reply soon." })
    } catch (err) {
      const reason = err?.text || err?.message
      setStatus({ type: 'error', msg: `Your message wasn't sent${reason ? ` (${reason})` : ''}. Try again, or email ${profile.email}.` })
    } finally {
      busy.current = false
    }
  }

  const sending = status.type === 'sending'

  return (
    <Section id="contact" eyebrow="Contact me" title="Let's talk">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="max-w-sm text-lg">Have a project idea, an opportunity, or a question? Send me a message and I'll get back to you.</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-violet-500" aria-hidden /><a href={`mailto:${profile.email}`} className="break-all hover:text-violet-600 dark:hover:text-violet-300">{profile.email}</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-violet-500" aria-hidden />{profile.location}</li>
            <li className="flex items-center gap-3"><Github className="h-5 w-5 text-violet-500" aria-hidden /><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 dark:hover:text-violet-300">github.com/rishu38</a></li>
            <li className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-violet-500" aria-hidden /><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-violet-600 dark:hover:text-violet-300">LinkedIn profile</a></li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form ref={formRef} onSubmit={onSubmit} noValidate className="glass space-y-4 p-6">
            {/* Honeypot: hidden from people, tempting for bots */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>Company<input type="text" name="company" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" autoComplete="name" required error={errors.name} placeholder="Your full name" />
              <Field label="Email" name="email" type="email" autoComplete="email" required error={errors.email} placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" required error={errors.subject} placeholder="What is this about?" />
            <Field label="Message" name="message" as="textarea" rows={5} required error={errors.message} placeholder="Write your message here" />

            <div role="status" aria-live="polite">
              {status.type === 'success' && (
                <p className="flex items-start gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-700 dark:text-emerald-400"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{status.msg}</p>
              )}
              {status.type === 'error' && (
                <p className="flex items-start gap-2 rounded-xl bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-400"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{status.msg}</p>
              )}
            </div>

            <button type="submit" disabled={sending} className="btn btn-primary w-full sm:w-auto">
              {sending ? (<><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending...</>) : (<><Send className="h-4 w-4" aria-hidden /> Send Message</>)}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
