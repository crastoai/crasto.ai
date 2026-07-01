import Reveal from '@/components/Reveal'
import { useI18n } from '@/i18n/i18n'

// Placeholders — Crasto ajusta fotos, números e depoimentos depois.
// Vídeos ficam com play INOPERANTE até os vídeos dos clientes serem editados.
type Case = { name: string; role: string; initials: string; metric: string; metricSubKey: string; quoteKey: string }
const CASES: Case[] = [
  { name: 'Daniel Campos', role: 'Connect Solar', initials: 'DC', metric: '3×', metricSubKey: 'cases_m1', quoteKey: 'cases_q1' },
  { name: 'Rogério Pytel', role: 'SR Brasil Corretora', initials: 'RP', metric: '24/7', metricSubKey: 'cases_m2', quoteKey: 'cases_q2' },
  { name: 'Dr. Francisco Carneiro de Souza', role: 'CS · Carneiro de Souza Advogados', initials: 'FC', metric: '−60%', metricSubKey: 'cases_m3', quoteKey: 'cases_q3' },
]

export default function Cases() {
  const { t } = useI18n()
  return (
    <section className="blk center cases" id="cases">
      <Reveal>
        <div className="eyebrow">{t('cases_eb')}</div>
        <h2>{t('cases_h')}</h2>
        <p className="lead" style={{ margin: '12px auto 0' }}>{t('cases_sub')}</p>

        <div className="casegrid">
          {CASES.map((c) => (
            <div className="casecard" key={c.name}>
              <div className="casevid" role="img" aria-label={`Depoimento em vídeo — ${c.name}`}>
                <span className="playbtn" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                <span className="soon">{t('cases_soon')}</span>
              </div>
              <div className="caseinfo">
                <div className="caseav">{c.initials}</div>
                <div className="casem">
                  <b>{c.metric}</b> <span>{t(c.metricSubKey)}</span>
                </div>
              </div>
              <p className="casequote">“{t(c.quoteKey)}”</p>
              <div className="casewho">
                {c.name} · <span>{c.role}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="caseph">{t('cases_ph')}</p>
      </Reveal>
    </section>
  )
}
