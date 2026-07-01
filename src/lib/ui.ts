/** Rola até o input conversacional do hero e foca (igual ao site original). */
export function focusConvo() {
  const c = document.getElementById('convo') as HTMLTextAreaElement | null
  if (!c) return
  c.scrollIntoView({ behavior: 'smooth', block: 'center' })
  c.focus()
}
