import { NextResponse } from "next/server";
import { isValidEmail, isValidPhone } from "@/lib/utils";
import { BUSINESS } from "@/lib/constants";

/**
 * Lead intake endpoint (PRD F24). Server-side validation + honeypot.
 * If RESEND_API_KEY is configured, the lead is emailed via Resend; if not
 * (or if email fails), we still log and return 200 so the client UX is
 * resilient and falls back to WhatsApp gracefully.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    name = "",
    phone = "",
    email = "",
    treatment = "",
    datetime = "",
    message = "",
    company = "", // honeypot
  } = body || {};

  // Honeypot: bots fill hidden fields. Pretend success, drop silently.
  if (company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  // Server-side validation (never trust the client).
  const errors = {};
  if (!name.trim()) errors.name = "Name is required.";
  if (!isValidPhone(phone)) errors.phone = "A valid phone number is required.";
  if (email && !isValidEmail(email)) errors.email = "Email is invalid.";
  if (!treatment) errors.treatment = "Treatment is required.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const lead = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    treatment,
    datetime: datetime.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  // Attempt email delivery only when configured.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL || BUSINESS.email;
  const from = process.env.LEAD_FROM_EMAIL || "onboarding@resend.dev";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Voila Website <${from}>`,
          to: [to],
          reply_to: lead.email || undefined,
          subject: `New booking enquiry — ${lead.treatment} (${lead.name})`,
          html: leadEmailHtml(lead),
        }),
      });
      if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    } catch (err) {
      // Don't fail the user — log for ops and continue (WhatsApp fallback).
      console.error("[lead] email delivery failed:", err?.message || err);
    }
  } else {
    // No email provider configured yet — log so leads aren't lost in dev.
    console.info("[lead] received (no email provider configured):", lead);
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}

function leadEmailHtml(lead) {
  const row = (label, value) =>
    value
      ? `<tr><td style="padding:6px 12px;color:#6B6164;font-weight:600">${label}</td><td style="padding:6px 12px;color:#2E2A2B">${escapeHtml(
          value
        )}</td></tr>`
      : "";
  return `
  <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto">
    <h2 style="color:#7A4E57">New booking enquiry</h2>
    <table style="border-collapse:collapse;width:100%">
      ${row("Name", lead.name)}
      ${row("Phone", lead.phone)}
      ${row("Email", lead.email)}
      ${row("Treatment", lead.treatment)}
      ${row("Preferred time", lead.datetime)}
      ${row("Message", lead.message)}
      ${row("Received", lead.receivedAt)}
    </table>
  </div>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
