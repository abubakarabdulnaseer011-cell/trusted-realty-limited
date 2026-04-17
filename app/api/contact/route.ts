import { NextResponse } from "next/server";

import { deliverInquiry } from "@/lib/inquiries";
import { inquirySchema } from "@/lib/validators";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = inquirySchema.parse(body);
    const result = await deliverInquiry(payload);

    const message =
      result.mode === "email"
        ? "Thank you. Your inquiry has been received and our team will respond shortly."
        : "Preview mode: your inquiry was captured successfully. Add the email environment variables to enable live delivery from this deployment.";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("[trusted-realty] contact form error", error);

    return NextResponse.json(
      {
        message: "We could not submit your inquiry. Please review the form and try again.",
      },
      { status: 400 },
    );
  }
}
