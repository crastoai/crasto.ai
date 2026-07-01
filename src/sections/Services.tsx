import { useI18n } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

export default function Services() {
  const { t } = useI18n()
  const tags = ['sv1', 'sv2', 'sv3', 'sv4', 'sv5', 'sv6', 'sv7', 'sv8']
  return (
    <section className="blk alt center" id="servicos">
      <Reveal>
        <div className="eyebrow">{t('sv_eb')}</div>
        <h2>{t('sv_h')}</h2>
        <div className="serv">
          {tags.map((k) => (
            <span key={k}>{t(k)}</span>
          ))}
        </div>
        <div className="two">
          <div className="card">
            <h3>{t('sva_t')}</h3>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>{t('sva_p')}</p>
          </div>
          <div className="card">
            <h3>{t('svb_t')}</h3>
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>{t('svb_p')}</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
