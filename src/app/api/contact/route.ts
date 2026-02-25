import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.RESEND_FROM_EMAIL
const toEmail = process.env.CONTACT_TO_EMAIL

const resend = resendApiKey ? new Resend(resendApiKey) : null

function isValidEmail(value: unknown) {
  return typeof value === 'string' && /\S+@\S+\.\S+/.test(value)
}

export async function POST(request: Request) {
  try {
    if (!resend || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: 'Contact form email service is not configured.' },
        { status: 500 },
      )
    }

    const body = (await request.json()) as {
      name?: unknown
      email?: unknown
      company?: unknown
      phone?: unknown
      message?: unknown
      budget?: unknown
    }

    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const company = typeof body.company === 'string' ? body.company.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const budget = typeof body.budget === 'string' ? body.budget.trim() : ''

    if (!name || !isValidEmail(email) || !message || !budget) {
      return NextResponse.json(
        { error: 'Please fill in name, valid email, message, and budget.' },
        { status: 400 },
      )
    }

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'N/A'}`,
        `Phone: ${phone || 'N/A'}`,
        `Budget: ${budget}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong while sending your inquiry.' },
      { status: 500 },
    )
  }
}