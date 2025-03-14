import { Resend } from "resend";

const GENERAL_AUDIENCE_ID = "37f5708f-0596-4315-87b0-69d716bfebb3";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const res = await request.json();
  const response = await resend.contacts.create({
    email: res.email,
    // firstName: "Steve",
    // lastName: "Wozniak",
    unsubscribed: false,
    audienceId: GENERAL_AUDIENCE_ID,
  });
  return Response.json(response);
}
