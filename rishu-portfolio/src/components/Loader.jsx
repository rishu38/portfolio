import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] grid place-items-center bg-[#070b1a]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
          className="mx-auto h-14 w-14 rounded-full border-4 border-violet-500/20 border-r-blue-500 border-t-violet-500"
        />
        <p className="mt-5 font-display text-sm tracking-widest text-slate-400">Rishu Kumar</p>
      </div>
    </motion.div>
  )
}
