// Registro central do GSAP + plugins.
// Importe daqui em qualquer componente: `import { gsap, ScrollTrigger } from '@/lib/gsap'`
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// dev: expõe o gsap no window para inspeção/congelar timeline em validação
if (import.meta.env.DEV) (window as unknown as { gsap: typeof gsap }).gsap = gsap

export { gsap, ScrollTrigger, useGSAP }
