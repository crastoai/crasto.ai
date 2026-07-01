import { useEffect, useState } from 'react'

/** Barra de progresso de scroll (porte fiel do site original: largura em %). */
export default function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setW(Number.isFinite(pct) ? pct : 0)
    }
    document.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => document.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="prog" style={{ width: `${w}%` }} />
}
