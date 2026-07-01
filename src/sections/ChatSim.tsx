import { useEffect, useRef } from 'react'
import { useI18n, Tx } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

// Quem envia cada mensagem (cout = cliente/direita, cin = Julie/esquerda). O texto vem do i18n.
const WHO: ('cin' | 'cout')[] = ['cout', 'cin', 'cout', 'cin', 'cout', 'cin']

export default function ChatSim() {
  const { t, lang } = useI18n()
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    let started = false
    let alive = true
    const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
    // monta a sequência no idioma atual (re-executa quando `lang` muda)
    const seq = WHO.map((w, i) => ({ w, t: t(`chat_s${i + 1}`) }))

    async function play() {
      if (started) return
      started = true
      while (alive) {
        box!.innerHTML = ''
        for (const m of seq) {
          if (!alive) return
          if (m.w === 'cin') {
            const tp = document.createElement('div')
            tp.className = 'typing'
            tp.innerHTML = '<span></span><span></span><span></span>'
            box!.appendChild(tp)
            await wait(850 + m.t.length * 11)
            tp.remove()
          } else {
            await wait(520)
          }
          const b = document.createElement('div')
          b.className = 'bubble ' + m.w
          b.textContent = m.t
          box!.appendChild(b)
          await wait(720)
        }
        await wait(3200)
      }
    }

    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && play()), { threshold: 0.3 })
    io.observe(box)
    return () => {
      alive = false
      io.disconnect()
    }
  }, [t, lang])

  return (
    <section className="blk chatsec">
      <Reveal>
        <div className="chatgrid">
          <div className="fone">
            <div className="bar">
              <div className="av">J</div>
              <div>
                <div className="who">{t('chat_who')}</div>
                <div className="st">{t('chat_on')}</div>
              </div>
            </div>
            <div className="chat" id="chat" ref={boxRef} />
          </div>
          <div className="chatcopy">
            <div className="eyebrow">{t('chat_eb')}</div>
            <h2>{t('chat_h')}</h2>
            <Tx as="p" className="lead" k="chat_p" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
