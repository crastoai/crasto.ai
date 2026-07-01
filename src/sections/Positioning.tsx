import { useI18n } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

export default function Positioning() {
  const { t } = useI18n()
  const focos = [
    { ic: '📈', tk: 'f_sales_t', pk: 'f_sales_p' },
    { ic: '💰', tk: 'f_cost_t', pk: 'f_cost_p' },
    { ic: '⚡', tk: 'f_perf_t', pk: 'f_perf_p' },
    { ic: '🛡️', tk: 'f_risk_t', pk: 'f_risk_p' },
  ]
  return (
    <section className="blk alt center">
      <Reveal>
        <div className="eyebrow">{t('s3_eb')}</div>
        <p className="anchor">
          <span>{t('s3_a1')}</span> <b>{t('s3_a2')}</b> <span>{t('s3_a3')}</span>
        </p>
        <div className="grid4">
          {focos.map((f) => (
            <div className="card" key={f.tk}>
              <div className="ic">{f.ic}</div>
              <h3>{t(f.tk)}</h3>
              <p>{t(f.pk)}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
