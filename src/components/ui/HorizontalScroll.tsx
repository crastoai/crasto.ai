import { ReactNode, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/** Scroll horizontal pinado via GSAP (cards passam na horizontal enquanto rola na vertical). */
export function HorizontalScroll({
  sticky,
  children,
  className = '',
  ariaLabel,
}: {
  sticky?: ReactNode
  children: ReactNode
  className?: string
  ariaLabel?: string
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const barWrapRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(trackRef.current, { x: 0 })
        return
      }
      const track = trackRef.current!
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth)

      const showBar = () => barWrapRef.current && (barWrapRef.current.style.opacity = '1')
      const hideBar = () => barWrapRef.current && (barWrapRef.current.style.opacity = '0')

      gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: showBar,
          onEnterBack: showBar,
          onLeave: hideBar,
          onLeaveBack: hideBar,
          onUpdate: (self) => {
            if (progressRef.current) progressRef.current.style.transform = `scaleX(${self.progress})`
          },
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`relative h-screen w-full overflow-hidden ${className}`} aria-label={ariaLabel}>
      {sticky && <div className="pointer-events-none absolute inset-0 z-20">{sticky}</div>}
      <div ref={trackRef} className="flex h-full items-start lg:items-center will-change-transform pt-24 sm:pt-28 lg:pt-0">
        {children}
      </div>
      <div
        ref={barWrapRef}
        className="absolute bottom-0 left-0 right-0 z-30 h-[3px] bg-line opacity-0 transition-opacity duration-500"
        aria-hidden="true"
      >
        <div ref={progressRef} className="h-full origin-left bg-gradient-to-r from-navy to-accent" style={{ transform: 'scaleX(0)' }} />
      </div>
    </section>
  )
}
