import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
      <p>© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.</p>
    </footer>
  )
}
