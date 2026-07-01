import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n/i18n'
import { focusConvo } from '@/lib/ui'
import LangSwitcher from './LangSwitcher'
import ThemeToggle from './ThemeToggle'

const PhoneLink = () => (
  <a className="phone" href="tel:+5511981810002" aria-label="Ligar para +55 11 98181-0002">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
    <span className="num">+55 11 98181-0002</span>
  </a>
)

export default function Topbar({ onLogin }: { onLogin: () => void }) {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)
  const links = (
    <>
      <a className="lnk" href="#metodo" onClick={close}>{t('nav_method')}</a>
      <a className="lnk" href="#cases" onClick={close}>{t('nav_cases')}</a>
      <a className="lnk" href="#servicos" onClick={close}>{t('nav_services')}</a>
      <a className="lnk" href="/blog" onClick={close}>{t('nav_blog')}</a>
    </>
  )

  return (
    <div className={`top ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="wrap">
        <img className="logo" src="/img/asset-02.png" alt="crasto.ai" />

        <div className="topnav desktop">
          {links}
          <PhoneLink />
          <ThemeToggle />
          <LangSwitcher />
          <button className="entrar" onClick={onLogin}>{t('nav_login')}</button>
          <button className="btn cta-mini" onClick={focusConvo}>{t('nav_start')}</button>
        </div>

        <button className={`hamb ${menuOpen ? 'x' : ''}`} onClick={() => setMenuOpen((o) => !o)} aria-label="Menu" aria-expanded={menuOpen}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="mobmenu">
        <nav className="mobnav">{links}</nav>
        <div className="mobactions">
          <button className="btn cta-mini" onClick={() => { focusConvo(); close() }}>{t('nav_start')}</button>
          <button className="entrar" onClick={() => { onLogin(); close() }}>{t('nav_login')}</button>
        </div>
        <div className="mobtools">
          <ThemeToggle />
          <LangSwitcher />
          <PhoneLink />
        </div>
      </div>
    </div>
  )
}
