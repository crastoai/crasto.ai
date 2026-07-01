import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// CSS portado verbatim do site original (fonte da verdade visual no momento).
// Tailwind/Framer Motion/GSAP continuam instalados para a migração seção por seção.
import './styles/landing.css'
import './styles/intro.css'
import './styles/showcase.css'
import App from './App'

// Sem intro loader: a página entra instantânea. O hero usa sua entrada CSS padrão
// (mesmo caminho do visitante recorrente — leve e sem contador de %).

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
