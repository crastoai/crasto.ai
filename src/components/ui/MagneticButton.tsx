import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { MouseEvent, ReactNode, useRef } from 'react'
import { cn } from '@/lib/cn'

/** Botão "atraído" pelo cursor com spring damping. Cores via Design System (navy). */
export function MagneticButton({
  children,
  href,
  className,
  strength = 0.35,
  radius = 110,
  onClick,
}: {
  children: ReactNode
  href?: string
  className?: string
  strength?: number
  radius?: number
  onClick?: () => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.5 })

  function onMove(e: MouseEvent) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    if (Math.hypot(dx, dy) < radius) {
      x.set(dx * strength)
      y.set(dy * strength)
    }
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.94 }}
      className={cn(
        'inline-flex items-center gap-3 rounded-pill bg-navy px-7 py-4 font-semibold text-white shadow-glow transition-colors hover:bg-depth',
        className,
      )}
    >
      {children}
    </motion.a>
  )
}
