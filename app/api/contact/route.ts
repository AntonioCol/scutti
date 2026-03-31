import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── Server-side validation (mirrors client) ────────────────── */

interface ContactForm {
  nome: string;
  email: string;
  telefono: string;
  messaggio: string;
  website: string; // honeypot
}

function validateServer(f: ContactForm): string | null {
  // Honeypot
  if (f.website) return "bot";

  const nome = (f.nome ?? "").trim();
  const nomeRegex = /^[\p{L}' -]+$/u;
  const parole = nome.split(/\s+/).filter(Boolean);
  if (!nome || !nomeRegex.test(nome) || nome.length < 3 || parole.length < 2)
    return "Nome e cognome non validi";

  const email = (f.email ?? "").trim().toLowerCase();
  if (!email || !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email))
    return "Email non valida";

  const messaggio = (f.messaggio ?? "").trim();
  if (!messaggio || messaggio.length < 10)
    return "Messaggio troppo corto";

  return null;
}

/* ── Rate limiting (in-memory, per-IP) ──────────────────────── */

const ipBuckets = new Map<string, number[]>();
const MAX_PER_IP = 5;
const WINDOW_MS = 10 * 60 * 1000; // 10 min

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipBuckets.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);
  ipBuckets.set(ip, recent);
  if (recent.length >= MAX_PER_IP) return true;
  recent.push(now);
  return false;
}

/* ── Route handler ──────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Troppi invii. Riprova tra qualche minuto." },
      { status: 429 }
    );
  }

  let body: ContactForm;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Dati non validi" }, { status: 400 });
  }

  const error = validateServer(body);
  if (error === "bot") {
    // Silently accept but don't send
    return NextResponse.json({ ok: true });
  }
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const nome = body.nome.trim();
  const email = body.email.trim().toLowerCase();
  const telefono = body.telefono?.trim() || "Non fornito";
  const messaggio = body.messaggio.trim();

  try {
    await resend.emails.send({
      from: "Sito Scutti <noreply@scutti.it>",
      to: ["info@scutti.it"],
      replyTo: email,
      subject: `Nuovo contatto dal sito: ${nome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #EF8C00; padding-bottom: 8px;">
            Nuova richiesta dal sito web
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 100px; vertical-align: top;">Nome</td>
              <td style="padding: 8px 0; color: #1a1a1a; font-weight: 500;">${escapeHtml(nome)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #1a1a1a;">
                <a href="mailto:${escapeHtml(email)}" style="color: #EF8C00;">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Telefono</td>
              <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(telefono)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666; vertical-align: top;">Messaggio</td>
              <td style="padding: 8px 0; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(messaggio)}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Inviato dal form di contatto su scutti.it
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Errore nell'invio. Riprova o contattaci direttamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
