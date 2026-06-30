import { AnimatePresence, motion } from 'framer-motion'

interface PageTransitionProps {
  isVisible: boolean
}

export function PageTransition({ isVisible }: PageTransitionProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div className="loader-shell" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
          <div className="loader-shell__pulse" />
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <span className="section-label">Loading experience</span>
            <h1 className="text-3xl font-semibold text-white sm:text-5xl">Graduation Website</h1>
            <p className="max-w-md text-sm leading-6 text-white/68">Đang kích hoạt smooth scroll, motion layers và data-driven sections.</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}