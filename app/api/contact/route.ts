import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { CONTACT_EMAIL, WHATSAPP_1, whatsappLink } from '@/lib/contact'
import { emailLayout, infoRow } from '@/lib/email-template'

interface ContactRequest {
  name: string
  email: string
  phone: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequest = await request.json()

    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    // Send email to admin
    const adminResponse = await resend.emails.send({
      from: `VR Multimarcas <${CONTACT_EMAIL}>`,
      to: CONTACT_EMAIL,
      subject: `Nova mensagem de contato de ${name}`,
      html: emailLayout(
        `Nova mensagem de ${name}`,
        `
          <h2 style="margin:0 0 16px 0; color:#ce9d28; font-size: 20px;">Nova mensagem de contato</h2>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${infoRow('Nome', name)}
            ${infoRow('Email', email)}
            ${infoRow('Telefone', phone)}
          </table>
          <p style="margin: 20px 0 6px 0; color:#9a9a9a; font-size: 13px;">Mensagem:</p>
          <p style="margin:0; padding: 16px; background-color:#000000; border: 1px solid #222222; border-radius: 8px; color:#efefef; font-size: 14px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        `
      ),
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: `VR Multimarcas <${CONTACT_EMAIL}>`,
      to: email,
      subject: 'Recebemos sua mensagem - VR Multimarcas',
      html: emailLayout(
        'Recebemos sua mensagem',
        `
          <h2 style="margin:0 0 16px 0; color:#ce9d28; font-size: 20px;">Obrigado por entrar em contato!</h2>
          <p style="margin:0 0 12px 0;">Olá ${name},</p>
          <p style="margin:0 0 20px 0;">Recebemos sua mensagem e nossa equipe vai te responder em breve.</p>
          <p style="margin:0 0 8px 0; color:#9a9a9a; font-size: 13px;">Se preferir, fale com a gente agora pelo WhatsApp:</p>
          <p style="margin:0 0 20px 0;">
            <a href="${whatsappLink(WHATSAPP_1.number)}" style="display:inline-block; background-color:#ce9d28; color:#000000; font-weight:bold; text-decoration:none; padding: 12px 24px; border-radius: 999px; font-size: 14px;">
              Falar no WhatsApp
            </a>
          </p>
          <p style="margin:0; color:#efefef;">Atenciosamente,<br>Equipe VR Multimarcas</p>
        `
      ),
    })

    return NextResponse.json(
      { success: true, id: adminResponse.data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
