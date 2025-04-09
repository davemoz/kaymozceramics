import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateTurnstileToken } from "next-turnstile";
import { v4 } from "uuid";

import { ContactFormSubmissionEmail } from "../../../components/emails/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { fullName, email, message, turnstileToken } = await request.json();

  const validationResponse = await validateTurnstileToken({
    token: turnstileToken,
    secretKey: process.env.TURNSTILE_SECRET_KEY as string,
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === "development",
  });

  if (!validationResponse.success) {
    return NextResponse.json(
      { error: "Invalid turnstile token" },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Kay Moz Ceramics <kay@kaymozceramics.com>",
      to: ["kay@kaymozceramics.com"],
      subject: "Contact Form Submission",
      react: await ContactFormSubmissionEmail({
        fullName,
        email,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Success!", data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
