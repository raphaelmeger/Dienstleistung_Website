import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = process.env.CONTACT_EMAIL!

export async function POST(req: Request) {
  const { name, company, email, phone, service, objects, message } = await req.json()

  if (!name || !email || !phone || !service) {
    return NextResponse.json({ error: 'Pflichtfelder fehlen.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Toni Hausmeisterservice <onboarding@resend.dev>',
    to: TO_EMAIL,
    replyTo: email,
    subject: `Neue Anfrage: ${service} von ${name}`,
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
              <td style="padding:8px 0;font-weight:600;font-size:14px">${name}</td>
            </tr>
            ${company ? `<tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Unternehmen</td>
              <td style="padding:8px 0;font-weight:600;font-size:14px">${company}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">E-Mail</td>
              <td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#d4a017">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Telefon</td>
              <td style="padding:8px 0;font-size:14px"><a href="tel:${phone}" style="color:#d4a017">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Leistung</td>
              <td style="padding:8px 0;font-weight:600;font-size:14px">${service}</td>
            </tr>
            ${objects ? `<tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px">Objekte / Einheiten</td>
              <td style="padding:8px 0;font-size:14px">${objects}</td>
            </tr>` : ''}
            ${message ? `<tr>
              <td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top">Nachricht</td>
              <td style="padding:8px 0;font-size:14px">${message.replace(/\n/g, '<br>')}</td>
            </tr>` : ''}
          </table>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0">
            <a href="mailto:${email}" style="display:inline-block;background:#d4a017;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">
              Direkt antworten
            </a>
          </div>
        </div>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
