import { ContactFormSubmissionEmail } from "../../../components/emails/contact-form";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { fullName, email, message } = await request.json();
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
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
