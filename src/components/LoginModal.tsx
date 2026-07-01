import { useI18n } from '@/i18n/i18n'

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n()
  return (
    <div
      className={`modal ${open ? 'show' : ''}`}
      id="login"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'login') onClose()
      }}
    >
      <div className="box">
        <button className="x" onClick={onClose}>
          ✕
        </button>
        <h3>{t('lg_title')}</h3>
        <p className="sub">{t('lg_sub')}</p>
        <label>{t('lg_email')}</label>
        <input type="email" placeholder="voce@empresa.com" />
        <label>{t('lg_pass')}</label>
        <input type="password" placeholder="••••••••" />
        <button
          className="btn go"
          style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}
          onClick={() => alert('Login conectará ao Supabase (em breve).')}
        >
          {t('lg_btn')}
        </button>
        <a className="forgot" href="#">
          {t('lg_forgot')}
        </a>
      </div>
    </div>
  )
}
