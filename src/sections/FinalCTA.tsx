import { useI18n } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'
import { focusConvo } from '@/lib/ui'

export default function FinalCTA() {
  const { t } = useI18n()
  return (
    <section className="blk final">
      <Reveal>
        <h2>{t('fin_h')}</h2>
        <div className="ctas">
          <a
            className="prim"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              focusConvo()
            }}
          >
            {t('cta_gen')}
          </a>
        </div>
        <p className="ctahint">{t('fin_hint')}</p>
      </Reveal>
    </section>
  )
}
