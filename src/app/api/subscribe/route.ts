import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const fromEmail = process.env.RESEND_FROM_EMAIL
const toEmail = process.env.BLOG_SUBSCRIBE_TO_EMAIL || process.env.CONTACT_TO_EMAIL

const resend = resendApiKey ? new Resend(resendApiKey) : null

function isValidEmail(value: unknown) {
  return typeof value === 'string' && /\S+@\S+\.\S+/.test(value)
}

export async function POST(request: Request) {
  try {
    if (!resend || !fromEmail || !toEmail) {
      return NextResponse.json(
        { error: 'Newsletter service is not configured.' },
        { status: 500 },
      )
    }

    const body = (await request.json()) as { email?: unknown }
    const email = typeof body.email === 'string' ? body.email.trim() : ''

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: 'New blog subscription request',
      text: [`Subscriber email: ${email}`].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong while saving your subscription.' },
      { status: 500 },
    )
  }
}