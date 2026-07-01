import { useI18n, Tx } from '@/i18n/i18n'
import Reveal from '@/components/Reveal'

export default function Wedge() {
  const { t } = useI18n()
  return (
    <section className="blk" id="diferenca">
      <Reveal>
        <div className="wedge">
          <div className="eyebrow">{t('w_eb')}</div>
          <h2>{t('w_h')}</h2>
          <Tx as="p" k="w_p" />
        </div>
      </Reveal>
    </section>
  )
}
