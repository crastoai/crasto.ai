import { Fragment } from 'react'

/** Quebra um texto em palavras, cada uma numa máscara (overflow hidden) para o reveal do H1. */
export default function SplitWords({ text, accent = false }: { text: string; accent?: boolean }) {
  const words = text.split(' ')
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="word">
            <span className={accent ? 'word-i accent' : 'word-i'}>{w}</span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </>
  )
}
