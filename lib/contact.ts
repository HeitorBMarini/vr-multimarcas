export const WHATSAPP_VENDAS = {
  label: 'Vendas',
  number: '5511999021179',
  display: '(11) 99902-1179',
}

export const WHATSAPP_SUPORTE = {
  label: 'Suporte',
  number: '5511971127181',
  display: '(11) 97112-7181',
}

export function whatsappLink(number: string, message?: string) {
  const base = `https://wa.me/${number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
