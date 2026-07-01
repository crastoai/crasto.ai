import { useI18n } from '@/i18n/i18n'

/**
 * "Bloco vivo" — mockup de sistema Crasto.ai animado em loop (CSS puro, dados fictícios).
 * Variantes: crm | finance | marketing | consultor. Frame de app escuro (navy), DS Crasto.
 * CRM segue o design real do crm.crasto.ai (Pipeline de Vendas).
 * Todos os textos passam pelo i18n (t) → trocam de idioma junto com o site.
 */
export default function SystemMockup({ variant, url }: { variant: 'crm' | 'finance' | 'marketing' | 'consultor'; url: string }) {
  const { t } = useI18n()
  return (
    <div className="mck" role="img" aria-label={`Crasto.ai — ${variant}`}>
      <div className="mck-top">
        <span className="d" />
        <span className="d" />
        <span className="d" />
        <span className="mck-url">{url}</span>
      </div>
      <div className={`mck-body ${variant}`}>{body(variant, t)}</div>
    </div>
  )
}

function body(variant: 'crm' | 'finance' | 'marketing' | 'consultor', t: (k: string) => string) {
  if (variant === 'crm') {
    return (
      <>
        <div className="crm-head">
          <b>{t('mck_crm_title')}</b>
          <span className="crm-new">{t('mck_crm_new')}</span>
        </div>
        <div className="crm-board">
          <div className="crm-col cc1">
            <div className="cch">{t('mck_crm_c1')} <em>3</em></div>
            <div className="cc">{t('mck_crm_l1')}</div>
            <div className="cc">{t('mck_crm_l2')}</div>
          </div>
          <div className="crm-col cc2">
            <div className="cch">{t('mck_crm_c2')} <em>2</em></div>
            <div className="cc">{t('mck_crm_l3')}</div>
          </div>
          <div className="crm-col cc3">
            <div className="cch">{t('mck_crm_c3')} <em>1</em></div>
          </div>
          <div className="crm-col cc4">
            <div className="cch">{t('mck_crm_c4')} <em>5</em></div>
          </div>
        </div>
        <div className="crm-fly">{t('mck_crm_fly')}</div>
        <div className="crm-cur" />
      </>
    )
  }

  if (variant === 'finance') {
    return (
      <div className="fin2">
        <div className="fin-kpis">
          <div className="fin-k">
            <div className="kl">{t('mck_fin_recv')}</div>
            <div className="kv up">R$ 96k</div>
          </div>
          <div className="fin-k">
            <div className="kl">{t('mck_fin_pay')}</div>
            <div className="kv">R$ 54k</div>
          </div>
          <div className="fin-k">
            <div className="kl">{t('mck_fin_margin')}</div>
            <div className="kv up">39% ↑</div>
          </div>
        </div>
        <div className="fin-rows">
          <div className="fin-row">
            <span>{t('mck_fin_r1')}</span>
            <em className="dn">−18%</em>
            <div className="fin-track">
              <i className="r1" />
            </div>
          </div>
          <div className="fin-row">
            <span>{t('mck_fin_r2')}</span>
            <em className="up">+12%</em>
            <div className="fin-track">
              <i className="r2" />
            </div>
          </div>
        </div>
        <div className="lbl">{t('mck_fin_tl')}</div>
        <div className="fin-bars">
          <i /><i /><i /><i /><i /><i /><i />
        </div>
      </div>
    )
  }

  if (variant === 'marketing') {
    return (
      <div className="mkt-wrap">
        <div className="mkt-cal">
          <div className="lbl">{t('mck_mkt_cal')}</div>
          <div className="mkt-days">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className={[3, 6, 10, 13, 17, 20, 24, 27].includes(i) ? 'has' : ''} />
            ))}
          </div>
        </div>
        <div className="mkt-post">
          <div className="mkt-img">📸</div>
          <div className="mkt-cap">
            <span />
            <span />
            <span className="sh" />
          </div>
          <div className="mkt-meta">{t('mck_mkt_meta')}</div>
        </div>
      </div>
    )
  }

  // consultor
  return (
    <>
      <div className="lbl" style={{ marginBottom: 10 }}>
        {t('mck_con_title')}
      </div>
      <div className="con-list">
        <div className="con-i">
          <span className="ck">✓</span> {t('mck_con_i1')} <em className="tag">{t('mck_con_upd')}</em>
        </div>
        <div className="con-i">
          <span className="ck">✓</span> {t('mck_con_i2')} <em className="tag">{t('mck_con_upd')}</em>
        </div>
        <div className="con-i">
          <span className="ck">✓</span> {t('mck_con_i3')} <em className="tag">{t('mck_con_upd')}</em>
        </div>
        <div className="con-i">
          <span className="ck">✓</span> {t('mck_con_i4')} <em className="tag">{t('mck_con_sync')}</em>
        </div>
      </div>
    </>
  )
}
