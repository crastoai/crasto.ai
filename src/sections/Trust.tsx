import { useI18n, Tx } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

export default function Trust() {
  const { t } = useI18n()
  return (
    <section className="blk center">
      <Reveal>
        <div className="eyebrow">{t('tr_eb')}</div>
        <h2>{t('tr_h')}</h2>
        <Tx as="p" className="lead" k="tr_p" />
      </Reveal>
    </section>
  )
}
