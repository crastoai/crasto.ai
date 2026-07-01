import { useI18n } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'
import SystemMockup from '@/components/SystemMockup'

type Sys = { key: string; variant: 'crm' | 'finance' | 'marketing' | 'consultor'; url: string }
const SYSTEMS: Sys[] = [
  { key: 'crm', variant: 'crm', url: 'crm.crasto⁠.ai' },
  { key: 'mkt', variant: 'marketing', url: 'social.crasto⁠.ai' },
  { key: 'fin', variant: 'finance', url: 'financeiro.crasto⁠.ai' },
  { key: 'con', variant: 'consultor', url: 'consultor.crasto⁠.ai' },
]

export default function Systems() {
  const { t } = useI18n()
  return (
    <section className="systems" id="sistemas">
      <div className="wrap">
        <Reveal>
          <div className="shead">
            <div className="eyebrow">{t('sys_eb')}</div>
            <h2>{t('sys_h')}</h2>
            <p>{t('sys_sub')}</p>
          </div>
        </Reveal>

        {SYSTEMS.map((s, i) => (
          <Reveal key={s.key}>
            <div className={`sysrow ${i % 2 === 1 ? 'rev' : ''}`}>
              <div className="systxt">
                <div className="eyebrow">{t(`sys_${s.key}_eb`)}</div>
                <h3>{t(`sys_${s.key}_t`)}</h3>
                <p>{t(`sys_${s.key}_p`)}</p>
              </div>
              <SystemMockup variant={s.variant} url={s.url} />
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="shead" style={{ marginBottom: 0 }}>
            <span className="eyebrow" style={{ color: 'var(--muted)' }}>
              {t('sys_more')}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
