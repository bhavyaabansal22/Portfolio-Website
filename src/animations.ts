import type { Variants, Transition } from 'framer-motion'

export const ease = 'easeOut' as const

export const spring: Transition = {
  type: 'spring',
  stiffness: 260,
  damping: 30,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export const stagger = (delay = 0): Transition => ({
  duration: 0.6,
  delay,
  ease: 'easeOut',
})

export const viewportOnce = { once: true, margin: '-70px' } as const
