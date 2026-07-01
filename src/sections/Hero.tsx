import { useState } from 'react'
import { useI18n, Tx } from '@/i18n/i18n'
import SplitWords from '@/components/SplitWords'

export default function Hero() {
  const { t } = useI18n()
  const [qualOpen, setQualOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  const openQual = () => {
    setQualOpen(true)
    setTimeout(() => document.getElementById('qual')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0)
  }
  const sendLead = () =>
    alert('Obrigado! (demo v2) — aqui o lead validado vai para a Supabase Edge Function, que chama o Gemini Flash e gera seu Roadmap.')

  return (
    <div className="hero">
      <div className="wrap">
        <div className="kick">{t('h_kick')}</div>
        <h1>
          <SplitWords text={t('h_h1a')} /> <SplitWords text={t('h_h1b')} accent />
        </h1>
        <Tx as="p" className="sub" k="h_sub" />
        <button className="videocta" onClick={() => setVideoOpen(true)}>
          <span className="vplay">▶</span> {t('h_video_cta')}
        </button>
        <div className="convo">
          <textarea id="convo" placeholder={t('h_ph')} />
          <div className="row">
            <div className="mic" title="Falar">
              <svg viewBox="0 0 24 24">
                <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V22h2v-3.08A7 7 0 0 0 19 12h-2z" />
              </svg>
            </div>
            <button className="btn go" onClick={openQual}>
              <span>{t('h_go')}</span> <span className="arw">→</span>
            </button>
          </div>
        </div>
        <button className="videohelp" onClick={() => setVideoOpen(true)}>
          {t('h_video_help')}
        </button>
        <div id="qual" className={qualOpen ? 'show' : ''}>
          <h4>{t('q_title')}</h4>
          <p>{t('q_p')}</p>
          <div className="qgrid">
            <input type="text" placeholder={t('q_name')} />
            <input type="text" placeholder={t('q_company')} />
            <input type="tel" placeholder={t('q_wpp')} />
            <input type="email" placeholder={t('q_email')} />
          </div>
          <button className="btn go" style={{ marginTop: 14, width: '100%', justifyContent: 'center' }} onClick={sendLead}>
            <span>{t('q_send')}</span> →
          </button>
        </div>
        <p className="micro">{t('h_micro')}</p>
      </div>

      {videoOpen && (
        <div className="vmodal" onClick={() => setVideoOpen(false)}>
          <div className="vbox" onClick={(e) => e.stopPropagation()}>
            <button className="vx" onClick={() => setVideoOpen(false)} aria-label="Fechar">
              ×
            </button>
            <div className="vframe">
              {/* Quando o vídeo estiver pronto, troque por:
                  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title={t('h_video_title')} allow="autoplay; encrypted-media" allowFullScreen /> */}
              <div className="vsoon">
                <div className="vsoon-ic">🎬</div>
                <b>{t('h_video_title')}</b>
                <p>{t('h_video_soon')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
