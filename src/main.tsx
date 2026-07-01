import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS portado verbatim do site original (fonte da verdade visual no momento).
// Tailwind/Framer Motion/GSAP continuam instalados para a migração seção por seção.
import './styles/landing.css'
import './styles/intro.css'
import './styles/showcase.css'
import App from './App'

// Decide se o intro loader vai rodar (uma vez por sessão) ANTES do primeiro paint,
// para esconder a entrada do hero sem flash.
const runIntro = (() => {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !sessionStorage.getItem('crasto_intro_seen')
  } catch {
    return true
  }
})()
if (runIntro) document.documentElement.classList.add('intro-pending')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App runIntro={runIntro} />
  </StrictMode>,
)
