/**
 * "Bloco vivo" — mockup de sistema Crasto.ai animado em loop (CSS puro, dados fictícios).
 * Variantes: crm | finance | marketing | consultor. Frame de app escuro (navy), DS Crasto.
 * CRM segue o design real do crm.crasto.ai (Pipeline de Vendas).
 */
export default function SystemMockup({ variant, url }: { variant: 'crm' | 'finance' | 'marketing' | 'consultor'; url: string }) {
  return (
    <div className="mck" role="img" aria-label={`Demonstração animada — ${variant}`}>
      <div className="mck-top">
        <span className="d" />
        <span className="d" />
        <span className="d" />
        <span className="mck-url">{url}</span>
      </div>
      <div className={`mck-body ${variant}`}>{body(variant)}</div>
    </div>
  )
}

function body(variant: 'crm' | 'finance' | 'marketing' | 'consultor') {
  if (variant === 'crm') {
    return (
      <>
        <div className="crm-head">
          <b>Pipeline de Vendas</b>
          <span className="crm-new">+ Novo Lead</span>
        </div>
        <div className="crm-board">
          <div className="crm-col cc1">
            <div className="cch">Novo <em>3</em></div>
            <div className="cc">Ana · Moda</div>
            <div className="cc">João · Solar</div>
          </div>
          <div className="crm-col cc2">
            <div className="cch">Qualificando <em>2</em></div>
            <div className="cc">Bruno · Jurídico</div>
          </div>
          <div className="crm-col cc3">
            <div className="cch">Quente <em>1</em></div>
          </div>
          <div className="crm-col cc4">
            <div className="cch">Convertido <em>5</em></div>
          </div>
        </div>
        <div className="crm-fly">Marina · Seguros</div>
        <div className="crm-cur" />
      </>
    )
  }

  if (variant === 'finance') {
    return (
      <div className="fin2">
        <div className="fin-kpis">
          <div className="fin-k">
            <div className="kl">A receber</div>
            <div className="kv up">R$ 96k</div>
          </div>
          <div className="fin-k">
            <div className="kl">A pagar</div>
            <div className="kv">R$ 54k</div>
          </div>
          <div className="fin-k">
            <div className="kl">Margem</div>
            <div className="kv up">39% ↑</div>
          </div>
        </div>
        <div className="fin-rows">
          <div className="fin-row">
            <span>Redução de despesas</span>
            <em className="dn">−18%</em>
            <div className="fin-track">
              <i className="r1" />
            </div>
          </div>
          <div className="fin-row">
            <span>Aumento de margem</span>
            <em className="up">+12%</em>
            <div className="fin-track">
              <i className="r2" />
            </div>
          </div>
        </div>
        <div className="lbl">Faturamento · timeline</div>
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
          <div className="lbl">Calendário · Julho</div>
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
          <div className="mkt-meta">✨ Post gerado pela IA · publicado no Instagram</div>
        </div>
      </div>
    )
  }

  // consultor
  return (
    <>
      <div className="lbl" style={{ marginBottom: 10 }}>
        Maestro dos agentes · sincronizando
      </div>
      <div className="con-list">
        <div className="con-i">
          <span className="ck">✓</span> Processo comercial <em className="tag">atualizado</em>
        </div>
        <div className="con-i">
          <span className="ck">✓</span> Playbook de atendimento <em className="tag">atualizado</em>
        </div>
        <div className="con-i">
          <span className="ck">✓</span> Fluxo financeiro <em className="tag">atualizado</em>
        </div>
        <div className="con-i">
          <span className="ck">✓</span> Instruções → todos os agentes <em className="tag">sincronizado</em>
        </div>
      </div>
    </>
  )
}
