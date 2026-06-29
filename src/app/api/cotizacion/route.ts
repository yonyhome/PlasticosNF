import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";

/**
 * POST /api/cotizacion
 *
 * Receives lead form data, sends two emails:
 *  1. Internal notification to LEAD_NOTIFICATION_EMAIL
 *  2. Auto-reply confirmation to the customer
 *
 * Required environment variables (set in Netlify dashboard):
 *  - RESEND_API_KEY            → key from resend.com
 *  - LEAD_NOTIFICATION_EMAIL   → where leads arrive (e.g. ventas@nfplasticos.com)
 *  - EMAIL_FROM                → verified sender (e.g. Plásticos NF <cotizaciones@plasticosnf.com>)
 */

export const runtime = "nodejs";

interface LeadPayload {
  name: string;
  company?: string;
  email: string;
  phone: string;
  product: string;
  message?: string;
  // Honeypot — bots fill it, humans don't see it
  website?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const data: LeadPayload = await req.json();

    // Anti-spam honeypot
    if (data.website && data.website.length > 0) {
      // Pretend success to bot, do nothing
      return NextResponse.json({ ok: true });
    }

    // Validation
    if (!data.name || !data.email || !data.phone || !data.product) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { ok: false, error: "Correo inválido" },
        { status: 400 }
      );
    }
    if (data.name.length > 100 || data.message && data.message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: "Contenido demasiado largo" },
        { status: 400 }
      );
    }

    // Env vars
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || COMPANY.email;
    const fromEmail =
      process.env.EMAIL_FROM || "Plásticos NF <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("[cotizacion] RESEND_API_KEY not configured");
      return NextResponse.json(
        { ok: false, error: "Servicio de correo no configurado" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Escape user content for HTML emails
    const safe = {
      name: escapeHtml(data.name),
      company: data.company ? escapeHtml(data.company) : "",
      email: escapeHtml(data.email),
      phone: escapeHtml(data.phone),
      product: escapeHtml(data.product),
      message: data.message ? escapeHtml(data.message) : "",
    };

    // === EMAIL 1: Internal lead notification ===
    const internalHtml = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0A0A0B;font-family:-apple-system,Segoe UI,Inter,sans-serif;color:#F5F7FA;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:20px;margin-bottom:32px;">
      <div style="font-size:11px;letter-spacing:0.3em;color:#0066FF;text-transform:uppercase;font-weight:600;">Nueva cotización</div>
      <h1 style="margin:8px 0 0;font-size:24px;font-weight:800;color:#fff;">${safe.name}${
      safe.company ? ` <span style="color:#8A93A6;font-weight:400;">— ${safe.company}</span>` : ""
    }</h1>
    </div>

    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:11px;letter-spacing:0.2em;color:#8A93A6;text-transform:uppercase;">Producto</div>
          <div style="font-size:16px;color:#F5F7FA;margin-top:4px;font-weight:600;">${safe.product}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:11px;letter-spacing:0.2em;color:#8A93A6;text-transform:uppercase;">Teléfono</div>
          <div style="font-size:16px;color:#F5F7FA;margin-top:4px;">
            <a href="tel:${safe.phone}" style="color:#00A6FF;text-decoration:none;">${safe.phone}</a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
          <div style="font-size:11px;letter-spacing:0.2em;color:#8A93A6;text-transform:uppercase;">Correo</div>
          <div style="font-size:16px;color:#F5F7FA;margin-top:4px;">
            <a href="mailto:${safe.email}" style="color:#00A6FF;text-decoration:none;">${safe.email}</a>
          </div>
        </td>
      </tr>
      ${
        safe.message
          ? `<tr>
        <td style="padding:16px 0;">
          <div style="font-size:11px;letter-spacing:0.2em;color:#8A93A6;text-transform:uppercase;">Detalles</div>
          <div style="font-size:15px;color:#F5F7FA;margin-top:8px;line-height:1.6;white-space:pre-wrap;">${safe.message}</div>
        </td>
      </tr>`
          : ""
      }
    </table>

    <div style="margin-top:32px;padding:16px;background:rgba(0,102,255,0.08);border:1px solid rgba(0,102,255,0.2);border-radius:12px;">
      <div style="font-size:12px;color:#8A93A6;">⚡ Responder dentro de los próximos <strong style="color:#00A6FF;">30 minutos</strong> para mejor conversión</div>
    </div>

    <div style="margin-top:24px;display:flex;gap:8px;">
      <a href="https://wa.me/57${safe.phone.replace(/\D/g, "")}" style="display:inline-block;background:#25D366;color:#fff;padding:10px 20px;border-radius:10px;text-decoration:none;font-size:14px;font-weight:600;">Responder por WhatsApp</a>
      <a href="mailto:${safe.email}" style="display:inline-block;background:#0066FF;color:#fff;padding:10px 20px;border-radius:10px;text-decoration:none;font-size:14px;font-weight:600;">Responder por correo</a>
    </div>

    <div style="margin-top:40px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:#8A93A6;">
      Lead enviado desde el formulario de cotización en plasticosnf.com<br>
      ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota", dateStyle: "full", timeStyle: "short" })}
    </div>
  </div>
</body>
</html>`;

    const internalText = `NUEVA COTIZACIÓN — ${data.name}${data.company ? ` (${data.company})` : ""}

Producto: ${data.product}
Teléfono: ${data.phone}
Correo: ${data.email}
${data.message ? `\nDetalles:\n${data.message}\n` : ""}
Recibido: ${new Date().toLocaleString("es-CO", { timeZone: "America/Bogota" })}
`;

    // === EMAIL 2: Customer auto-reply ===
    const customerHtml = `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0A0A0B;font-family:-apple-system,Segoe UI,Inter,sans-serif;color:#F5F7FA;">
  <div style="max-width:560px;margin:0 auto;padding:48px 24px;">
    <div style="text-align:center;margin-bottom:32px;">
      <div style="display:inline-block;width:64px;height:64px;border-radius:20px;background:linear-gradient(135deg,#0066FF,#00A6FF);box-shadow:0 0 40px rgba(0,166,255,0.3);line-height:64px;font-size:32px;color:#fff;">✓</div>
    </div>

    <h1 style="font-size:28px;font-weight:800;color:#fff;text-align:center;margin:0 0 12px;letter-spacing:-0.02em;">
      Recibimos tu solicitud
    </h1>
    <p style="text-align:center;color:#8A93A6;font-size:16px;margin:0 0 36px;line-height:1.5;">
      Hola ${safe.name}, gracias por contactar a Plásticos NF.
    </p>

    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;margin-bottom:24px;">
      <p style="font-size:15px;line-height:1.7;color:#F5F7FA;margin:0 0 16px;">
        Nuestro equipo comercial revisará tu requerimiento de <strong style="color:#00A6FF;">${safe.product}</strong> y te contactaremos en las <strong style="color:#fff;">próximas horas hábiles</strong> para enviarte una propuesta personalizada.
      </p>
      <p style="font-size:14px;line-height:1.7;color:#8A93A6;margin:0;">
        Si tu solicitud es urgente, escríbenos directamente por WhatsApp para respuesta inmediata.
      </p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="${`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hola, acabo de enviar una cotización por la web y necesito respuesta urgente.")}`}" style="display:inline-block;background:#25D366;color:#fff;padding:14px 28px;border-radius:12px;text-decoration:none;font-size:15px;font-weight:600;">
        Continuar por WhatsApp →
      </a>
    </div>

    <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:16px;padding:20px;margin-top:32px;">
      <div style="font-size:11px;letter-spacing:0.2em;color:#8A93A6;text-transform:uppercase;margin-bottom:12px;">Resumen de tu solicitud</div>
      <table style="width:100%;font-size:14px;color:#F5F7FA;">
        <tr><td style="padding:4px 0;color:#8A93A6;width:90px;">Producto:</td><td>${safe.product}</td></tr>
        <tr><td style="padding:4px 0;color:#8A93A6;">Teléfono:</td><td>${safe.phone}</td></tr>
        ${safe.company ? `<tr><td style="padding:4px 0;color:#8A93A6;">Empresa:</td><td>${safe.company}</td></tr>` : ""}
      </table>
    </div>

    <div style="text-align:center;margin-top:40px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.06);">
      <div style="font-size:18px;font-weight:800;color:#fff;letter-spacing:-0.01em;">Plásticos NF</div>
      <div style="font-size:12px;color:#8A93A6;margin-top:6px;">${COMPANY.location}</div>
      <div style="font-size:12px;color:#8A93A6;margin-top:4px;">
        <a href="https://plasticosnf.com" style="color:#00A6FF;text-decoration:none;">plasticosnf.com</a>
      </div>
    </div>
  </div>
</body>
</html>`;

    const customerText = `Hola ${data.name},

Gracias por contactar a Plásticos NF. Recibimos tu solicitud de ${data.product}.

Nuestro equipo comercial revisará tu requerimiento y te contactaremos en las próximas horas hábiles con una propuesta personalizada.

Si necesitas respuesta inmediata, escríbenos por WhatsApp:
https://wa.me/${COMPANY.whatsapp}

Resumen:
- Producto: ${data.product}
- Teléfono: ${data.phone}
${data.company ? `- Empresa: ${data.company}\n` : ""}
—
Plásticos NF
${COMPANY.location}
https://plasticosnf.com
`;

    // Send both emails in parallel
    const [internalResult, customerResult] = await Promise.allSettled([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `🔔 Nueva cotización — ${data.name} — ${data.product}`,
        replyTo: data.email,
        html: internalHtml,
        text: internalText,
      }),
      resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: "Recibimos tu solicitud — Plásticos NF",
        replyTo: toEmail,
        html: customerHtml,
        text: customerText,
      }),
    ]);

    // We treat the request as successful if the INTERNAL email went through.
    // Customer auto-reply failure shouldn't block the lead.
    if (internalResult.status === "rejected") {
      console.error("[cotizacion] Internal email failed:", internalResult.reason);
      return NextResponse.json(
        { ok: false, error: "No pudimos enviar tu solicitud, intenta de nuevo" },
        { status: 500 }
      );
    }

    if (customerResult.status === "rejected") {
      console.warn("[cotizacion] Customer auto-reply failed:", customerResult.reason);
      // Still return success — lead was captured
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[cotizacion] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Error inesperado" },
      { status: 500 }
    );
  }
}
