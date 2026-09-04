import { CONTACT_EMAIL, WHATSAPP_1, WHATSAPP_2, whatsappLink } from './contact'

const GOLD = '#ce9d28'
const GOLD_LIGHT = '#e7c96f'
const BLACK = '#000000'
const CARD_BG = '#111111'
const TEXT = '#efefef'
const MUTED = '#9a9a9a'

export function emailLayout(title: string, bodyHtml: string) {
  return `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin:0; padding:0; background-color:${BLACK}; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BLACK}; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background-color:${CARD_BG}; border:1px solid #222222; border-radius: 12px; overflow: hidden;">
            <tr>
              <td style="background-color:${BLACK}; padding: 28px 32px; border-bottom: 2px solid ${GOLD};">
                <span style="font-size: 24px; font-weight: bold; color:${GOLD};">VR</span>
                <span style="font-size: 24px; font-weight: bold; color:${TEXT};"> Multimarcas</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px; color:${TEXT}; font-size: 15px; line-height: 1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 32px; background-color:${BLACK}; border-top: 1px solid #222222;">
                <p style="margin:0 0 8px 0; color:${GOLD_LIGHT}; font-size: 13px; font-weight: bold;">
                  VR Multimarcas
                </p>
                <p style="margin:0 0 4px 0; color:${MUTED}; font-size: 12px;">
                  Av. Arquiteto Carlos Bratke, 1083 - 4, Jardim Caravelas, São Paulo - SP
                </p>
                <p style="margin:0 0 4px 0; color:${MUTED}; font-size: 12px;">
                  WhatsApp: <a href="${whatsappLink(WHATSAPP_1.number)}" style="color:${GOLD_LIGHT}; text-decoration:none;">${WHATSAPP_1.display}</a>
                  &nbsp;·&nbsp;
                  <a href="${whatsappLink(WHATSAPP_2.number)}" style="color:${GOLD_LIGHT}; text-decoration:none;">${WHATSAPP_2.display}</a>
                </p>
                <p style="margin:0; color:${MUTED}; font-size: 12px;">
                  <a href="mailto:${CONTACT_EMAIL}" style="color:${GOLD_LIGHT}; text-decoration:none;">${CONTACT_EMAIL}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
}

export function infoRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 6px 0; color:${MUTED}; font-size: 13px; width: 110px; vertical-align: top;">${label}</td>
      <td style="padding: 6px 0; color:${TEXT}; font-size: 14px; font-weight: bold;">${value}</td>
    </tr>
  `
}
