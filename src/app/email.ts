"use server";

const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us20",
});

const WELCOME_LIST_ID = "203531";

export async function subscribe(formData: FormData) {
  const payload = {
    email: formData.get("email"),
    tags: formData.get("tags"),
  };
  const response = await client.lists.addListMember(WELCOME_LIST_ID, {
    email_address: payload.email,
    status: "pending",
    tags: payload.tags,
  });
  if (response.ok) {
  }
}
