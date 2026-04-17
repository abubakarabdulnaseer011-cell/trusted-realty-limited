import { Resend } from "resend";

import type { InquiryPayload } from "@/lib/validators";

let resendClient: Resend | null = null;

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(payload: InquiryPayload) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Service", payload.service],
    ["City", payload.city || "Not specified"],
    ["Budget", payload.budget || "Not specified"],
    ["Property", payload.propertyTitle || "General inquiry"],
    ["Page", payload.propertyUrl || payload.source],
  ];

  const rowMarkup = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 0;color:#7a7064;font-size:13px;border-bottom:1px solid #e7dcc7;">${escapeHtml(
          label,
        )}</td><td style="padding:10px 0;color:#171411;font-size:14px;border-bottom:1px solid #e7dcc7;">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");

  return `
    <div style="background:#0f0d0b;padding:32px;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#f5f0e8;border-radius:24px;overflow:hidden;border:1px solid #d8c7a6;">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#11100f,#26211a);color:#f8f5ee;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#d1bb8d;">Trusted Realty Limited</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">New website inquiry</h1>
        </div>
        <div style="padding:28px 32px;">
          <table style="width:100%;border-collapse:collapse;">${rowMarkup}</table>
          <div style="margin-top:24px;">
            <p style="margin:0 0 8px;font-size:13px;letter-spacing:0.14em;text-transform:uppercase;color:#7a7064;">Message</p>
            <p style="margin:0;color:#171411;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(
              payload.message,
            )}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function deliverInquiry(payload: InquiryPayload) {
  const client = getResendClient();
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!client || !to || !from) {
    console.info("[trusted-realty] inquiry received in demo mode", payload);

    return {
      delivered: false,
      mode: "demo" as const,
    };
  }

  const subject = payload.propertyTitle
    ? `Property inquiry: ${payload.propertyTitle}`
    : `Website inquiry: ${payload.service}`;

  await client.emails.send({
    from,
    to,
    replyTo: payload.email,
    subject,
    html: buildEmailHtml(payload),
  });

  return {
    delivered: true,
    mode: "email" as const,
  };
}
