import Reveal from '@/components/Reveal'
import { useI18n } from '@/i18n/i18n'

type Person = { photo?: string; name?: string; roleKey: string; ai?: boolean }
const PEOPLE: Person[] = [
  { photo: '/img/team/crasto.jpg', name: 'Carlos Crasto', roleKey: 'ld_crasto' },
  { photo: '/img/team/jhon.jpg', name: 'Jhonatan Mattos', roleKey: 'ld_jhon' },
  { photo: '/img/team/juliana.jpg', name: 'Juliana Crasto', roleKey: 'ld_juliana' },
  { photo: '/img/team/julie.jpg', name: 'Julie', roleKey: 'ld_julie' },
  { ai: true, roleKey: 'ld_ai' },
]

/** Cérebro com conexões neurais = o enxame de agentes de IA (arte SVG animada). */
function AgentBrain() {
  return (
    <svg className="aibrain" viewBox="0 0 120 120" aria-hidden="true">
      <path
        className="bshape"
        d="M78 34c8 0 14 6 14 13 0 3-1 5-2 7 4 2 6 6 6 11 0 6-4 11-10 12 0 7-6 12-13 12-3 3-7 5-11 5s-8-2-11-5c-7 0-13-5-13-12-6-1-10-6-10-12 0-5 2-9 6-11-1-2-2-4-2-7 0-7 6-13 14-13 3-4 8-6 13-6s10 2 13 6z"
        fill="#101f42"
        stroke="#8FB1D6"
        strokeWidth="1.6"
      />
      <path d="M60 26v70" stroke="#8FB1D6" strokeWidth="1" opacity=".4" />
      <g className="blines" stroke="#6E9CE8" strokeWidth="1.2" fill="none">
        <line x1="44" y1="46" x2="62" y2="40" />
        <line x1="44" y1="46" x2="52" y2="64" />
        <line x1="62" y1="40" x2="78" y2="52" />
        <line x1="52" y1="64" x2="72" y2="68" />
        <line x1="78" y1="52" x2="72" y2="68" />
        <line x1="52" y1="64" x2="58" y2="82" />
      </g>
      <g className="bnodes" fill="#46C3FF">
        <circle cx="44" cy="46" r="3.4" />
        <circle cx="62" cy="40" r="3.4" />
        <circle cx="78" cy="52" r="3.4" />
        <circle cx="52" cy="64" r="3.4" />
        <circle cx="72" cy="68" r="3.4" />
        <circle cx="58" cy="82" r="3.4" />
      </g>
    </svg>
  )
}

export default function Leadership() {
  const { t } = useI18n()
  return (
    <section className="blk center leadership" id="lideranca">
      <Reveal>
        <div className="eyebrow">{t('ld_eb')}</div>
        <h2>{t('ld_h')}</h2>
        <div className="leadgrid">
          {PEOPLE.map((p, i) =>
            p.ai ? (
              <div className="leadcard ai" key={i}>
                <div className="leadphoto aiart">
                  <AgentBrain />
                </div>
                <div className="leadname">{t('ld_ai_t')}</div>
                <div className="leadrole">{t('ld_ai')}</div>
              </div>
            ) : (
              <div className="leadcard" key={i}>
                <div className="leadphoto">
                  <img src={p.photo} alt={p.name} loading="lazy" />
                </div>
                <div className="leadname">{p.name}</div>
                <div className="leadrole">{t(p.roleKey)}</div>
              </div>
            ),
          )}
        </div>
      </Reveal>
    </section>
  )
}
