import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { WHATSAPP_1 } from '@/lib/contact'

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
      from: 'contato@vrmultimarcassc.com.br',
      to: 'contato@vrmultimarcassc.com.br',
      subject: `Nova mensagem de contato de ${name}`,
      html: `
        <h2>Nova Mensagem de Contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: 'contato@vrmultimarcassc.com.br',
      to: email,
      subject: 'Recebemos sua mensagem - VR Multimarcas',
      html: `
        <h2>Obrigado por entrar em contato!</h2>
        <p>Olá ${name},</p>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
        <p>Se preferir, você também pode nos contatar via WhatsApp:</p>
        <p><strong>${WHATSAPP_1.display}</strong></p>
        <br>
        <p>Atenciosamente,<br>Equipe VR Multimarcas</p>
      `,
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
