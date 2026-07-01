import { useI18n } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

export default function HowItWorks() {
  const { t } = useI18n()
  return (
    <section className="blk center" id="metodo">
      <Reveal>
        <div className="eyebrow">{t('s2_eb')}</div>
        <h2>{t('s2_h')}</h2>
        <div className="grid3">
          <div className="card">
            <div className="n">01</div>
            <h3>{t('s2a_t')}</h3>
            <p>{t('s2a_p')}</p>
          </div>
          <div className="card">
            <div className="n">02</div>
            <h3>{t('s2b_t')}</h3>
            <p>{t('s2b_p')}</p>
          </div>
          <div className="card">
            <div className="n">03</div>
            <h3>{t('s2c_t')}</h3>
            <p>{t('s2c_p')}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
