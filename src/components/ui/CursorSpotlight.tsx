import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { MouseEvent, ReactNode, useRef } from 'react'

/** Holofote suave que segue o cursor — ideal para seções navy escuras. Cor padrão = accent do DS. */
export function CursorSpotlight({
  children,
  className = '',
  color = 'rgba(46, 111, 158, 0.20)',
  size = 520,
}: {
  children: ReactNode
  className?: string
  color?: string
  size?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(-9999)
  const y = useMotionValue(-9999)
  const sx = useSpring(x, { stiffness: 200, damping: 22, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 22, mass: 0.4 })

  function onMove(e: MouseEvent) {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(-9999)
        y.set(-9999)
      }}
      className={`relative ${className}`}
    >
      {!reduced && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 rounded-full blur-3xl"
          style={{
            width: size,
            height: size,
            x: sx,
            y: sy,
            translateX: '-50%',
            translateY: '-50%',
            background: `radial-gradient(circle at center, ${color} 0%, transparent 65%)`,
            mixBlendMode: 'screen',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
