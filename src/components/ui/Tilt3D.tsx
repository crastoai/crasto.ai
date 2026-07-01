import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { MouseEvent, ReactNode, useRef } from 'react'

function Glare({ glareX, glareY }: { glareX: MotionValue<string>; glareY: MotionValue<string> }) {
  const bg = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.45), transparent 45%)`
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay opacity-50"
      style={{ background: bg }}
    />
  )
}

/** Card com tilt 3D que reage ao cursor (perspective + glare opcional). */
export function Tilt3D({
  children,
  className = '',
  max = 12,
  glare = true,
}: {
  children: ReactNode
  className?: string
  max?: number
  glare?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [max, -max]), { stiffness: 240, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-max, max]), { stiffness: 240, damping: 20 })
  const glareX = useTransform(mx, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(my, [-0.5, 0.5], ['0%', '100%'])

  function onMove(e: MouseEvent) {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className={`relative ${className}`}
    >
      {children}
      {glare && !reduced && <Glare glareX={glareX} glareY={glareY} />}
    </motion.div>
  )
}
