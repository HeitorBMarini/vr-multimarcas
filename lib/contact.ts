export const CONTACT_EMAIL = 'edumarcon@fermoto177vrmultimarcas.net.br'

export const WHATSAPP_1 = {
  number: '5511999021179',
  display: '(11) 99902-1179',
}

export const WHATSAPP_2 = {
  number: '5511971127181',
  display: '(11) 97112-7181',
}

export function whatsappLink(number: string, message?: string) {
  const base = `https://wa.me/${number}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
