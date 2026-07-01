import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/**
 * Intro loader estilo Awwwards (Sui): contador 0→100 numa tela navy que sobe
 * como cortina, revelando a página enquanto o H1 sobe atrás de máscaras.
 * Orquestrado por uma única timeline GSAP para sincronia perfeita.
 */
export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      // trava o scroll durante o intro (sempre restaura para o default ''
      // — não captura o valor anterior, que sob StrictMode poderia ser 'hidden')
      document.body.style.overflow = 'hidden'

      const finish = () => {
        try {
          sessionStorage.setItem('crasto_intro_seen', '1')
        } catch {
          /* ignore */
        }
        document.documentElement.classList.remove('intro-pending')
        document.body.style.overflow = ''
        onDone()
      }

      // segurança: se algo falhar, libera a tela em no máximo 6s
      const safety = window.setTimeout(finish, 6000)

      const counter = { v: 0 }
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          window.clearTimeout(safety)
          finish()
        },
      })

      // 1) contador + barra sobem juntos (0 → 100)
      tl.to(counter, {
        v: 100,
        duration: 2.0,
        ease: 'power1.inOut',
        onUpdate: () => {
          if (countRef.current) countRef.current.textContent = String(Math.round(counter.v))
        },
      }, 0)
      tl.to(barRef.current, { scaleX: 1, duration: 2.0, ease: 'power1.inOut' }, 0)

      // 2) some o conteúdo do loader
      tl.to('.loader-inner', { opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.15')

      // 3) prepara o hero (ainda atrás da cortina)
      tl.add(() => {
        gsap.set('.hero', { visibility: 'visible' })
      })

      // 4) cortina sobe revelando a página
      tl.to(loaderRef.current, { yPercent: -100, duration: 1.0, ease: 'power4.inOut' }, '>-0.1')

      // 5) reveal do hero, sobreposto à subida da cortina
      tl.fromTo('.hero .kick', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '<0.25')
      tl.fromTo(
        '.hero h1 .word-i',
        { yPercent: 115, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.0, stagger: 0.07, ease: 'expo.out' },
        '<0.05',
      )
      tl.fromTo('.hero .sub', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '<0.2')
      tl.fromTo('.hero .convo', { y: 26, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.7 }, '<0.1')
      tl.fromTo(
        ['.hero .micro', '.hero .trust'],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        '<0.1',
      )

      return () => {
        window.clearTimeout(safety)
        document.body.style.overflow = ''
      }
    },
    { dependencies: [] },
  )

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader-inner">
        <div className="loader-kick">crasto⁠.ai</div>
        <div className="loader-count">
          <span ref={countRef}>0</span>
          <i>%</i>
        </div>
      </div>
      <div className="loader-bar">
        <span ref={barRef} />
      </div>
    </div>
  )
}
