import { useEffect, useRef, useState } from 'react'
import { useI18n, LANGS } from '@/i18n/i18n'
import type { LangCode } from '@/i18n/translations'

export default function LangSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const cur = LANGS.find((l) => l[0] === lang)

  // fecha ao clicar fora
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className={`lang ${open ? 'open' : ''}`} ref={ref}>
      <button onClick={() => setOpen((o) => !o)} aria-label="Idioma / Language">
        <svg className="globe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
        </svg>
        <span>{cur ? cur[1] : 'PT'}</span> ▾
      </button>
      <div className="menu">
        {LANGS.map(([code, , label]) => (
          <button
            key={code}
            onClick={() => {
              setLang(code as LangCode)
              setOpen(false)
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
