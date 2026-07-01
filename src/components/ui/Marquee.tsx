import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

/** Faixa em loop infinito (logos, palavras-chave). Para com reduced-motion. */
export function Marquee({
  items,
  speed = 32,
  separator,
  className = '',
}: {
  items: ReactNode[]
  speed?: number
  separator?: ReactNode
  className?: string
}) {
  const reduced = useReducedMotion()
  const loop = [...items, ...items, ...items]

  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden="true">
      <motion.div
        className="flex gap-10 sm:gap-14 whitespace-nowrap will-change-transform"
        animate={reduced ? { x: 0 } : { x: ['0%', '-33.333%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-10">
            {item}
            {separator}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
