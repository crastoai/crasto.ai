import { useEffect, useRef, useState } from 'react'
import { useI18n } from '@/i18n/i18n'

// PWA self-contained (porte fiel): manifest + service worker via blob + beforeinstallprompt.
export default function InstallPill() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)
  const deferred = useRef<any>(null)

  useEffect(() => {
    try {
      const icon = new URL('/img/asset-01.png', window.location.origin).href
      const manifest = {
        name: 'Crasto.AI',
        short_name: 'crasto.ai',
        start_url: '.',
        display: 'standalone',
        background_color: '#031238',
        theme_color: '#031238',
        icons: [
          { src: icon, sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
          { src: icon, sizes: '192x192', type: 'image/png' },
        ],
      }
      const mlink = document.createElement('link')
      mlink.rel = 'manifest'
      mlink.href = URL.createObjectURL(new Blob([JSON.stringify(manifest)], { type: 'application/json' }))
      document.head.appendChild(mlink)
      if ('serviceWorker' in navigator) {
        const sw = `self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('fetch',()=>{});`
        navigator.serviceWorker
          .register(URL.createObjectURL(new Blob([sw], { type: 'text/javascript' })))
          .catch(() => {})
      }
    } catch {
      /* ignore */
    }

    const onPrompt = (e: any) => {
      e.preventDefault()
      deferred.current = e
      setShow(true)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    return () => window.removeEventListener('beforeinstallprompt', onPrompt)
  }, [])

  const install = async () => {
    setShow(false)
    if (!deferred.current) return
    deferred.current.prompt()
    await deferred.current.userChoice
    deferred.current = null
  }

  return (
    <button id="install" className={show ? 'show' : ''} onClick={install}>
      <span>⤓</span> <span>{t('install')}</span>
    </button>
  )
}
