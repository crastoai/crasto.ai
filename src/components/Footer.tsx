import { useI18n } from '@/i18n/i18n'

const SOCIALS = [
  {
    href: 'https://www.linkedin.com/company/crastoai',
    label: 'LinkedIn',
    d: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.3-.02-2.97-1.8-2.97-1.8 0-2.07 1.4-2.07 2.87V21h-4z',
  },
  {
    href: 'https://www.youtube.com/@crastoai',
    label: 'YouTube',
    d: 'M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.77-1.77C19.3 5.1 12 5.1 12 5.1s-7.3 0-8.83.42A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.77 1.77c1.53.43 8.83.43 8.83.43s7.3 0 8.83-.42a2.5 2.5 0 0 0 1.77-1.78C23 15.2 23 12 23 12zM9.75 15.5v-7l6 3.5z',
  },
  {
    href: 'https://www.instagram.com/crasto.ai',
    label: 'Instagram',
    d: 'M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.8-.32 1.7C4.01 8.5 4 8.85 4 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.13-.8-.28-1.7-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 0 12 16.94 4.94 4.94 0 0 0 12 7.06zm0 1.8a3.14 3.14 0 1 1 0 6.28 3.14 3.14 0 0 1 0-6.28zm5.64-2.46a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z',
  },
]

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <div className="fwordmark">crasto⁠.ai</div>
            <p>{t('foot_slogan')}</p>
            <div className="fsoc">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" aria-label={s.label}>
                  <svg viewBox="0 0 24 24">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="fcol">
            <div className="fh">{t('foot_nav')}</div>
            <a href="#metodo">{t('nav_method')}</a>
            <a href="#servicos">{t('nav_services')}</a>
            <a href="#sistemas">{t('sys_eb')}</a>
            <a href="#diferenca">{t('foot_diff')}</a>
          </div>
          <div className="fcol">
            <div className="fh">{t('foot_res')}</div>
            <a href="#cases">{t('nav_cases')}</a>
            <a href="#lideranca">{t('foot_team')}</a>
            <a href="#faq">{t('faq_eb')}</a>
            <a href="/blog">{t('foot_blog')}</a>
            <a href="#">{t('foot_area')}</a>
          </div>
          <div className="fcol">
            <div className="fh">{t('foot_leg')}</div>
            <a href="/privacidade">{t('foot_policy')}</a>
            <a href="/termos">{t('foot_terms')}</a>
            <a href="https://wa.me/5511976942188" target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
        <p className="fsec">{t('foot_sec')}</p>
        <div className="fbar">
          <span>{t('foot_rights')}</span>
        </div>
        <div className="legal">CNPJ 22.053.341/0001-68</div>
      </div>
    </footer>
  )
}
