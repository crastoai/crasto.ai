import { useState } from 'react'
import { I18nProvider } from '@/i18n/i18n'
import ScrollProgress from '@/components/ScrollProgress'
import Topbar from '@/components/Topbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import InstallPill from '@/components/InstallPill'
import LoginModal from '@/components/LoginModal'
import CursorGlow from '@/components/CursorGlow'
import Hero from '@/sections/Hero'
import HowItWorks from '@/sections/HowItWorks'
import ChatSim from '@/sections/ChatSim'
import Systems from '@/sections/Systems'
import Positioning from '@/sections/Positioning'
import Wedge from '@/sections/Wedge'
import Services from '@/sections/Services'
import Trust from '@/sections/Trust'
import Cases from '@/sections/Cases'
import FinalCTA from '@/sections/FinalCTA'
import Faq from '@/sections/Faq'
import Leadership from '@/sections/Leadership'

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <I18nProvider>
      <CursorGlow />
      <ScrollProgress />
      <Topbar onLogin={() => setLoginOpen(true)} />
      <Hero />
      <HowItWorks />
      <ChatSim />
      <Systems />
      <Positioning />
      <Wedge />
      <Services />
      <Trust />
      <Cases />
      <FinalCTA />
      <Leadership />
      <Faq />
      <Footer />

      <InstallPill />
      <WhatsAppFloat />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </I18nProvider>
  )
}
