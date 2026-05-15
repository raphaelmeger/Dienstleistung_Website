import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL!

// max 3 submissions per IP per 10 minutes
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 3
const ipLog = new Map<string, { count: number; resetAt: number }>()

function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'

  const now = Date.now()
  const entry = ipLog.get(ip)

  if (entry && now < entry.resetAt) {
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte warten Sie kurz.' },
        { status: 429 }
      )
    }
    entry.count++
  } else {
    ipLog.set(ip, { count: 1, resetAt: now + WINDOW_MS })
  }

  const { name, company, email, phone, service, objects, message } =
    await req.json()

  if (!name || !email || !phone || !service) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
  }

  const sName = esc(String(name))
  const sCompany = company ? esc(String(company)) : ''
  const sEmail = esc(String(email))
  const sPhone = esc(String(phone))
  const sService = esc(String(service))
  const sObjects = objects ? esc(String(objects)) : ''
  const sMessage = message
    ? esc(String(message)).replace(/\n/g, '<br>')
    : ''

  const { error } = await resend.emails.send({
    from: 'Toni Hausmeisterservice <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `Neue Anfrage: ${sService} von ${sName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b">
        <div style="background:#0f172a;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:20px">Neue Angebotsanfrage</h1>
          <p style="color:#94a3b8;margin:4px 0 0;font-size:14px">Toni Hausmeisterservice – Kontaktformular</p>
        </div>
        <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px;width:40%">Name</td>
              <td style="padding:8px 0;font-weight:600;font-size:14px">${sName}</td>
            </tr>
            ${sCompany ? `<tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Unternehmen</td>
              <td style="padding:8px 0;font-weight:600;font-size:14px">${sCompany}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">E-Mail</td>
              <td style="padding:8px 0;font-size:14px"><a href="mailto:${sEmail}" style="color:#d4a017">${sEmail}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Telefon</td>
              <td style="padding:8px 0;font-size:14px"><a href="tel:${sPhone}" style="color:#d4a017">${sPhone}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Leistung</td>
              <td style="padding:8px 0;font-weight:600;font-size:14px">${sService}</td>
            </tr>
            ${sObjects ? `<tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Objekte / Einheiten</td>
              <td style="padding:8px 0;font-size:14px">${sObjects}</td>
            </tr>` : ''}
            ${sMessage ? `<tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top">Nachricht</td>
              <td style="padding:8px 0;font-size:14px">${sMessage}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0">
            <a href="mailto:${sEmail}" style="display:inline-block;background:#d4a017;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">
              Direkt antworten
            </a>
          </div>
        </div>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json(
      { error: 'E-Mail konnte nicht gesendet werden.' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
