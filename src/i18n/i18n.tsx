import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { T, LANGS, type LangCode, type Dict } from './translations'

type I18nCtx = {
  lang: LangCode
  dict: Dict
  t: (key: string) => string
  setLang: (code: LangCode) => void
}

const Ctx = createContext<I18nCtx | null>(null)

function guessInitial(): LangCode {
  let saved: string | null = null
  try {
    saved = localStorage.getItem('crasto_lang')
  } catch {
    /* ignore */
  }
  if (saved && saved in T) return saved as LangCode
  const nav = (navigator.language || 'pt').toLowerCase()
  if (nav.startsWith('en')) return 'en'
  if (nav.startsWith('es')) return 'es'
  if (nav.startsWith('ja')) return 'ja'
  if (nav.startsWith('de')) return 'de'
  if (nav.startsWith('zh')) return 'zhCN'
  return 'pt'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>('pt')

  // descobre idioma inicial no cliente (evita mismatch no SSR/StrictMode)
  useEffect(() => {
    setLangState(guessInitial())
  }, [])

  // mantém <html lang> e localStorage em sincronia
  useEffect(() => {
    document.documentElement.lang = lang.startsWith('zh') ? 'zh' : lang
    try {
      localStorage.setItem('crasto_lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((code: LangCode) => setLangState(code), [])
  const dict = T[lang] || T.pt
  const t = useCallback((key: string) => dict[key] ?? key, [dict])

  const value = useMemo<I18nCtx>(() => ({ lang, dict, t, setLang }), [lang, dict, t, setLang])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n deve ser usado dentro de <I18nProvider>')
  return ctx
}

/** Renderiza uma string traduzida que pode conter HTML (<b>…</b>). */
export function Tx({
  k,
  as: Tag = 'span',
  className,
  ...rest
}: {
  k: string
  as?: React.ElementType
  className?: string
} & React.HTMLAttributes<HTMLElement>) {
  const { t } = useI18n()
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: t(k) }} {...rest} />
}

export { LANGS }
