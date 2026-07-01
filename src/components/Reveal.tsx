import { useEffect, useRef, type ReactNode } from 'react'

/** Wrapper que adiciona a classe `in` quando entra no viewport (IntersectionObserver). */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && el.classList.add('in')),
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`wrap reveal ${className}`.trim()}>
      {children}
    </div>
  )
}
