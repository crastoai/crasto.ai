import { useState } from 'react'
import { useI18n } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

const QS = ['1', '2', '3', '4', '5', '6', '7', '8']

export default function Faq() {
  const { t } = useI18n()
  const [open, setOpen] = useState<string | null>('1')
  return (
    <section className="blk faq center" id="faq">
      <Reveal>
        <div className="eyebrow">{t('faq_eb')}</div>
        <h2>{t('faq_h')}</h2>
        <div className="faqlist">
          {QS.map((n) => (
            <div className={`faqi ${open === n ? 'op' : ''}`} key={n}>
              <button onClick={() => setOpen(open === n ? null : n)}>
                <span>{t(`faq_q${n}`)}</span>
                <i>{open === n ? '–' : '+'}</i>
              </button>
              <div className="faqa">
                <p dangerouslySetInnerHTML={{ __html: t(`faq_a${n}`) }} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
