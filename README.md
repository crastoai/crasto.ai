# crasto-site

Landing page profissional da **Crasto.AI** — Vite + React + TypeScript + Tailwind + Framer Motion + GSAP/ScrollTrigger.

## Rodar localmente

```bash
npm install      # primeira vez
npm run dev      # sobe em http://localhost:5173 (abre o navegador)
```

Outros comandos:

```bash
npm run build    # gera /dist (produção)
npm run preview  # serve o /dist localmente
npm run lint     # checagem de tipos (tsc)
```

## Stack & efeitos
- **Framer Motion** — transições de entrada, `whileInView`, barra de progresso de scroll (`useScroll`).
- **GSAP + ScrollTrigger** (`@gsap/react` / `useGSAP`) — reveal palavra-a-palavra com zoom/blur ("text mark"), reveal de cards no scroll.
- **Tailwind** — design system Crasto em `tailwind.config.js` (navy `#031238`, accent `#2E6F9E`, Montserrat).

## Estrutura
```
src/
  main.tsx            # entry
  App.tsx             # composição das seções
  index.css           # Tailwind + tokens + componentes base (.btn, .wrap)
  lib/gsap.ts         # registro central GSAP + plugins
  components/
    ScrollProgress.tsx  # barra de progresso (Framer Motion)
    AnimatedWords.tsx   # reveal de texto com zoom (GSAP) — "text mark"
    Topbar.tsx          # menu fixo
  sections/
    Hero.tsx            # seção 1 — hero + input conversacional
    HowItWorks.tsx      # seção 2 — como funciona (cards com zoom no scroll)
```

## Conteúdo / copy
Fonte da verdade: `../Copy_Wireframe_Landing_Crasto_AI_v1.md` (8 seções).
Site single-file anterior: `../Landing_Crasto_AI_v1.html`.

> Continuidade entre sessões/consoles: ver `../../_CONTEXTO_CLAUDE.md`.
